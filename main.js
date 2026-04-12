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
  },
  ar: {
    nav_accueil: "الرئيسية",
    nav_bureau: "فريقنا",
    nav_activites: "الخدمات",
    nav_contact: "اتصل بنا",
    hero_eyebrow: "مكتب قانوني دولي",
    hero_title1: "اجعل أليكانتي",
    hero_title2: "وجهتك الجديدة",
    hero_accroche: "من أي بلد قدمت، نتحدث لغتك.",
    hero_description: "نرافق الأفراد والشركات الدولية في جميع إجراءات الهجرة والإقامة والتأسيس في إسبانيا. فريق متعدد الثقافات ومتعدد اللغات في خدمتكم بأليكانتي.",
    hero_cta1: "✦ استشارة مجانية",
    hero_cta2: "◎ واتساب",
    stat_langues: "لغات",
    stat_gestionnaires: "مستشارون",
    stat_disponible: "مساعد ذكاء اصطناعي",
    hero_scroll: "اكتشف",
    bureau_eyebrow: "فريقنا",
    bureau_title: "خبراء لكل منطقة في العالم",
    bureau_subtitle: "كل مستشار متخصص في منطقته ويتحدث لغة عملائه.",
    javier_region: "أمريكا اللاتينية · أمريكا الشمالية",
    javier_role: "إدارة الهجرة للعملاء الناطقين بالإسبانية والإنجليزية من أمريكا اللاتينية وخارج كيبيك.",
    wahil_region: "أفريقيا · المغرب العربي · الشرق الأوسط",
    wahil_role: "مرافقة العملاء الأفارقة والمغاربيين في إجراءات الهجرة والإقامة في إسبانيا.",
    stefania_region: "أوكرانيا · روسيا · أوروبا الشرقية",
    stefania_role: "متخصصة في إجراءات الهجرة للعملاء الأوكرانيين والناطقين بالروسية في إسبانيا.",
    celine_region: "فرنسا · كيبيك · بلجيكا · سويسرا",
    celine_role: "متخصصة في مرافقة العملاء الناطقين بالفرنسية من فرنسا وكيبيك وبلجيكا للاستقرار في إسبانيا.",
    activites_eyebrow: "خدماتنا",
    activites_title: "مجالات خبرتنا",
    activites_subtitle: "تواصل معنا للحصول على مزيد من المعلومات حول كل خدمة.",
    act1_title: "التسوية 2026",
    act1_desc: "إجراء تسوية استثنائي للأشخاص غير الموثقين في إسبانيا. تقديم الطلبات حتى 30 يونيو 2026.",
    act2_title: "NIE / TIE",
    act2_desc: "الحصول على رقم هوية الأجانب وبطاقة هوية الأجانب وتجديدهما.",
    act3_title: "تأشيرة الطالب",
    act3_desc: "لوائح جديدة سارية منذ مايو 2025. تصريح لكامل مدة الدراسة مع تصريح عمل مشمول.",
    act4_title: "لمّ شمل الأسرة",
    act4_desc: "لمّ شمل الأسرة للمقيمين في إسبانيا. معالجة ملفات الزوج والأطفال والأقارب المعالين.",
    act5_title: "الإقامة بالاندماج",
    act5_desc: "الاندماج الاجتماعي والعمالي والعائلي وفرصة ثانية. فترات مخفضة إلى سنتين بموجب اللوائح الجديدة.",
    act6_title: "تجديد الإقامة",
    act6_desc: "تجديد تصاريح الإقامة والعمل. متابعة وإدارة كاملة للملف.",
    act7_title: "الهجرة التجارية",
    act7_desc: "تأسيس الشركات والاستثمارات وتصاريح الإقامة لرجال الأعمال والمستثمرين الدوليين.",
    act8_title: "تأشيرة رائد الأعمال",
    act8_desc: "تأشيرة لرواد الأعمال والشركات الناشئة. الوصول إلى المنظومة التقنية والتجارية الإسبانية من أليكانتي.",
    act9_title: "مساعد ذكاء اصطناعي 24/7",
    act9_desc: "يجيب مساعدنا الذكي على أسئلتكم بـ 7 لغات، 24 ساعة يومياً. متاح على واتساب وعلى هذا الموقع.",
    act_contact: "تواصل معنا للمزيد من المعلومات",
    act9_contact: "متاح الآن على واتساب",
    contact_eyebrow: "اتصل بنا",
    contact_title: "لنحدد موعداً",
    contact_subtitle: "يرد عليكم فريقنا بلغتكم في أقرب وقت ممكن.",
    contact_info_title: "Juris Costa Blanca",
    contact_adresse: "العنوان",
    contact_tel: "الهاتف",
    contact_horaires: "أوقات العمل",
    horaire_semaine: "الاثنين — الجمعة",
    horaire_samedi: "السبت",
    horaire_ia: "المساعد الذكي",
    form_title: "طلب استشارة",
    form_nom: "الاسم الكامل",
    form_service: "الخدمة",
    form_select: "اختر خدمة",
    form_message: "الرسالة",
    form_submit: "✦ إرسال الطلب",
    form_note: "* استشارة أولية مجانية لمدة 15 دقيقة. سيتواصل معكم فريقنا خلال 24 ساعة.",
  },
  ru: {
    nav_accueil: "Главная",
    nav_bureau: "Наша команда",
    nav_activites: "Услуги",
    nav_contact: "Контакты",
    hero_eyebrow: "Международная юридическая фирма",
    hero_title1: "Сделайте Аликанте",
    hero_title2: "вашим новым домом",
    hero_accroche: "Откуда бы вы ни приехали, мы говорим на вашем языке.",
    hero_description: "Мы сопровождаем физических лиц и международные компании во всех иммиграционных, визовых и регистрационных процедурах в Испании. Многонациональная многоязычная команда к вашим услугам в Аликанте.",
    hero_cta1: "✦ Бесплатная консультация",
    hero_cta2: "◎ WhatsApp",
    stat_langues: "Языков",
    stat_gestionnaires: "Специалистов",
    stat_disponible: "ИИ-ассистент",
    hero_scroll: "Узнать больше",
    bureau_eyebrow: "Наша команда",
    bureau_title: "Эксперты для каждого региона мира",
    bureau_subtitle: "Каждый специалист работает со своим регионом и говорит на языке своих клиентов.",
    javier_region: "Латинская Америка · Северная Америка",
    javier_role: "Иммиграционное сопровождение для испано- и англоязычных клиентов из Латинской Америки и за пределами Квебека.",
    wahil_region: "Африка · Магриб · Ближний Восток",
    wahil_role: "Сопровождение африканских и магрибских клиентов в иммиграционных и визовых процедурах в Испании.",
    stefania_region: "Украина · Россия · Восточная Европа",
    stefania_role: "Специализируется на иммиграционных процедурах для украинских и русскоязычных клиентов в Испании.",
    celine_region: "Франция · Квебек · Бельгия · Швейцария",
    celine_role: "Специализируется на сопровождении франкоязычных клиентов из Франции, Квебека и Бельгии при переезде в Испанию.",
    activites_eyebrow: "Наши услуги",
    activites_title: "Области нашей экспертизы",
    activites_subtitle: "Свяжитесь с нами для получения дополнительной информации по каждой услуге.",
    act1_title: "Легализация 2026",
    act1_desc: "Экстраординарный процесс легализации для лиц без документов в Испании. Приём заявок до 30 июня 2026 г.",
    act2_title: "NIE / TIE",
    act2_desc: "Получение и продление идентификационного номера иностранца и карты иностранца.",
    act3_title: "Студенческая виза",
    act3_desc: "Новые правила, действующие с мая 2025 г. Разрешение на весь срок обучения с включённым разрешением на работу.",
    act4_title: "Воссоединение семьи",
    act4_desc: "Воссоединение семьи для резидентов Испании. Оформление документов для супруга, детей и иждивенцев.",
    act5_title: "Вид на жительство (Arraigo)",
    act5_desc: "Социальный, трудовой, семейный и второй шанс. Сроки сокращены до 2 лет по новым правилам.",
    act6_title: "Продление вида на жительство",
    act6_desc: "Продление разрешений на проживание и работу. Полное ведение дела.",
    act7_title: "Коммерческая иммиграция",
    act7_desc: "Открытие компаний, инвестиции и вид на жительство для международных предпринимателей и инвесторов.",
    act8_title: "Виза предпринимателя",
    act8_desc: "Виза для предпринимателей и стартапов. Доступ к технологической и деловой экосистеме Испании из Аликанте.",
    act9_title: "ИИ-ассистент 24/7",
    act9_desc: "Наш ИИ-ассистент отвечает на ваши вопросы на 7 языках круглосуточно. Доступен в WhatsApp и на этом сайте.",
    act_contact: "Свяжитесь с нами для получения информации",
    act9_contact: "Доступен сейчас в WhatsApp",
    contact_eyebrow: "Контакты",
    contact_title: "Запишитесь на приём",
    contact_subtitle: "Наша команда ответит вам на вашем языке в кратчайшие сроки.",
    contact_info_title: "Juris Costa Blanca",
    contact_adresse: "Адрес",
    contact_tel: "Телефон",
    contact_horaires: "Часы работы",
    horaire_semaine: "Понедельник — Пятница",
    horaire_samedi: "Суббота",
    horaire_ia: "ИИ-ассистент",
    form_title: "Запрос на консультацию",
    form_nom: "Полное имя",
    form_service: "Услуга",
    form_select: "Выберите услугу",
    form_message: "Сообщение",
    form_submit: "✦ Отправить запрос",
    form_note: "* Бесплатная первичная консультация 15 минут. Наша команда свяжется с вами в течение 24 часов.",
  },
  zh: {
    nav_accueil: "首页",
    nav_bureau: "我们的团队",
    nav_activites: "服务",
    nav_contact: "联系我们",
    hero_eyebrow: "国际法律服务机构",
    hero_title1: "让阿利坎特",
    hero_title2: "成为您的新家园",
    hero_accroche: "无论您来自哪里，我们都说您的语言。",
    hero_description: "我们为个人和国际企业提供西班牙移民、居留及注册等全程手续服务。阿利坎特多元文化、多语言团队，竭诚为您服务。",
    hero_cta1: "✦ 免费咨询",
    hero_cta2: "◎ WhatsApp",
    stat_langues: "语言",
    stat_gestionnaires: "专业顾问",
    stat_disponible: "AI助手",
    hero_scroll: "了解更多",
    bureau_eyebrow: "我们的团队",
    bureau_title: "覆盖全球各地区的专家",
    bureau_subtitle: "每位顾问专注于其所在地区，并使用客户的母语沟通。",
    javier_region: "拉丁美洲 · 北美洲",
    javier_role: "为来自拉丁美洲及魁北克以外地区的西班牙语和英语客户提供移民管理服务。",
    wahil_region: "非洲 · 马格里布 · 中东",
    wahil_role: "协助非洲及马格里布客户办理西班牙移民和居留手续。",
    stefania_region: "乌克兰 · 俄罗斯 · 东欧",
    stefania_role: "专门为乌克兰及俄语客户办理西班牙移民手续。",
    celine_region: "法国 · 魁北克 · 比利时 · 瑞士",
    celine_role: "专门为来自法国、魁北克和比利时的法语客户提供赴西班牙定居的全程服务。",
    activites_eyebrow: "我们的服务",
    activites_title: "我们的专业领域",
    activites_subtitle: "如需了解每项服务的更多信息，请联系我们。",
    act1_title: "2026年合法化",
    act1_desc: "针对西班牙无证人员的特别合法化程序。申请截止日期为2026年6月30日。",
    act2_title: "NIE / TIE",
    act2_desc: "外国人身份证号码及外国人身份证的申请与续签。",
    act3_title: "学生签证",
    act3_desc: "2025年5月起实施的新法规。授权涵盖全部学习期限，并附带工作许可。",
    act4_title: "家庭团聚",
    act4_desc: "西班牙居民的家庭团聚申请。为配偶、子女及受抚养亲属办理相关手续。",
    act5_title: "扎根居留（Arraigo）",
    act5_desc: "社会、劳动、家庭及二次机会扎根居留。新法规下期限缩短至2年。",
    act6_title: "居留续签",
    act6_desc: "居留及工作许可续签。全程跟踪与管理档案。",
    act7_title: "商业移民",
    act7_desc: "为国际企业家和投资者提供公司注册、投资及居留许可服务。",
    act8_title: "创业者签证",
    act8_desc: "为企业家和初创企业提供签证服务。从阿利坎特进入西班牙科技与商业生态系统。",
    act9_title: "AI助手 24/7",
    act9_desc: "我们的AI助手以7种语言全天候解答您的问题。可通过WhatsApp和本网站使用。",
    act_contact: "联系我们了解更多信息",
    act9_contact: "现已可在WhatsApp上使用",
    contact_eyebrow: "联系我们",
    contact_title: "预约咨询",
    contact_subtitle: "我们的团队将尽快以您的语言回复您。",
    contact_info_title: "Juris Costa Blanca",
    contact_adresse: "地址",
    contact_tel: "电话",
    contact_horaires: "办公时间",
    horaire_semaine: "周一 — 周五",
    horaire_samedi: "周六",
    horaire_ia: "AI助手",
    form_title: "咨询申请",
    form_nom: "全名",
    form_service: "服务",
    form_select: "选择服务",
    form_message: "留言",
    form_submit: "✦ 提交申请",
    form_note: "* 免费初次咨询15分钟。我们的团队将在24小时内与您联系。",
  },
  uk: {
    nav_accueil: "Головна",
    nav_bureau: "Наша команда",
    nav_activites: "Послуги",
    nav_contact: "Контакти",
    hero_eyebrow: "Міжнародна юридична фірма",
    hero_title1: "Зробіть Аліканте",
    hero_title2: "вашим новим домом",
    hero_accroche: "Звідки б ви не приїхали, ми говоримо вашою мовою.",
    hero_description: "Ми супроводжуємо фізичних осіб та міжнародні компанії у всіх іміграційних, візових та реєстраційних процедурах в Іспанії. Багатонаціональна багатомовна команда до ваших послуг в Аліканте.",
    hero_cta1: "✦ Безкоштовна консультація",
    hero_cta2: "◎ WhatsApp",
    stat_langues: "Мов",
    stat_gestionnaires: "Спеціалістів",
    stat_disponible: "ШІ-асистент",
    hero_scroll: "Дізнатися більше",
    bureau_eyebrow: "Наша команда",
    bureau_title: "Експерти для кожного регіону світу",
    bureau_subtitle: "Кожен спеціаліст працює зі своїм регіоном і говорить мовою своїх клієнтів.",
    javier_region: "Латинська Америка · Північна Америка",
    javier_role: "Іміграційний супровід для іспаномовних та англомовних клієнтів з Латинської Америки та за межами Квебеку.",
    wahil_region: "Африка · Магриб · Близький Схід",
    wahil_role: "Супровід африканських та магрибських клієнтів в іміграційних і візових процедурах в Іспанії.",
    stefania_region: "Україна · Росія · Східна Європа",
    stefania_role: "Спеціалізується на іміграційних процедурах для українських та російськомовних клієнтів в Іспанії.",
    celine_region: "Франція · Квебек · Бельгія · Швейцарія",
    celine_role: "Спеціалізується на супроводі франкомовних клієнтів з Франції, Квебеку та Бельгії при переїзді до Іспанії.",
    activites_eyebrow: "Наші послуги",
    activites_title: "Сфери нашої експертизи",
    activites_subtitle: "Зв'яжіться з нами для отримання додаткової інформації щодо кожної послуги.",
    act1_title: "Легалізація 2026",
    act1_desc: "Надзвичайний процес легалізації для осіб без документів в Іспанії. Приймання заявок до 30 червня 2026 р.",
    act2_title: "NIE / TIE",
    act2_desc: "Отримання та продовження ідентифікаційного номера іноземця та картки іноземця.",
    act3_title: "Студентська віза",
    act3_desc: "Нові правила, що діють з травня 2025 р. Дозвіл на весь термін навчання з включеним дозволом на роботу.",
    act4_title: "Возз'єднання сім'ї",
    act4_desc: "Возз'єднання сім'ї для резидентів Іспанії. Оформлення документів для подружжя, дітей та утриманців.",
    act5_title: "Посвідка на проживання (Arraigo)",
    act5_desc: "Соціальна, трудова, сімейна та друга можливість. Терміни скорочені до 2 років за новими правилами.",
    act6_title: "Продовження посвідки",
    act6_desc: "Продовження дозволів на проживання та роботу. Повне ведення справи.",
    act7_title: "Комерційна імміграція",
    act7_desc: "Відкриття компаній, інвестиції та посвідки на проживання для міжнародних підприємців та інвесторів.",
    act8_title: "Віза підприємця",
    act8_desc: "Віза для підприємців та стартапів. Доступ до технологічної та ділової екосистеми Іспанії з Аліканте.",
    act9_title: "ШІ-асистент 24/7",
    act9_desc: "Наш ШІ-асистент відповідає на ваші запитання 7 мовами цілодобово. Доступний у WhatsApp та на цьому сайті.",
    act_contact: "Зв'яжіться з нами для отримання інформації",
    act9_contact: "Доступний зараз у WhatsApp",
    contact_eyebrow: "Контакти",
    contact_title: "Запишіться на прийом",
    contact_subtitle: "Наша команда відповість вам вашою мовою якнайшвидше.",
    contact_info_title: "Juris Costa Blanca",
    contact_adresse: "Адреса",
    contact_tel: "Телефон",
    contact_horaires: "Години роботи",
    horaire_semaine: "Понеділок — П'ятниця",
    horaire_samedi: "Субота",
    horaire_ia: "ШІ-асистент",
    form_title: "Запит на консультацію",
    form_nom: "Повне ім'я",
    form_service: "Послуга",
    form_select: "Оберіть послугу",
    form_message: "Повідомлення",
    form_submit: "✦ Надіслати запит",
    form_note: "* Безкоштовна первинна консультація 15 хвилин. Наша команда зв'яжеться з вами протягом 24 годин.",
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

  // RTL pour l'arabe, LTR pour les autres
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Mettre à jour le titre et subtitle du chat
  var chatTitle = document.getElementById('jcb-chat-title');
  var chatSubtitle = document.getElementById('jcb-chat-subtitle');
  var chatInput = document.getElementById('jcb-chat-input');

  var chatTitles = {
    es: "Asistente Jurídico IA",
    en: "Legal AI Assistant",
    fr: "Assistant Juridique IA",
    ar: "المساعد القانوني الذكي",
    ru: "Юридический ИИ-ассистент",
    zh: "法律AI助手",
    uk: "Юридичний ШІ-асистент"
  };

  var chatSubtitles = {
    es: "Responde en 7 idiomas · 24h/24",
    en: "Answers in 7 languages · 24/7",
    fr: "Répond en 7 langues · 24h/24",
    ar: "يجيب بـ 7 لغات · 24/7",
    ru: "Отвечает на 7 языках · 24/7",
    zh: "支持7种语言 · 24/7",
    uk: "Відповідає 7 мовами · 24/7"
  };

  var placeholders = {
    es: "Escriba su pregunta...",
    en: "Type your question...",
    fr: "Écrivez votre question...",
    ar: "اكتب سؤالك...",
    ru: "Введите ваш вопрос...",
    zh: "请输入您的问题...",
    uk: "Введіть ваше запитання..."
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
      fr: '✅ Demande envoyée. Nous vous contacterons sous 24h.',
      ar: '✅ تم إرسال الطلب. سنتواصل معكم خلال 24 ساعة.',
      ru: '✅ Запрос отправлен. Мы свяжемся с вами в течение 24 часов.',
      zh: '✅ 申请已提交。我们将在24小时内与您联系。',
      uk: '✅ Запит надіслано. Ми зв\'яжемося з вами протягом 24 годин.'
    };
    alert(messages[window.currentLang] || messages.es);
  });
}

console.log('🌐 Juris Costa Blanca — Powered by IA · Alicante 2026');
