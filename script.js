const translations = {
    en: {
        title: "Viktor Kurylenko",
        subtitle: "Christian Author, Radio Host, and Pastor",
        learnMore: "Learn More",
        aboutTitle: "About Viktor",
        earlyLifeTitle: "Early Life",
        earlyLifeText: "Born on August 28, 1952, Viktor Kurilenko grew up in a large Christian family, absorbing biblical truths from an early age. Despite facing challenges, including the loss of his eyesight at a young age, Viktor's faith remained strong.",
        ministryTitle: "Ministry",
        ministryText: "Viktor became a member of the Pentecostal Church at 18 and began preaching. He later became a youth leader and studied at the pastoral department of correspondence Bible courses in Moscow.",
        workMinistryTitle: "Work and Ministry",
        radioMinistryTitle: "Radio Ministry",
        radioMinistryText: "Viktor hosts the 'Life' radio program, which is broadcast to CIS countries from Saipan Island.",
        authorTitle: "Author",
        authorText: "He has written several books, including 'Our New Life' and is working on publishing a collection of his sermons.",
        pastoralCareTitle: "Pastoral Care",
        pastoralCareText: "In his church in Slavyansk, Viktor leads Bible studies, preaches, provides pastoral care, and heads a ministry for deliverance from demonic influence.",
        contactTitle: "Get in Touch",
        contactText: "Want to learn more about Viktor's ministry or invite him to speak?",
        contactBtn: "Contact Us"
    },
    ru: {
        title: "Виктор Куриленко",
        subtitle: "Христианский автор, радиоведущий и пастор",
        learnMore: "Узнать больше",
        aboutTitle: "О Викторе",
        earlyLifeTitle: "Ранние годы",
        earlyLifeText: "Родился 28 августа 1952 года в большой христианской семье, с ранних лет впитывал библейские истины. Несмотря на трудности, в том числе потерю зрения в молодом возрасте, вера Виктора оставалась сильной.",
        ministryTitle: "Служение",
        ministryText: "Виктор стал членом Пятидесятнической церкви в 18 лет и начал проповедовать. Позже он стал молодежным лидером и обучался на пасторском факультете заочного отделения библейских курсов в Москве.",
        workMinistryTitle: "Работа и служение",
        radioMinistryTitle: "Радиослужение",
        radioMinistryText: "Виктор ведет радиопрограмму 'Жизнь', которая транслируется в страны СНГ с острова Сайпан.",
        authorTitle: "Автор",
        authorText: "Он написал несколько книг, включая 'Наша новая жизнь', и работает над публикацией сборника своих проповедей.",
        pastoralCareTitle: "Пасторская забота",
        pastoralCareText: "В своей церкви в Славянске Виктор проводит библейские исследования, проповедует, оказывает пасторскую заботу и возглавляет служение освобождения от демонического влияния.",
        contactTitle: "Связаться",
        contactText: "Хотите узнать больше о служении Виктора или пригласить его выступить?",
        contactBtn: "Связаться с нами"
    },
    ua: {
        title: "Віктор Куриленко",
        subtitle: "Християнський автор, радіоведучий та пастор",
        learnMore: "Дізнатися більше",
        aboutTitle: "Про Віктора",
        earlyLifeTitle: "Ранні роки",
        earlyLifeText: "Народився 28 серпня 1952 року у великій християнській родині, з ранніх років вбирав біблійні істини. Незважаючи на труднощі, в тому числі втрату зору в молодому віці, віра Віктора залишалася сильною.",
        ministryTitle: "Служіння",
        ministryText: "Віктор став членом П'ятидесятницької церкви у 18 років і почав проповідувати. Пізніше він став молодіжним лідером і навчався на пасторському факультеті заочного відділення біблійних курсів у Москві.",
        workMinistryTitle: "Робота та служіння",
        radioMinistryTitle: "Радіослужіння",
        radioMinistryText: "Віктор веде радіопрограму 'Життя', яка транслюється в країни СНД з острова Сайпан.",
        authorTitle: "Автор",
        authorText: "Він написав кілька книг, включаючи 'Наше нове життя', і працює над публікацією збірки своїх проповідей.",
        pastoralCareTitle: "Пасторська опіка",
        pastoralCareText: "У своїй церкві в Слов'янську Віктор проводить біблійні дослідження, проповідує, надає пасторську опіку та очолює служіння звільнення від демонічного впливу.",
        contactTitle: "Зв'язатися",
        contactText: "Бажаєте дізнатися більше про служіння Віктора або запросити його виступити?",
        contactBtn: "Зв'язатися з нами"
    }
};

function setLanguage(language) {
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('subtitle').textContent = translations[language].subtitle;
    document.getElementById('learn-more-btn').textContent = translations[language].learnMore;
    document.getElementById('about-title').textContent = translations[language].aboutTitle;
    document.getElementById('early-life-title').textContent = translations[language].earlyLifeTitle;
    document.getElementById('early-life-text').textContent = translations[language].earlyLifeText;
    document.getElementById('ministry-title').textContent = translations[language].ministryTitle;
    document.getElementById('ministry-text').textContent = translations[language].ministryText;
    document.getElementById('work-ministry-title').textContent = translations[language].workMinistryTitle;
    document.getElementById('radio-ministry-title').textContent = translations[language].radioMinistryTitle;
    document.getElementById('radio-ministry-text').textContent = translations[language].radioMinistryText;
    document.getElementById('author-title').textContent = translations[language].authorTitle;
    document.getElementById('author-text').textContent = translations[language].authorText;
    document.getElementById('pastoral-care-title').textContent = translations[language].pastoralCareTitle;
    document.getElementById('pastoral-care-text').textContent = translations[language].pastoralCareText;
    document.getElementById('contact-title').textContent = translations[language].contactTitle;
    document.getElementById('contact-text').textContent = translations[language].contactText;
    document.getElementById('contact-btn').textContent = translations[language].contactBtn;
}
