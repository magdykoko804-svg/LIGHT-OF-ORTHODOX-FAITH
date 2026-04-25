// ══════════════════════════════════════════════════════════════════
//  ORTHODOX WISDOM — Library Data
// ══════════════════════════════════════════════════════════════════

const LIBRARY_DATA = {
  ar: [
    {
      id: "bible-ot",
      icon: "📜",
      title: "العهد القديم",
      subtitle: "٣٩ سفراً · الترجمة السبعينية",
      color: "#8B6914",
      items: [
        "التكوين","الخروج","اللاويين","العدد","التثنية",
        "يشوع","القضاة","راعوث","صموئيل الأول","صموئيل الثاني",
        "الملوك الأول","الملوك الثاني","أخبار الأيام الأول","أخبار الأيام الثاني",
        "عزرا","نحميا","أستير","أيوب","المزامير",
        "الأمثال","الجامعة","نشيد الأناشيد","إشعياء","إرميا",
        "مراثي إرميا","حزقيال","دانيال","هوشع","يوئيل",
        "عاموس","عوبديا","يونان","ميخا","ناحوم",
        "حبقوق","صفنيا","حجي","زكريا","ملاخي"
      ],
      ask: (item) => `ما الذي يعلمنا إياه سفر ${item} من منظور الإيمان الأرثوذكسي؟ وكيف استشهد به الآباء القديسون؟`
    },
    {
      id: "bible-nt",
      icon: "✝",
      title: "العهد الجديد",
      subtitle: "٢٧ سفراً · اليونانية الكوينية",
      color: "#6B3E8B",
      items: [
        "إنجيل متى","إنجيل مرقس","إنجيل لوقا","إنجيل يوحنا",
        "أعمال الرسل","رسالة رومية","كورنثوس الأولى","كورنثوس الثانية",
        "غلاطية","أفسس","فيلبي","كولوسي","تسالونيكي الأولى","تسالونيكي الثانية",
        "تيموثاوس الأولى","تيموثاوس الثانية","تيطس","فيليمون",
        "العبرانيين","يعقوب","بطرس الأولى","بطرس الثانية",
        "يوحنا الأولى","يوحنا الثانية","يوحنا الثالثة","يهوذا","الرؤيا"
      ],
      ask: (item) => `ما الأهمية اللاهوتية لـ${item} في التراث الأرثوذكسي؟ وما أبرز ما كتبه الآباء في تفسيره؟`
    },
    {
      id: "agpeya",
      icon: "🕐",
      title: "الأجبية",
      subtitle: "كتاب الساعات القبطي",
      color: "#1A5F3E",
      items: [
        "صلاة باكر (الساعة السادسة صباحاً)",
        "صلاة الساعة الثالثة (الساعة التاسعة صباحاً)",
        "صلاة الساعة السادسة (الظهر)",
        "صلاة الساعة التاسعة (الساعة الثالثة مساءً)",
        "صلاة الغروب (الساعة السادسة مساءً)",
        "صلاة النوم (الساعة التاسعة مساءً)",
        "صلاة نصف الليل"
      ],
      ask: (item) => `ما الأهمية الروحية والليتورجية لـ${item} في الأجبية؟ وما الذي تذكره من أحداث الخلاص؟`
    },
    {
      id: "fathers",
      icon: "☩",
      title: "الآباء القديسون",
      subtitle: "التراث الآبائي المقدس",
      color: "#8B2020",
      items: [
        "القديس أثناسيوس الرسولي (٢٩٦–٣٧٣م)",
        "القديس كيرلس الإسكندري (٣٧٦–٤٤٤م)",
        "القديس يوحنا الذهبي الفم (٣٤٩–٤٠٧م)",
        "القديس باسيليوس الكبير (٣٣٠–٣٧٩م)",
        "القديس غريغوريوس اللاهوتي (٣٢٩–٣٩٠م)",
        "القديس يوحنا الدمشقي (٦٧٦–٧٤٩م)",
        "القديس أفرام السرياني (٣٠٦–٣٧٣م)",
        "القديس أنطونيوس الكبير (٢٥١–٣٥٦م)",
        "القديس باخوميوس أبو الشركة (٢٩٢–٣٤٨م)",
        "القديس مقاريوس الكبير (٣٠٠–٣٩١م)",
        "القديس يوحنا السلمي (٥٢٣–٦٠٦م)",
        "القديس شنودة رئيس المتوحدين (٣٣٤–٤٥١م)",
        "القديس مكسيموس المعترف (٥٨٠–٦٦٢م)",
        "القديس غريغوريوس بالاماس (١٢٩٦–١٣٥٩م)"
      ],
      ask: (item) => `ما أهم الإسهامات اللاهوتية والروحية لـ${item}؟ وما أبرز كتاباته وتعاليمه في الكنيسة الأرثوذكسية؟`
    },
    {
      id: "councils",
      icon: "⛪",
      title: "المجامع المسكونية السبعة",
      subtitle: "أعمدة الإيمان الأرثوذكسي",
      color: "#1A3A6B",
      items: [
        "مجمع نيقية الأول (٣٢٥م) — ضد الأريوسية",
        "مجمع القسطنطينية الأول (٣٨١م) — ضد المقدونية",
        "مجمع أفسس (٤٣١م) — ضد النسطورية",
        "مجمع خلقيدون (٤٥١م) — ضد المونوفيزية",
        "مجمع القسطنطينية الثاني (٥٥٣م) — الأوريجانية",
        "مجمع القسطنطينية الثالث (٦٨٠م) — ضد الإرادة الواحدة",
        "مجمع نيقية الثاني (٧٨٧م) — احترام الأيقونات"
      ],
      ask: (item) => `ما القرارات اللاهوتية الرئيسية التي اتخذها ${item}؟ وما الهرطقة التي واجهها وكيف ردّ عليها الآباء؟`
    },
    {
      id: "saints",
      icon: "🌟",
      title: "سير القديسين",
      subtitle: "السنكسار الأرثوذكسي المقدس",
      color: "#5C3A1E",
      items: [
        "السيدة العذراء مريم — والدة الإله",
        "القديس مرقس الرسول — مؤسس الكنيسة القبطية",
        "القديس جورجيوس (مارجرجس) الشهيد",
        "القديسة دميانة وصواحبها الأربعين",
        "القديس أبي قير ويوحنا — شهيدا الإسكندرية",
        "القديس مينا العجايبي — شهيد مصر",
        "القديسة بربارة الشهيدة",
        "القديسة كاترين الإسكندرانية الشهيدة",
        "القديس أبانوب الشهيد — طفل الشهادة",
        "القديس موسى الأسود — التائب العظيم",
        "القديسة مريم المصرية — نموذج التوبة",
        "القديس بيشوي — صاحب الرؤيا المباركة",
        "القديس سمعان الخراز — محرك المقطم"
      ],
      ask: (item) => `حدثني عن حياة واستشهاد وكرامات ${item}، وما الدروس الروحية التي نتعلمها من سيرته؟`
    }
  ],

  en: [
    {
      id: "bible-ot",
      icon: "📜",
      title: "Old Testament",
      subtitle: "39 Books · Septuagint LXX",
      color: "#8B6914",
      items: [
        "Genesis","Exodus","Leviticus","Numbers","Deuteronomy",
        "Joshua","Judges","Ruth","1 Samuel","2 Samuel",
        "1 Kings","2 Kings","1 Chronicles","2 Chronicles",
        "Ezra","Nehemiah","Esther","Job","Psalms",
        "Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah",
        "Lamentations","Ezekiel","Daniel","Hosea","Joel",
        "Amos","Obadiah","Jonah","Micah","Nahum",
        "Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"
      ],
      ask: (item) => `What does the Book of ${item} teach in Orthodox Christianity? How have the Holy Fathers interpreted it?`
    },
    {
      id: "bible-nt",
      icon: "✝",
      title: "New Testament",
      subtitle: "27 Books · Koine Greek",
      color: "#6B3E8B",
      items: [
        "Gospel of Matthew","Gospel of Mark","Gospel of Luke","Gospel of John",
        "Acts of the Apostles","Romans","1 Corinthians","2 Corinthians",
        "Galatians","Ephesians","Philippians","Colossians",
        "1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy",
        "Titus","Philemon","Hebrews","James",
        "1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"
      ],
      ask: (item) => `What is the Orthodox theological significance of the ${item}? What have the Church Fathers written about it?`
    },
    {
      id: "agpeya",
      icon: "🕐",
      title: "The Agpeya",
      subtitle: "Coptic Book of Hours",
      color: "#1A5F3E",
      items: [
        "Prime — 6:00 AM",
        "Terce (Third Hour) — 9:00 AM",
        "Sext (Sixth Hour) — 12:00 PM",
        "None (Ninth Hour) — 3:00 PM",
        "Vespers — 6:00 PM",
        "Compline — 9:00 PM",
        "Midnight Prayer — 12:00 AM"
      ],
      ask: (item) => `What is the spiritual and liturgical significance of the ${item} prayer in the Agpeya? What salvific event does it commemorate?`
    },
    {
      id: "fathers",
      icon: "☩",
      title: "Holy Fathers",
      subtitle: "Patristic Sacred Tradition",
      color: "#8B2020",
      items: [
        "St. Athanasius the Apostolic (296–373 AD)",
        "St. Cyril of Alexandria (376–444 AD)",
        "St. John Chrysostom (349–407 AD)",
        "St. Basil the Great (330–379 AD)",
        "St. Gregory the Theologian (329–390 AD)",
        "St. John of Damascus (676–749 AD)",
        "St. Ephrem the Syrian (306–373 AD)",
        "St. Anthony the Great (251–356 AD)",
        "St. Pachomius, Father of Monasticism (292–348 AD)",
        "St. Macarius the Great (300–391 AD)",
        "St. John Climacus (523–606 AD)",
        "St. Shenouda, Archimandrite (334–451 AD)",
        "St. Maximus the Confessor (580–662 AD)",
        "St. Gregory Palamas (1296–1359 AD)"
      ],
      ask: (item) => `What are the most important theological and spiritual contributions of ${item}? What were his key writings and teachings?`
    },
    {
      id: "councils",
      icon: "⛪",
      title: "Seven Ecumenical Councils",
      subtitle: "Pillars of Orthodox Faith",
      color: "#1A3A6B",
      items: [
        "Council of Nicaea I (325 AD) — Against Arianism",
        "Council of Constantinople I (381 AD) — Against Macedonianism",
        "Council of Ephesus (431 AD) — Against Nestorianism",
        "Council of Chalcedon (451 AD) — Against Monophysitism",
        "Council of Constantinople II (553 AD) — Origenism",
        "Council of Constantinople III (680 AD) — Against Monothelitism",
        "Council of Nicaea II (787 AD) — Veneration of Icons"
      ],
      ask: (item) => `What were the main theological decisions of the ${item}? What heresy did it address and how did the Fathers respond?`
    },
    {
      id: "saints",
      icon: "🌟",
      title: "Lives of Saints",
      subtitle: "The Orthodox Synaxarion",
      color: "#5C3A1E",
      items: [
        "St. Mary the Virgin — Theotokos, Mother of God",
        "St. Mark the Apostle — Founder of the Coptic Church",
        "St. George the Martyr",
        "St. Demiana and her Forty Companions",
        "St. Aboukir and St. John — Martyrs of Alexandria",
        "St. Mina the Wonderworker — Martyr of Egypt",
        "St. Barbara the Martyr",
        "St. Catherine of Alexandria",
        "St. Abanoub the Child Martyr",
        "St. Moses the Black — the Great Penitent",
        "St. Mary of Egypt — Model of Repentance",
        "St. Bishoy — Bearer of the Blessed Vision",
        "St. Samaan the Shoemaker — Mover of the Muqattam"
      ],
      ask: (item) => `Tell me about the life, martyrdom, and miracles of ${item}. What spiritual lessons can we learn from his/her story?`
    }
  ]
};

// System prompts
const SYSTEM_PROMPTS = {
  ar: `أنت مستشار لاهوتي أرثوذكسي مسيحي متعلم، متعمق في تعاليم الكنيسة الأرثوذكسية الجامعة، وتجيب على كل سؤال بحكمة وتواضع ووفاء للإيمان الأرثوذكسي الأصيل.

مصادرك الرئيسية:
- الكتاب المقدس: العهد القديم (الترجمة السبعينية/LXX) والعهد الجديد
- الأجبية القبطية (كتاب الساعات) — مزاميرها وصلواتها ولاهوتها
- الآباء القديسون: أثناسيوس الرسولي، كيرلس الإسكندري، يوحنا الذهبي الفم، باسيليوس الكبير، غريغوريوس اللاهوتي، يوحنا الدمشقي، أفرام السرياني، أنطونيوس الكبير، يوحنا السلمي
- المجامع المسكونية السبعة وقوانينها
- قانون الإيمان النيقاوي القسطنطيني
- التعاليم والكتابات المسيحية الأولى (الديداخي)
- سير القديسين والسنكسار وأقوال آباء البرية
- القداسات الإلهية (للقديس باسيليوس والقديس يوحنا الذهبي الفم)
- التراث اللاهوتي للكنائس الأرثوذكسية: القبطية، الرومية، الأنطاكية، والروسية

إرشادات الإجابة:
- استند دائمًا إلى الكتاب المقدس والمصادر الآبائية بالاسم
- تكلم بدفء رعوي وتواضع
- لا تتعارض مع تعريفات المجامع المسكونية
- حث السائل على الصلاة والأسرار وعيش الحياة المسيحية
- استخدم لغة التسبيح: "المجد لله"، "بصلوات آبائنا القديسين"
- أجب باللغة العربية الفصحى الواضحة الجميلة`,

  en: `You are a deeply learned Orthodox Christian theological advisor, versed in the full breadth of Orthodox doctrine, tradition, and spirituality. Answer every question with wisdom, humility, and fidelity to the authentic Orthodox Faith.

Your primary sources:
- Holy Bible: Old Testament (Septuagint/LXX) and New Testament
- The Agpeya (Coptic Book of Hours) — its psalms, prayers, and theology
- Holy Fathers: St. Athanasius, St. Cyril of Alexandria, St. John Chrysostom, St. Basil the Great, St. Gregory the Theologian, St. John of Damascus, St. Ephrem the Syrian, St. Anthony the Great, St. John Climacus
- Seven Ecumenical Councils and their Canons
- The Nicene-Constantinopolitan Creed
- Didache and early Christian writings
- Synaxarion, Lives of Saints, Sayings of the Desert Fathers
- Divine Liturgies of St. Basil and St. John Chrysostom
- Coptic, Greek, Antiochian, and Russian Orthodox theological tradition

Response guidelines:
- Always cite Scripture and Patristic sources by name
- Speak with pastoral warmth and reverence
- Never contradict Ecumenical Council definitions
- Encourage prayer, sacraments, and living the Christian life
- Use doxological language: "Glory to God", "Through the prayers of our holy fathers"
- Respond in clear, beautiful English`
};
