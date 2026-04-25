# ☩ الحكمة الأرثوذكسية — Orthodox Wisdom

**مستشار لاهوتي بالذكاء الاصطناعي · AI Theological Advisor**

> *"اسألوا تُعطَوا، اطلبوا تجدوا، اقرعوا يُفتح لكم." — متى ٧: ٧*
> *"Ask and it shall be given to you; seek and you shall find." — Matthew 7:7*

---

## نظرة عامة / Overview

**Orthodox Wisdom** is a bilingual (Arabic/English) AI-powered theological advisor rooted in Holy Scripture, Patristic tradition, and Orthodox Christian teaching. It leverages the Anthropic Claude API to answer questions about Orthodox faith with pastoral warmth and doctrinal accuracy.

---

## المميزات / Features

- 🌐 **Bilingual** — Full Arabic (RTL) and English (LTR) support with dedicated fonts and UI direction
- 📚 **Interactive Library** — Browse and query six curated categories:
  - 📜 Old Testament (39 books · Septuagint LXX)
  - ✝ New Testament (27 books · Koine Greek)
  - 🕐 The Agpeya — Coptic Book of Hours (7 canonical hours)
  - ☩ Holy Fathers (14 Church Fathers)
  - ⛪ Seven Ecumenical Councils
  - 🌟 Lives of Saints — Orthodox Synaxarion
- 💬 **Conversational Chat** with full multi-turn message history
- 📱 **Responsive Design** — Sidebar on desktop, tabbed view on mobile
- ✨ **Suggested Questions** to guide new users

---

## هيكل المشروع / Project Structure

```
orthodox-wisdom/
├── index.html        # Main HTML structure & layout
├── css/
│   └── style.css     # Styling (dark theme, RTL/LTR, fonts)
├── js/
│   ├── config.js     # API key & model configuration  ← Edit this
│   ├── data.js       # Library content & AI system prompts
│   └── app.js        # Application logic & UI interactions
```

---

## الإعداد / Setup

### 1. الحصول على مفتاح API / Get an API Key

Sign up at [console.anthropic.com](https://console.anthropic.com/) and create an API key.

### 2. إضافة المفتاح / Add Your Key

Open `js/config.js` and replace the placeholder:

```js
const CONFIG = {
  ANTHROPIC_API_KEY: "sk-ant-...",   // ← ضع مفتاحك هنا
  MODEL: "claude-sonnet-4-20250514",
  MAX_TOKENS: 1200,
};
```

### 3. تشغيل المشروع / Run the Project

Simply open `index.html` in a browser — no build step required.

> ⚠️ **Note:** Direct browser API calls require the `anthropic-dangerous-direct-browser-access` header. This is suitable for local/personal use. For production, route requests through a backend server to protect your API key.

---

## التقنيات المستخدمة / Tech Stack

| Technology | Purpose |
|---|---|
| Vanilla JavaScript (ES6+) | Application logic |
| HTML5 + CSS3 | UI & layout |
| Anthropic Claude API | AI theological responses |
| Google Fonts | Cinzel, Crimson Pro, Amiri, IM Fell English |

---

## نموذج الذكاء الاصطناعي / AI Model

The assistant uses **`claude-sonnet-4-20250514`** with a detailed system prompt grounded in:

- Holy Bible (Septuagint OT + Greek NT)
- Agpeya (Coptic Book of Hours)
- Writings of the Holy Fathers
- Seven Ecumenical Councils & their Canons
- Nicene-Constantinopolitan Creed
- Synaxarion & Lives of Saints
- Divine Liturgies of St. Basil & St. John Chrysostom

---

## الأمان / Security

- The API key is stored client-side in `config.js` — **do not commit this file to public repositories**
- Add `config.js` to your `.gitignore`:

```
js/config.js
```

---

## الترخيص / License

This project is intended for personal, educational, and pastoral use. All theological content is drawn from public domain Patristic sources and Holy Scripture.

---

*المجد لله · Glory to God*
