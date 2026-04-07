// ===== TRADUCTIONS =====
const translations = {
  es: {
    nav_accueil: "Inicio",
    nav_bureau: "Nuestro Equipo",
    nav_activites: "Servicios",
    nav_contact: "Contacto",
    hero_eyebrow: "Gestoría Jurídica Internacional",
    hero_title1: "Haz de Alicante",
    hero_title2: "tu nuevo destino",
    hero_accroche: "Donde sea que vengas, hablamos tu idioma.",
    hero_description: "Acompañamos a personas y empresas internacionales en todos sus trámites de inmigración, residencia y establecimiento en España. Un equipo multicultural, multilingüe, a su servicio en Alicante.",
    hero_cta1: "✦ Consulta Gratuita",
    hero_cta2: "◎ WhatsApp",
    stat_langues: "Idiomas",
    stat_gestionnaires: "Gestores",
    stat_disponible: "Asistente IA",
    hero_scroll: "Descubrir",
    bureau_eyebrow: "Nuestro Equipo",
    bureau_title: "Expertos para cada región del mundo",
    bureau_subtitle: "Cada gestor está especializado en su región y habla el idioma de sus clientes.",
    javier_region: "América Latina · Norteamérica",
    javier_role: "Gestión de inmigración para clientes hispanohablantes y angloparlantes de América Latina y fuera de Quebec.",
    wahil_region: "África · Magreb · Oriente Medio",
    wahil_role: "Acompañamiento de clientes africanos y magrebíes en sus trámites de inmigración y residencia en España.",
    stefania_region: "Ucrania · Rusia · Europa del Este",
    stefania_role: "Специализируется на иммиграционных процедурах для украинских и русскоязычных клиентов в Испании.",
    celine_region: "Francia · Quebec · Bélgica · Suiza",
    celine_role: "Spécialisée dans l'accompagnement des clients francophones de France, du Québec et de la Belgique.",
    activites_eyebrow: "Nuestros Servicios",
    activites_title: "Nuestras áreas de experiencia",
    activites_subtitle: "Contacte con nosotros para más información sobre cada servicio.",
    act1_title: "Regularización 2026",
    act1_desc: "Proceso extraordinario de regularización para personas sin papeles en España. Solicitudes hasta el 30 de junio de 2026.",
    act2_title: "NIE / TIE",
    act2_desc: "Obtención y renovación del Número de Identidad de Extranjero y la Tarjeta de Identidad de Extranjero.",
    act3_title: "Visado Estudiante",
    act3_desc: "Nuevo reglamento en vigor desde mayo 2025. Autorización por duración total de estudios con permiso de trabajo incluido.",
    act4_title: "Reagrupación Familiar",
    act4_desc: "Reagrupación familiar para residentes en España. Tramitación para cónyuge, hijos y familiares dependientes.",
    act5_title: "Arraigo",
    act5_desc: "Arraigo social, laboral, familiar y de segunda oportunidad. Periodos reducidos a 2 años con el nuevo reglamento.",
    act6_title: "Renovación de Residencia",
    act6_desc: "Renovación de autorizaciones de residencia y trabajo. Seguimiento y gestión completa del expediente.",
    act7_title: "Inmigración Comercial",
    act7_desc: "Establecimiento de empresas, inversiones y permisos de residencia para emprendedores e inversores internacionales.",
    act8_title: "Visado Emprendedor",
    act8_desc: "Visado para emprendedores y startups. Acceso al ecosistema tecnológico y empresarial español desde Alicante.",
    act9_title: "Asistente IA 24/7",
    act9_desc: "Nuestro asistente IA responde sus preguntas en 7 idiomas, 24h/24. Disponible en WhatsApp y en este sitio.",
    act_contact: "Contactar para más información",
    act9_contact: "Disponible ahora en WhatsApp",
    contact_eyebrow: "Contacto",
    contact_title: "Tomemos cita",
    contact_subtitle: "Nuestro equipo le responde en su idioma lo antes posible.",
    contact_info_title: "Juris Costa Blanca",
    contact_adresse: "Dirección",
    contact_tel: "Teléfono",
    contact_horaires: "Horarios",
    horaire_semaine: "Lunes — Viernes",
    horaire_samedi: "Sábado",
    horaire_ia: "Asistente IA",
    form_title: "Solicitud de consulta",
    form_nom: "Nombre completo",
    form_service: "Servicio",
    form_select: "Seleccionar un servicio",
    form_message: "Mensaje",
    form_submit: "✦ Enviar solicitud",
    form_note: "* Consulta inicial gratuita de 15 minutos. Nuestro equipo le contactará en 24h.",
  },
  en: {
    nav_accueil: "Home",
    nav_bureau: "Our Team",
    nav_activites: "Services",
    nav_contact: "Contact",
    hero_eyebrow: "International Legal Services",
    hero_title1: "Make Alicante",
    hero_title2: "your new home",
    hero_accroche: "Wherever you come from, we speak your language.",
    hero_description: "We guide individuals and international businesses through all immigration, residency, and establishment procedures in Spain. A multicultural, multilingual team at your service in Alicante.",
    hero_cta1: "✦ Free Consultation",
    hero_cta2: "◎ WhatsApp",
    stat_langues: "Languages",
    stat_gestionnaires: "Managers",
    stat_disponible: "AI Assistant",
    hero_scroll: "Discover",
    bureau_eyebrow: "Our Team",
    bureau_title: "Experts for every region of the world",
    bureau_subtitle: "Each manager specializes in their region and speaks their clients' language.",
    javier_region: "Latin America · North America",
    javier_role: "Immigration management for Spanish and English-speaking clients from Latin America and outside Quebec.",
    wahil_region: "Africa · Maghreb · Middle East",
    wahil_role: "Support for African and Maghrebi clients in their immigration and residency procedures in Spain.",
    stefania_region: "Ukraine · Russia · Eastern Europe",
    stefania_role: "Specializes in immigration procedures for Ukrainian and Russian-speaking clients in Spain.",
    celine_region: "France · Quebec · Belgium · Switzerland",
    celine_role: "Specializes in supporting French-speaking clients from France, Quebec, and Belgium in their move to Spain.",
    activites_eyebrow: "Our Services",
    activites_title: "Our areas of expertise",
    activites_subtitle: "Contact us for more information about each service.",
    act1_title: "2026 Regularization",
    act1_desc: "Extraordinary regularization process for undocumented people in Spain. Applications until June 30, 2026.",
    act2_title: "NIE / TIE",
    act2_desc: "Obtaining and renewing the Foreigner Identity Number and Foreigner Identity Card.",
    act3_title: "Student Visa",
    act3_desc: "New regulations in force since May 2025. Authorization for the full duration of studies with work permit included.",
    act4_title: "Family Reunification",
    act4_desc: "Family reunification for residents in Spain. Processing for spouse, children, and dependent family members.",
    act5_title: "Arraigo",
    act5_desc: "Social, labor, family, and second-chance arraigo. Periods reduced to 2 years under new regulations.",
    act6_title: "Residence Renewal",
    act6_desc: "Renewal of residence and work permits. Complete case tracking and management.",
    act7_title: "Commercial Immigration",
    act7_desc: "Business establishment, investment, and residence permits for international entrepreneurs and investors.",
    act8_title: "Entrepreneur Visa",
    act8_desc: "Visa for entrepreneurs and startups. Access to Spain's technology and business ecosystem from Alicante.",
    act9_title: "AI Assistant 24/7",
    act9_desc: "Our AI assistant answers your questions in 7 languages, 24/7. Available on WhatsApp and on this site.",
    act_contact: "Contact us for more information",
    act9_contact: "Available now on WhatsApp",
    contact_eyebrow: "Contact",
    contact_title: "Let's schedule a meeting",
    contact_subtitle: "Our team will respond in your language as soon as possible.",
    contact_info_title: "Juris Costa Blanca",
    contact_adresse: "Address",
    contact_tel: "Phone",
    contact_horaires: "Opening Hours",
    horaire_semaine: "Monday — Friday",
    horaire_samedi: "Saturday",
    horaire_ia: "AI Assistant",
    form_title: "Consultation Request",
    form_nom: "Full name",
    form_service: "Service",
    form_select: "Select a service",
    form_message: "Message",
    form_submit: "✦ Send Request",
    form_note: "* Free 15-minute initial consultation. Our team will contact you within 24h.",
  },
  fr: {
    nav_accueil: "Accueil",
    nav_bureau: "Notre Équipe",
    nav_activites: "Services",
    nav_contact: "Contact",
    hero_eyebrow: "Cabinet Juridique International",
    hero_title1: "Faites d'Alicante",
    hero_title2: "votre nouvelle destination",
    hero_accroche: "Où que vous veniez, nous parlons votre langue.",
    hero_description: "Nous accompagnons les particuliers et les entreprises internationales dans toutes leurs démarches d'immigration, de résidence et d'établissement en Espagne. Une équipe multiculturelle et multilingue à votre service à Alicante.",
    hero_cta1: "✦ Consultation Gratuite",
    hero_cta2: "◎ WhatsApp",
    stat_langues: "Langues",
    stat_gestionnaires: "Gestionnaires",
    stat_disponible: "Agent IA",
    hero_scroll: "Découvrir",
    bureau_eyebrow: "Notre Équipe",
    bureau_title: "Des experts pour chaque région du monde",
    bureau_subtitle: "Chaque gestionnaire est spécialisé dans sa région et parle la langue de ses clients.",
    javier_region: "Amérique Latine · Amérique du Nord",
    javier_role: "Gestion de l'immigration pour les clients hispanophones et anglophones d'Amérique Latine et hors Québec.",
    wahil_region: "Afrique · Maghreb · Moyen-Orient",
    wahil_role: "Accompagnement des clients africains et maghrébins dans leurs démarches d'immigration et de résidence en Espagne.",
    stefania_region: "Ukraine · Russie · Europe de l'Est",
    stefania_role: "Spécialisée dans les procédures d'immigration pour les clients ukrainiens et russophones en Espagne.",
    celine_region: "France · Québec · Belgique · Suisse",
    celine_role: "Spécialisée dans l'accompagnement des clients francophones de France, du Québec et de la Belgique pour leur installation en Espagne.",
    activites_eyebrow: "Nos Services",
    activites_title: "Nos domaines d'expertise",
    activites_subtitle: "Contactez-nous pour plus d'informations sur chaque service.",
    act1_title: "Régularisation 2026",
    act1_desc: "Processus extraordinaire de régularisation pour les personnes sans papiers en Espagne. Demandes jusqu'au 30 juin 2026.",
    act2_title: "NIE / TIE",
    act2_desc: "Obtention et renouvellement du Numéro d'Identité d'Étranger et de la Carte d'Identité d'Étranger.",
    act3_title: "Visa Étudiant",
    act3_desc: "Nouveau règlement en vigueur depuis mai 2025. Autorisation pour la durée totale des études avec permis de travail inclus.",
    act4_title: "Regroupement Familial",
    act4_desc: "Regroupement familial pour les résidents en Espagne. Traitement pour conjoint, enfants et membres de famille dépendants.",
    act5_title: "Arraigo",
    act5_desc: "Arraigo social, laboral, familial et de seconde chance. Périodes réduites à 2 ans avec le nouveau règlement.",
    act6_title: "Renouvellement de Résidence",
    act6_desc: "Renouvellement des autorisations de résidence et de travail. Suivi et gestion complète du dossier.",
    act7_title: "Immigration Commerciale",
    act7_desc: "Création d'entreprises, investissements et permis de résidence pour entrepreneurs et investisseurs internationaux.",
    act8_title: "Visa Entrepreneur",
    act8_desc: "Visa pour entrepreneurs et startups. Accès à l'écosystème technologique et commercial espagnol depuis Alicante.",
    act9_title: "Agent IA 24h/24",
    act9_desc: "Notre agent IA répond à vos questions en 7 langues, 24h/24. Disponible sur WhatsApp et sur ce site.",
    act_contact: "Contactez-nous pour plus d'informations",
    act9_contact: "Disponible maintenant sur WhatsApp",
    contact_eyebrow: "Contact",
    contact_title: "Prenons rendez-vous",
    contact_subtitle: "Notre équipe vous répond dans votre langue dans les plus brefs délais.",
    contact_info_title: "Juris Costa Blanca",
    contact_adresse: "Adresse",
    contact_tel: "Téléphone",
    contact_horaires: "Horaires",
    horaire_semaine: "Lundi — Vendredi",
    horaire_samedi: "Samedi",
    horaire_ia: "Agent IA",
    form_title: "Demande de consultation",
    form_nom: "Nom complet",
    form_service: "Service",
    form_select: "Sélectionner un service",
    form_message: "Message",
    form_submit: "✦ Envoyer la demande",
    form_note: "* Consultation initiale gratuite de 15 minutes. Notre équipe vous contactera sous 24h.",
  }
};

// ===== LANGUE ACTIVE =====
window.currentLang = 'es';

function setLang(lang) {
  window.currentLang = lang;

  // Mettre à jour les boutons
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Mettre à jour les textes
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = lang;

  // Mettre à jour le titre et subtitle du chat
  var chatTitle = document.getElementById('jcb-chat-title');
  var chatSubtitle = document.getElementById('jcb-chat-subtitle');
  var chatInput = document.getElementById('jcb-chat-input');

  var chatTitles = {
    es: "Asistente Jurídico IA",
    en: "Legal AI Assistant",
    fr: "Assistant Juridique IA"
  };

  var chatSubtitles = {
    es: "Responde en 7 idiomas · 24h/24",
    en: "Answers in 7 languages · 24/7",
    fr: "Répond en 7 langues · 24h/24"
  };

  var placeholders = {
    es: "Escriba su pregunta...",
    en: "Type your question...",
    fr: "Écrivez votre question..."
  };

  if (chatTitle) chatTitle.textContent = chatTitles[lang] || chatTitles.es;
  if (chatSubtitle) chatSubtitle.textContent = chatSubtitles[lang] || chatSubtitles.es;
  if (chatInput) chatInput.placeholder = placeholders[lang] || placeholders.es;

  // Mettre à jour le message de bienvenue si c'est le seul message
  if (typeof showWelcomeMessage === 'function') {
    var messages = document.getElementById('jcb-chat-messages');
    if (messages && messages.children.length <= 1) {
      messages.innerHTML = '';
      showWelcomeMessage();
    }
  }
}

// ===== HAMBURGER MENU =====
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});

// ===== SCROLL ANIMATIONS =====
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});

// ===== NAVIGATION ACTIVE =====
var sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  var scrollY = window.pageYOffset;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop - 100;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.style.color = '';
      });
      var activeLink = document.querySelector('.nav-links a[href="#' + sectionId + '"]');
      if (activeLink) {
        activeLink.style.color = 'var(--beige-dore)';
      }
    }
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== FORM SUBMIT =====
var submitBtn = document.querySelector('.btn-primary[data-i18n="form_submit"]');
if (submitBtn) {
  submitBtn.addEventListener('click', function() {
    var messages = {
      es: '✅ Solicitud enviada. Le contactaremos en 24h.',
      en: '✅ Request sent. We will contact you within 24h.',
      fr: '✅ Demande envoyée. Nous vous contacterons sous 24h.'
    };
    alert(messages[window.currentLang] || messages.es);
  });
}

console.log('🌐 Juris Costa Blanca — Powered by IA · Alicante 2026');
