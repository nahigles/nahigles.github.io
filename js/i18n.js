/* =========================================================
   SELECTOR DE IDIOMA (castellano · euskera · inglés)

   Cómo funciona:
   - El texto en castellano está escrito directamente en el HTML.
   - Cada texto traducible lleva un atributo data-i18n="clave".
   - Aquí solo hay que escribir las traducciones en euskera e inglés.
   - Para atributos (alt, aria-label, placeholder...):
       data-i18n-attr="alt:clave"
   - El idioma elegido se recuerda en el navegador.
   ========================================================= */

const I18N = {
  /* Textos que solo usa el JavaScript (el resto del castellano se lee del HTML) */
  es: {
    'js.copied': '¡Copiado!',
    'js.subject': 'Contacto desde tu portfolio',
    'js.from': 'De',
    'js.company': 'Empresa',
    'title.home': 'Nahia Iglesias Calvo | Desarrolladora de videojuegos',
    'title.about': 'Sobre mí | Nahia Iglesias Calvo',
    'title.contact': 'Contacto | Nahia Iglesias Calvo'
  },

  /* ---------------- EUSKARA ---------------- */
  eu: {
    'skip': 'Edukira joan',
    'nav.menu': 'Menua ireki',
    'nav.games': 'Jokoak',
    'nav.about': 'Niri buruz',
    'nav.contact': 'Kontaktua',
    'btn.cv': 'CV',
    'btn.downloadCv': 'CVa deskargatu',
    'btn.repo': 'Biltegia',
    'btn.web': 'Webgunea',
    'btn.video': 'Bideoa ikusi',
    'btn.play': 'Jolastu',
    'btn.youtube': 'YouTuben ikusi',

    'hero.eyebrow': 'Player 1 · Jolasteko prest',
    'hero.role': 'Bideojoko garatzailea',
    'hero.desc': 'Kaixo! Nire izena Nahia da eta oso gustuko dut joko serioak eta jendeak goza ditzakeen bideojokoak sortzea :). Nire unibertsitate-karrerari esker, esperientzia daukat bideojokoak garatzeko hainbat teknologia eta programazio-lengoaiatan.',
    'card.class': 'Game Developer',
    'card.games': 'Jokoak',
    'card.engines': 'Motorrak',
    'card.langs': 'Lengoaiak',

    'featured.kicker': '★ Proiektu nagusia',
    'featured.heading': 'Nazioarteko kolaborazioa',
    'featured.badge': '★ GrAL · Joko serioa',
    'featured.alt': 'Misión Colombia jokoaren pantaila-argazkia',
    'featured.play': 'Trailerra ikusi',
    'featured.desc': 'TDAH duten haur eta nerabeen plangintza-gaitasuna lantzeko joko serioa. Jokalariak garraiolari baten ibilbideak planifikatzen ditu, Kolonbian oinarritutako mundu batean. Jokoa diseinatu eta garatu nuen, eta TDAH duten 50 haurrekin egindako proben emaitzak aztertu nituen.',
    'featured.stat': 'TDAH duten haurrek parte hartu zuten ikerketan',
    'featured.tfg': 'GrAL ikerketa irakurri',

    'tag.research': 'Ikerketa',
    'tag.serious': 'Joko serioa',
    'tag.platformer': 'Plataformak',
    'tag.vr': 'Errealitate birtuala',
    'tag.sim': 'Simulazioa',
    'tag.web': 'Web jokoa',
    'tag.action': 'Akzioa',

    'games.heading': 'Bideojoko gehiago',
    'games.sub': 'Bakarka eta taldean garatutako tituluak.',
    'game.ott': '2D plataforma-jokoa, esplorazioan eta abenturan oinarritua, puzzleekin eta elementuetan oinarritutako mekanikekin.',
    'game.menstruan': 'Hilekoari buruzko joko serioa, Deslenguando elkarte sexologikoarentzat diseinatu eta garatua.',
    'game.vision': 'Errealitate birtualeko esperientzia murgiltzailea, haur daltoniko batek mundua nola ikusten duen bizitzeko aukera ematen duena.',
    'game.work': 'Bulegari baten lanari buruzko 2D erabaki-jokoa, esplorazioan eta pertsonaiekiko elkarreraginean oinarritua. Erabaki bakoitzak istorioa aldatzen du.',
    'game.dino': 'Top-down akzio-jokoa: erabili dinosauro-arima desberdinak erasotzeko eta jakin zure herrixkari zer gertatu zitzaion.',

    'cta.kicker': 'Press start',
    'cta.title': 'Jarri nirekin harremanetan',
    'cta.text': 'Bideojoko-estudio batean nire lehen lanpostuaren bila nabil, indie zein AAA. Lanaldi osoko lanpostuetarako, praktiketarako eta lankidetzetarako prest nago.',
    'cta.contact': 'Harremanetan jarri',
    'cta.about': 'Nire CVa online',
    'footer.made': 'Eskuz egina, tranparik gabe',

    'about.kicker': 'Pertsonaiaren fitxa',
    'about.title': 'Niri buruz',
    'about.intro': 'Prestakuntza, esperientzia eta gaitasunak: nire CVa web bertsioan.',
    'about.contact': 'Kontaktua',
    'about.languages': 'Hizkuntzak',
    'about.soft': 'Gaitasunak',
    'about.profile': 'Profila',
    'about.p1': 'Bideojoko garatzailea naiz, eta bereziki interesatzen zait ingurune interaktiboak hezkuntza- eta laguntza-tresna gisa erabiltzea.',
    'about.p2': 'Hainbat motor eta programazio-lengoaiarekin dut esperientzia. Gainera, diseinu, modelatze, animazio eta soinu arloko gaitasunei esker, diziplina anitzeko proiektuetan, plataforma anitzeko esperientzietan eta ingurune bisualetan parte hartu ahal izan dut.',
    'about.education': 'Prestakuntza',
    'about.experience': 'Esperientzia',
    'about.tech': 'Arsenal teknikoa',
    'about.tools': 'Tresnak',
    'about.platforms': 'Plataformak',

    'lang.es': 'Gaztelania',
    'lang.eu': 'Euskara',
    'lang.en': 'Ingelesa',
    'lvl.native': 'Ama-hizkuntza',
    'lvl.adv': 'Aurreratua',
    'lvl.mid': 'Ertaina',
    'lvl.basic': 'Oinarrizkoa',
    'yrs.6': '6 urte',
    'yrs.5': '5 urte',
    'yrs.3': '3 urte',
    'yrs.2': '2 urte',

    'soft.team': 'Talde-lana',
    'soft.lead': 'Talde-lidergoa',
    'soft.proactive': 'Proaktibotasuna',
    'soft.problem': 'Arazoen ebazpena',
    'soft.adapt': 'Egokitzeko gaitasuna',
    'soft.learn': 'Etengabeko ikaskuntza',
    'soft.org': 'Antolaketa',

    'edu.degree': 'Bideojokoen Garapeneko Gradua',
    'edu.uni': 'Madrilgo Unibertsitate Konplutentsea · Informatika Fakultatea',
    'edu.tfg': 'Gradu Amaierako Lana: Misión Colombia',
    'edu.tfgPlace': 'TDAH duten haur eta nerabeen plangintza lantzeko joko serioa',
    'edu.tfg1': 'Bideojokoaren diseinu eta garapen osoa Unityn (C#).',
    'edu.tfg2': 'TDAH duten 50 haurrekin egindako probak eta emaitzen analisia.',

    'exp.teamDate': 'Graduko proiektuak',
    'exp.teamTitle': 'Talde-garapena',
    'exp.team1': 'Jokoen garapena Unityn, SDL/C++-n eta Phaserren, Git eta SVN bertsio-kontrolarekin.',
    'exp.team2': 'Menstruan-3 jokoaren diseinua eta garapena Deslenguando elkarte sexologikoarentzat.',

    'skills.engines': 'Motorrak',
    'skills.code': 'Kodea',

    'contact.kicker': 'Player 2, batzen zara?',
    'contact.title': 'Kontaktua',
    'contact.intro': 'Lanpostu bat, proiektu bat duzu edo nire lanari buruz gehiago jakin nahi duzu? Idatzi iezadazu eta lehenbailehen erantzungo dizut.',
    'contact.available': 'Lan egiteko prest',
    'contact.mailLabel': 'Posta elektronikoa',
    'contact.copy': 'Helbidea kopiatu',
    'contact.linkedin': 'Nire profil profesionala',
    'contact.cvPdf': 'PDF bertsioa',
    'contact.github': 'Nire proiektuen kodea',
    'contact.itch': 'Jolastu nire jokoetara',

    'form.title': 'Bidali mezu bat',
    'form.sub': 'Bete formularioa eta zure posta irekiko da, mezua bidaltzeko prest.',
    'form.name': 'Izena',
    'form.company': 'Enpresa / estudioa',
    'form.email': 'Zure posta',
    'form.message': 'Mezua',
    'form.send': 'Mezua bidali',

    'js.copied': 'Kopiatuta!',
    'js.subject': 'Zure portfoliotik kontaktua',
    'js.from': 'Nork',
    'js.company': 'Enpresa',
    'title.home': 'Nahia Iglesias Calvo | Bideojoko garatzailea',
    'title.about': 'Niri buruz | Nahia Iglesias Calvo',
    'title.contact': 'Kontaktua | Nahia Iglesias Calvo'
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    'skip': 'Skip to content',
    'nav.menu': 'Open menu',
    'nav.games': 'Games',
    'nav.about': 'About me',
    'nav.contact': 'Contact',
    'btn.cv': 'CV',
    'btn.downloadCv': 'Download CV',
    'btn.repo': 'Repository',
    'btn.web': 'Website',
    'btn.video': 'Watch video',
    'btn.play': 'Play',
    'btn.youtube': 'Watch on YouTube',

    'hero.eyebrow': 'Player 1 · Ready to play',
    'hero.role': 'Video game developer',
    'hero.desc': 'Hi! My name is Nahia, and I love creating serious games and video games that people can enjoy :). Thanks to my university studies, I have experience with various technologies and programming languages ​​used in video game development.',
    'card.class': 'Game Developer',
    'card.games': 'Games',
    'card.engines': 'Engines',
    'card.langs': 'Languages',

    'featured.kicker': '★ Main project',
    'featured.heading': 'International collaboration',
    'featured.badge': '★ Thesis · Serious game',
    'featured.alt': 'Screenshot of Misión Colombia',
    'featured.play': 'Watch trailer',
    'featured.desc': 'A serious game that trains planning skills in children and teenagers with ADHD. Players plan a delivery driver\'s routes through a world inspired by Colombia. I designed and developed the game, and analysed the results of tests with 50 children with ADHD.',
    'featured.stat': 'children with ADHD took part in the study',
    'featured.tfg': 'Read the thesis',

    'tag.research': 'Research',
    'tag.serious': 'Serious game',
    'tag.platformer': 'Platformer',
    'tag.vr': 'Virtual reality',
    'tag.sim': 'Simulation',
    'tag.web': 'Web game',
    'tag.action': 'Action',

    'games.heading': 'More video games',
    'games.sub': 'Titles developed solo and in teams.',
    'game.ott': 'A 2D platformer focused on exploration and adventure, with puzzles and element-based mechanics.',
    'game.menstruan': 'A serious game about menstruation, designed and developed for the sexology association Deslenguando.',
    'game.vision': 'An immersive virtual reality experience that lets you see the world the way a colour-blind child does.',
    'game.work': 'A 2D decision-making game about an office worker, focused on exploration and talking to characters. Every choice changes the story.',
    'game.dino': 'Top-down action game: use different dinosaur souls to attack and find out what happened to your village.',

    'cta.kicker': 'Press start',
    'cta.title': 'Contact me',
    'cta.text': 'I\'m looking for my first role at a game studio, indie or AAA. Open to full-time positions, internships and collaborations.',
    'cta.contact': 'Get in touch',
    'cta.about': 'See my CV online',
    'footer.made': 'Handmade, no cheats',

    'about.kicker': 'Character sheet',
    'about.title': 'About me',
    'about.intro': 'Education, experience and skills: my CV, web edition.',
    'about.contact': 'Contact',
    'about.languages': 'Languages',
    'about.soft': 'Soft skills',
    'about.profile': 'Profile',
    'about.p1': 'I\'m a video game developer with a particular interest in using interactive environments as a tool for education and support.',
    'about.p2': 'I have experience with several engines and programming languages. My skills in design, modelling, animation and sound have also let me collaborate on multidisciplinary projects, cross-platform experiences and visual environments.',
    'about.education': 'Education',
    'about.experience': 'Experience',
    'about.tech': 'Tech arsenal',
    'about.tools': 'Tools',
    'about.platforms': 'Platforms',

    'lang.es': 'Spanish',
    'lang.eu': 'Basque',
    'lang.en': 'English',
    'lvl.native': 'Native',
    'lvl.adv': 'Advanced',
    'lvl.mid': 'Intermediate',
    'lvl.basic': 'Basic',
    'yrs.6': '6 years',
    'yrs.5': '5 years',
    'yrs.3': '3 years',
    'yrs.2': '2 years',

    'soft.team': 'Teamwork',
    'soft.lead': 'Team leadership',
    'soft.proactive': 'Proactive',
    'soft.problem': 'Problem solving',
    'soft.adapt': 'Adaptability',
    'soft.learn': 'Continuous learning',
    'soft.org': 'Organisation',

    'edu.degree': 'BSc in Video Game Development',
    'edu.uni': 'Complutense University of Madrid · Faculty of Computer Science',
    'edu.tfg': 'Final thesis: Misión Colombia',
    'edu.tfgPlace': 'A serious game for training planning skills in children and teenagers with ADHD',
    'edu.tfg1': 'Full design and development of the game in Unity (C#).',
    'edu.tfg2': 'Testing with 50 children with ADHD and analysis of the results.',

    'exp.teamDate': 'Degree projects',
    'exp.teamTitle': 'Team development',
    'exp.team1': 'Built games in Unity, SDL/C++ and Phaser, using Git and SVN for version control.',
    'exp.team2': 'Designed and developed Menstruan-3 for the sexology association Deslenguando.',

    'skills.engines': 'Engines',
    'skills.code': 'Code',

    'contact.kicker': 'Player 2, joining in?',
    'contact.title': 'Contact',
    'contact.intro': 'Got an opening, a project, or want to know more about my work? Drop me a line and I\'ll get back to you as soon as I can.',
    'contact.available': 'Available for work',
    'contact.mailLabel': 'Email',
    'contact.copy': 'Copy email',
    'contact.linkedin': 'My professional profile',
    'contact.cvPdf': 'PDF version',
    'contact.github': 'Source code of my projects',
    'contact.itch': 'Play my games',

    'form.title': 'Send me a message',
    'form.sub': 'Fill in the form and your email app will open with the message ready to send.',
    'form.name': 'Name',
    'form.company': 'Company / studio',
    'form.email': 'Your email',
    'form.message': 'Message',
    'form.send': 'Send message',

    'js.copied': 'Copied!',
    'js.subject': 'Contact from your portfolio',
    'js.from': 'From',
    'js.company': 'Company',
    'title.home': 'Nahia Iglesias Calvo | Video game developer',
    'title.about': 'About me | Nahia Iglesias Calvo',
    'title.contact': 'Contact | Nahia Iglesias Calvo'
  }
};

const LANGS = ['es', 'eu', 'en'];
const STORAGE_KEY = 'nahia-lang';

/* Guarda el castellano original del HTML para poder volver a él */
function captureSpanish() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!(key in I18N.es)) I18N.es[key] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (!(key in I18N.es)) I18N.es[key] = el.getAttribute(attr) || '';
    });
  });
}

function t(key, lang = currentLang()) {
  return (I18N[lang] && I18N[lang][key]) ?? I18N.es[key] ?? '';
}

function currentLang() {
  return document.documentElement.lang || 'es';
}

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = 'es';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t(el.dataset.i18n, lang);
    if (value) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      const value = t(key, lang);
      if (value) el.setAttribute(attr, value);
    });
  });

  document.documentElement.lang = lang;
  const page = document.body.dataset.page;
  if (page) document.title = t('title.' + page, lang);

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* sin almacenamiento */ }
}

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGS.includes(saved)) return saved;
  } catch (e) { /* sin almacenamiento */ }
  // Si no hay preferencia guardada, usa el idioma del navegador
  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : 'es';
}

document.addEventListener('DOMContentLoaded', () => {
  captureSpanish();
  setLang(initialLang());
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
