// ══════════════════════════════════════════════════════════════════
//  ORTHODOX WISDOM — Main Application Logic
// ══════════════════════════════════════════════════════════════════

// ── State ──────────────────────────────────────────────────────────
let currentLang    = "ar";
let messages       = [];
let isLoading      = false;
let sidebarOpen    = true;
let activeView     = "chat";   // "chat" | "library" on mobile
let expandedSection = null;

// ── UI References ──────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

const UI = {
  html:           document.documentElement,
  header:         $("app-header"),
  sidebar:        $("sidebar"),
  sidebarLabel:   $("sidebar-header-label"),
  libSections:    $("library-sections"),
  chatPanel:      $("chat-panel"),
  welcomeScreen:  $("welcome-screen"),
  messagesList:   $("messages-list"),
  welcomeHeading: $("welcome-heading"),
  welcomeVerse:   $("welcome-verse"),
  suggestionsGrid:$("suggestions-grid"),
  inputBar:       $("input-bar"),
  inputWrapper:   $("input-wrapper"),
  chatInput:      $("chat-input"),
  sendBtnRtl:     $("send-btn-rtl"),
  sendBtnLtr:     $("send-btn-ltr"),
  footerNote:     $("footer-note"),
  headerTitle:    $("header-title"),
  headerSub:      $("header-sub"),
  sidebarToggle:  $("sidebar-toggle"),
  langAr:         $("lang-ar"),
  langEn:         $("lang-en"),
  tabChat:        $("tab-chat"),
  tabLibrary:     $("tab-library"),
  viewTabs:       $("view-tabs"),
};

// ── Translations ────────────────────────────────────────────────────
const T = {
  ar: {
    dir: "rtl",
    appTitle:       "الحكمة الأرثوذكسية",
    appSub:         "مستشار لاهوتي بالذكاء الاصطناعي · متجذر في الكتاب المقدس والتراث",
    library:        "المكتبة",
    welcomeHeading: "اسأل بإيمان، فتنال الحق",
    welcomeVerse:   '"اسألوا تُعطَوا، اطلبوا تجدوا، اقرعوا يُفتح لكم." — متى ٧: ٧',
    placeholder:    "اطرح أي سؤال عن الإيمان الأرثوذكسي…",
    footer:         "الكتاب المقدس · الأجبية · الآباء القديسون · المجامع المسكونية · السنكسار",
    error:          "خطأ في الاتصال. يرجى المحاولة مرة أخرى.",
    fallback:       "المجد لله. تعذر الحصول على إجابة في الوقت الحالي.",
    tabChat:        "المحادثة",
    tabLibrary:     "المكتبة",
    suggested: [
      "ما هو التأله (الثيوسيس) في الأرثوذكسية؟",
      "كيف تنظم الأجبية الصلاة اليومية؟",
      "اشرح قانون الإيمان النيقاوي",
      "ما أهمية الصوم في الكنيسة الأرثوذكسية؟",
      "ما هو اللاهوت الأرثوذكسي للأيقونات؟"
    ]
  },
  en: {
    dir: "ltr",
    appTitle:       "ORTHODOX WISDOM",
    appSub:         "AI Theological Advisor · Rooted in Scripture & Holy Tradition",
    library:        "Library",
    welcomeHeading: "Ask in Faith, Receive in Truth",
    welcomeVerse:   '"Ask and it shall be given to you; seek and you shall find." — Matthew 7:7',
    placeholder:    "Ask any question about Orthodox Christian faith…",
    footer:         "Holy Scripture · Agpeya · Holy Fathers · Seven Councils · Synaxarion",
    error:          "Connection error. Please try again.",
    fallback:       "Glory to God. An answer could not be retrieved at this time.",
    tabChat:        "Chat",
    tabLibrary:     "Library",
    suggested: [
      "What is theosis in Orthodox Christianity?",
      "How does the Agpeya structure daily prayer?",
      "Explain the Nicene Creed",
      "What is the significance of Orthodox fasting?",
      "Explain the Orthodox theology of icons"
    ]
  }
};

// ── Helpers ─────────────────────────────────────────────────────────
function t(key) { return T[currentLang][key]; }

function scrollToBottom() {
  const ml = UI.messagesList;
  ml.scrollTop = ml.scrollHeight;
}

function autoResize(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 150) + "px";
}

function setLoading(state) {
  isLoading = state;
  UI.sendBtnRtl.disabled = state;
  UI.sendBtnLtr.disabled = state;
  UI.chatInput.disabled  = state;
}

// ── Render Functions ─────────────────────────────────────────────────

function renderLibrary() {
  const sections = LIBRARY_DATA[currentLang];
  UI.libSections.innerHTML = "";

  sections.forEach((sec) => {
    // Section header button
    const btn = document.createElement("button");
    btn.className = "lib-section-btn" + (expandedSection === sec.id ? " expanded" : "");
    btn.innerHTML = `
      <span class="lib-icon">${sec.icon}</span>
      <div class="lib-title-wrap">
        <span class="lib-title">${sec.title}</span>
        <span class="lib-subtitle">${sec.subtitle}</span>
      </div>
      <span class="lib-arrow">▶</span>
    `;
    btn.addEventListener("click", () => {
      expandedSection = (expandedSection === sec.id) ? null : sec.id;
      renderLibrary();
    });

    // Items list
    const itemsDiv = document.createElement("div");
    itemsDiv.className = "lib-items" + (expandedSection === sec.id ? " open" : "");

    sec.items.forEach((item) => {
      const itemBtn = document.createElement("button");
      itemBtn.className = "lib-item-btn";
      itemBtn.textContent = item;
      itemBtn.addEventListener("click", () => {
        sendMessage(sec.ask(item));
        setActiveView("chat");
      });
      itemsDiv.appendChild(itemBtn);
    });

    UI.libSections.appendChild(btn);
    UI.libSections.appendChild(itemsDiv);
  });
}

function renderSuggestions() {
  UI.suggestionsGrid.innerHTML = "";
  t("suggested").forEach((s) => {
    const btn = document.createElement("button");
    btn.className = "suggestion-btn";
    btn.textContent = s;
    btn.addEventListener("click", () => sendMessage(s));
    UI.suggestionsGrid.appendChild(btn);
  });
}

function renderMessage(role, content, animate = false) {
  // Hide welcome screen
  UI.welcomeScreen.style.display = "none";
  UI.messagesList.style.display  = "flex";

  const div = document.createElement("div");
  div.className = "message msg-" + role + (animate ? " fade-up" : "");

  const isRTL = currentLang === "ar";

  div.innerHTML = `
    <div class="msg-avatar avatar-${role}">${role === "user" ? "✝" : "☩"}</div>
    <div class="msg-bubble bubble-${role}">${escapeHtml(content)}</div>
  `;

  UI.messagesList.appendChild(div);
  scrollToBottom();
}

function renderLoading() {
  UI.welcomeScreen.style.display = "none";
  UI.messagesList.style.display  = "flex";

  const div = document.createElement("div");
  div.id = "loading-indicator";
  div.className = "message msg-assistant fade-up";
  div.innerHTML = `
    <div class="msg-avatar avatar-assistant">☩</div>
    <div class="msg-bubble bubble-assistant loading-bubble">
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
    </div>
  `;
  UI.messagesList.appendChild(div);
  scrollToBottom();
}

function removeLoading() {
  const el = $("loading-indicator");
  if (el) el.remove();
}

function renderError(msg) {
  const p = document.createElement("p");
  p.className = "error-msg";
  p.textContent = msg;
  UI.messagesList.appendChild(p);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

// ── Language Switch ──────────────────────────────────────────────────
function setLang(lang) {
  currentLang     = lang;
  messages        = [];
  expandedSection = null;

  const isRTL = lang === "ar";
  UI.html.setAttribute("dir", isRTL ? "rtl" : "ltr");
  UI.html.setAttribute("lang", lang);
  document.body.classList.toggle("ltr", !isRTL);

  // Update text
  UI.headerTitle.textContent       = t("appTitle");
  UI.headerSub.textContent         = t("appSub");
  UI.sidebarLabel.textContent      = t("library");
  UI.welcomeHeading.textContent    = t("welcomeHeading");
  UI.welcomeVerse.textContent      = t("welcomeVerse");
  UI.chatInput.placeholder         = t("placeholder");
  UI.footerNote.textContent        = t("footer");
  UI.tabChat.textContent           = t("tabChat");
  UI.tabLibrary.textContent        = t("tabLibrary");

  // Update header title font
  UI.headerTitle.style.fontFamily  = isRTL
    ? "'Amiri', Georgia, serif"
    : "'Cinzel', serif";

  // Send button direction
  UI.sendBtnRtl.style.display = isRTL  ? "flex" : "none";
  UI.sendBtnLtr.style.display = !isRTL ? "flex" : "none";

  // Input dir
  UI.chatInput.setAttribute("dir", isRTL ? "rtl" : "ltr");
  UI.chatInput.style.fontFamily = isRTL
    ? "'Amiri', serif"
    : "'Crimson Pro', serif";
  UI.chatInput.style.fontSize   = isRTL ? "17px" : "15px";

  // Lang buttons
  UI.langAr.classList.toggle("active", lang === "ar");
  UI.langEn.classList.toggle("active", lang === "en");

  // Reset UI
  UI.messagesList.innerHTML      = "";
  UI.messagesList.style.display  = "none";
  UI.welcomeScreen.style.display = "flex";

  renderLibrary();
  renderSuggestions();
}

// ── Active View (mobile) ─────────────────────────────────────────────
function setActiveView(view) {
  activeView = view;
  UI.tabChat.classList.toggle("active",    view === "chat");
  UI.tabLibrary.classList.toggle("active", view === "library");

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    UI.sidebar.classList.toggle("hidden",   view !== "library");
    UI.chatPanel.classList.toggle("hidden", view !== "chat");
  }
}

// ── Sidebar Toggle ───────────────────────────────────────────────────
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  UI.sidebar.classList.toggle("sidebar-closed", !sidebarOpen);
  UI.sidebarToggle.title = sidebarOpen ? "Close Library" : "Open Library";
}

// ── Send Message ─────────────────────────────────────────────────────
async function sendMessage(text) {
  const question = (text || UI.chatInput.value).trim();
  if (!question || isLoading) return;

  UI.chatInput.value = "";
  UI.chatInput.style.height = "auto";
  setActiveView("chat");

  const userMsg = { role: "user", content: question };
  messages.push(userMsg);
  renderMessage("user", question, true);

  setLoading(true);
  renderLoading();

  try {
    const apiKey = (typeof CONFIG !== "undefined") ? CONFIG.ANTHROPIC_API_KEY : "";

    if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
      throw new Error("API_KEY_MISSING");
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model:      CONFIG.MODEL,
        max_tokens: CONFIG.MAX_TOKENS,
        system:     SYSTEM_PROMPTS[currentLang],
        messages:   messages,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data  = await response.json();
    const reply = data.content?.map((b) => b.text || "").join("") || t("fallback");

    messages.push({ role: "assistant", content: reply });
    removeLoading();
    renderMessage("assistant", reply, true);

  } catch (err) {
    removeLoading();
    if (err.message === "API_KEY_MISSING") {
      renderError(
        currentLang === "ar"
          ? "⚠️ لم يتم إدخال مفتاح API. افتح ملف js/config.js وأضف مفتاحك."
          : "⚠️ API key missing. Open js/config.js and add your Anthropic API key."
      );
    } else {
      renderError(t("error") + " (" + err.message + ")");
    }
  }

  setLoading(false);
}

// ── Event Listeners ──────────────────────────────────────────────────
UI.sendBtnRtl.addEventListener("click", () => sendMessage());
UI.sendBtnLtr.addEventListener("click", () => sendMessage());

UI.chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

UI.chatInput.addEventListener("input", (e) => autoResize(e.target));

UI.langAr.addEventListener("click", () => setLang("ar"));
UI.langEn.addEventListener("click", () => setLang("en"));

UI.sidebarToggle.addEventListener("click", toggleSidebar);

UI.tabChat.addEventListener("click",    () => setActiveView("chat"));
UI.tabLibrary.addEventListener("click", () => setActiveView("library"));

// Focus styling on input wrapper
UI.chatInput.addEventListener("focus", () => {
  UI.inputWrapper.style.borderColor = "rgba(201,148,58,0.5)";
  UI.inputWrapper.style.boxShadow   = "0 0 16px rgba(201,148,58,0.06)";
});
UI.chatInput.addEventListener("blur", () => {
  UI.inputWrapper.style.borderColor = "rgba(201,148,58,0.2)";
  UI.inputWrapper.style.boxShadow   = "none";
});

// Responsive: reset views on resize
window.addEventListener("resize", () => {
  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    UI.sidebar.classList.remove("hidden");
    UI.chatPanel.classList.remove("hidden");
    if (sidebarOpen) UI.sidebar.classList.remove("sidebar-closed");
  } else {
    setActiveView(activeView);
  }
});

// ── Init ──────────────────────────────────────────────────────────────
setLang("ar");
