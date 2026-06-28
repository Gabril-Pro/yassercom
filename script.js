/* ══════════════════════════════════════════
   YASERCOM — script.js
   Nav · Back-to-top · Stats · Theme · Lang · Floating Calc · Modal
   ══════════════════════════════════════════ */

/* ── NAV TOGGLE ── */
const burger  = document.getElementById('hamburger');
const menu    = document.getElementById('navMenu');
const bIcon   = document.getElementById('hamburgerIcon');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    bIcon.className = menu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    bIcon.className = 'fas fa-bars';
}));

/* ── BACK TO TOP ── */
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 500));
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── STAT COUNTER ── */
function countUp(el, target, suffix, duration) {
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const id = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = start.toLocaleString('ar') + (suffix || '');
        if (start >= target) clearInterval(id);
    }, 30);
}
let counted = false;
const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
        counted = true;
        countUp(document.getElementById('sUsers'), 5000, '+', 1800);
        countUp(document.getElementById('sSat'), 98, '%', 1200);
    }
});
heroObs.observe(document.querySelector('.hero-stats'));

/* ══════════════════════════════════════════
   DARK / LIGHT THEME TOGGLE
   ══════════════════════════════════════════ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('yc_theme', theme);
}

// Load saved preference
applyTheme(localStorage.getItem('yc_theme') || 'dark');

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ══════════════════════════════════════════
   MULTILINGUAL SUPPORT  (AR / EN / FR)
   ══════════════════════════════════════════ */
const translations = {
    ar: {
        nav_home: 'الرئيسية', nav_services: 'الخدمات', nav_payments: 'مواقع الدفع',
        nav_contact: 'تواصل معنا', nav_start: 'ابدأ الآن',
        hero_badge: 'خدمات رقمية ومالية متكاملة في السودان',
        hero_title: 'للخدمات الرقمية والتقنية',
        hero_desc: 'اشتراكات ستارلينك، فيزا وماستر كارد، تبديل العملات، استرجاع الحسابات، الدفع للمواقع العالمية، ودعم فني 24/7',
        hero_btn1: 'استكشف الخدمات', hero_btn2: 'تواصل معنا',
        stat_users: 'عميل نشط', stat_sat: '% رضا العملاء', stat_support: '/ 7 دعم فني',
        svc_tag: 'خدماتنا', svc_title: 'ماذا نقدم لك؟',
        svc_desc: 'حلول متكاملة تغطي احتياجاتك الرقمية والمالية بكل سهولة وأمان',
        svc1_title: 'اشتراكات ستارلينك', svc1_desc: 'تفعيل وتجديد اشتراكات ستارلينك للأفراد والشركات بسرعة وأمان مع ضمان الاتصال الدائم.',
        svc1_t1: 'تفعيل فوري', svc1_t2: 'تجديد الاشتراك', svc1_t3: 'دعم كامل',
        svc2_title: 'فيزا وماستر كارد', svc2_desc: 'إصدار وشحن بطاقات فيزا وماستر كارد للدفع الدولي، مع خدمة تبديل العملات بأفضل الأسعار.',
        svc2_t3: 'تبديل عملات',
        svc3_title: 'استرجاع الحسابات', svc3_desc: 'استعادة حساباتك الضائعة في منصات التواصل الاجتماعي والبريد الإلكتروني والتطبيقات المختلفة.',
        svc3_t1: 'سوشيال ميديا', svc3_t2: 'بريد إلكتروني', svc3_t3: 'تطبيقات',
        svc4_title: 'الدفع للمواقع العالمية', svc4_desc: 'دفع آمن وسريع لكبرى المنصات العالمية: أمازون، شي ان، ChatGPT، علي بابا، كانفا، كورسيرا وغيرها.',
        svc5_title: 'الدعم الفني 24/7', svc5_desc: 'فريق متخصص جاهز لمساعدتك في أي وقت وحل جميع مشكلاتك التقنية على مدار الساعة طوال الأسبوع.',
        svc5_t1: '24 ساعة', svc5_t2: '7 أيام', svc5_t3: 'استجابة فورية',
        svc_order: 'طلب الخدمة', svc_contact: 'تواصل الآن',
        pay_tag: 'الدفع العالمي', pay_title: 'نوصلك لكل المنصات العالمية',
        pay_desc: 'ندفع نيابةً عنك لأكبر المواقع العالمية بسرعة وأمان',
        why_tag: 'لماذا ياسر كوم', why_title: 'ثق بنا لأننا نستحق ثقتك',
        why1_title: 'أمان تام', why1_desc: 'حماية كاملة لبياناتك ومعاملاتك المالية بأعلى معايير الأمان',
        why2_title: 'سرعة الإنجاز', why2_desc: 'خدمات فورية بدون انتظار، نُنجز طلبك بأسرع وقت ممكن',
        why3_title: 'دعم 24 / 7', why3_desc: 'فريقنا متاح على مدار الساعة طوال أيام الأسبوع لخدمتك',
        why4_title: 'جودة مضمونة', why4_desc: 'نضمن جودة خدماتنا أو نُعيد لك أموالك كاملةً دون قيد',
        why5_title: 'وصول عالمي', why5_desc: 'نوصلك لأي موقع أو خدمة عالمية بكل سهولة من السودان',
        cta_title: 'جاهز للبدء اليوم؟', cta_desc: 'تواصل معنا الآن واحصل على خدمة ياسر كوم بكل سرعة وسهولة',
        cta_wa: 'واتساب', cta_mail: 'راسلنا',
        contact_tag: 'تواصل معنا', contact_title: 'نحن هنا دائماً',
        wa1_title: 'واتساب 1', wa2_title: 'واتساب 2', available: 'متاح الآن',
        mail_title: 'البريد الإلكتروني', mail_reply: 'رد خلال ساعات',
        footer_desc: 'خدمات تقنية ومالية متكاملة تخدم عملاءنا في السودان وخارجه.',
        footer_quick: 'روابط سريعة', footer_svcs: 'خدماتنا', footer_contact: 'اتصل بنا',
        footer_copy: '© 2026 ياسر كوم – جميع الحقوق محفوظة | نحن لا نتبع لشركة ستارلينك',
        modal_contact: 'تواصل معنا', modal_email: 'راسلنا عبر الإيميل',
        calc_label: 'العملات', calc_title: 'حاسبة العملات',
        calc_live: 'سعر مباشر', calc_warning: 'السعر تقريبي وقابل للتغيير، للاستفسار تواصل معنا',
        calc_amount: 'المبلغ', calc_currency: 'العملة', calc_convert: 'تحويل',
        calc_note: '⚠️ الأسعار تقريبية للإرشاد فقط — قابلة للتغيير في أي وقت'
    },
    en: {
        nav_home: 'Home', nav_services: 'Services', nav_payments: 'Payments',
        nav_contact: 'Contact Us', nav_start: 'Get Started',
        hero_badge: 'Integrated digital & financial services in Sudan',
        hero_title: 'Digital & Technical Services',
        hero_desc: 'Starlink subscriptions, Visa & Mastercard, currency exchange, account recovery, global website payments, and 24/7 technical support',
        hero_btn1: 'Explore Services', hero_btn2: 'Contact Us',
        stat_users: 'Active Clients', stat_sat: '% Satisfaction', stat_support: '/ 7 Support',
        svc_tag: 'Our Services', svc_title: 'What We Offer',
        svc_desc: 'Comprehensive solutions covering your digital and financial needs with ease and security',
        svc1_title: 'Starlink Subscriptions', svc1_desc: 'Activate and renew Starlink subscriptions for individuals and businesses quickly and securely.',
        svc1_t1: 'Instant Activation', svc1_t2: 'Renewal', svc1_t3: 'Full Support',
        svc2_title: 'Visa & Mastercard', svc2_desc: 'Issue and recharge Visa & Mastercard for international payments with the best currency exchange rates.',
        svc2_t3: 'Currency Exchange',
        svc3_title: 'Account Recovery', svc3_desc: 'Recover lost accounts on social media platforms, email services, and various applications.',
        svc3_t1: 'Social Media', svc3_t2: 'Email', svc3_t3: 'Apps',
        svc4_title: 'Global Website Payments', svc4_desc: 'Fast and secure payments to major platforms: Amazon, Shein, ChatGPT, Alibaba, Canva, Coursera and more.',
        svc5_title: '24/7 Technical Support', svc5_desc: 'Our dedicated team is ready to assist you anytime and resolve all your technical issues round the clock.',
        svc5_t1: '24 Hours', svc5_t2: '7 Days', svc5_t3: 'Instant Response',
        svc_order: 'Request Service', svc_contact: 'Contact Now',
        pay_tag: 'Global Payments', pay_title: 'We Connect You to Every Platform',
        pay_desc: 'We pay on your behalf to the biggest websites quickly and securely',
        why_tag: 'Why Yaser Com', why_title: 'Trust Us — We Earn It',
        why1_title: 'Full Security', why1_desc: 'Complete protection for your data and financial transactions with top security standards',
        why2_title: 'Speed', why2_desc: 'Instant services without waiting — we complete your request as fast as possible',
        why3_title: '24/7 Support', why3_desc: 'Our team is available around the clock every day of the week',
        why4_title: 'Guaranteed Quality', why4_desc: 'We guarantee service quality or refund you in full, no questions asked',
        why5_title: 'Global Access', why5_desc: 'We connect you to any website or global service easily from Sudan',
        cta_title: 'Ready to Start Today?', cta_desc: 'Contact us now and get Yaser Com services quickly and easily',
        cta_wa: 'WhatsApp', cta_mail: 'Email Us',
        contact_tag: 'Contact Us', contact_title: 'We Are Always Here',
        wa1_title: 'WhatsApp 1', wa2_title: 'WhatsApp 2', available: 'Available Now',
        mail_title: 'Email', mail_reply: 'Reply within hours',
        footer_desc: 'Integrated technical and financial services for our clients in Sudan and beyond.',
        footer_quick: 'Quick Links', footer_svcs: 'Our Services', footer_contact: 'Contact Us',
        footer_copy: '© 2026 Yaser Com – All Rights Reserved | We are not affiliated with Starlink',
        modal_contact: 'Contact Us', modal_email: 'Send us an Email',
        calc_label: 'Currency', calc_title: 'Currency Calculator',
        calc_live: 'Live Rate', calc_warning: 'Rate is approximate and subject to change. Contact us for exact rates.',
        calc_amount: 'Amount', calc_currency: 'Currency', calc_convert: 'Convert',
        calc_note: '⚠️ Rates are approximate for guidance only — subject to change at any time'
    },
    fr: {
        nav_home: 'Accueil', nav_services: 'Services', nav_payments: 'Paiements',
        nav_contact: 'Contactez-nous', nav_start: 'Commencer',
        hero_badge: 'Services numériques et financiers intégrés au Soudan',
        hero_title: 'Services Numériques et Techniques',
        hero_desc: 'Abonnements Starlink, Visa et Mastercard, change de devises, récupération de comptes, paiements mondiaux et support technique 24/7',
        hero_btn1: 'Explorer les services', hero_btn2: 'Contactez-nous',
        stat_users: 'Clients actifs', stat_sat: '% Satisfaction', stat_support: '/ 7 Support',
        svc_tag: 'Nos Services', svc_title: 'Ce que nous offrons',
        svc_desc: 'Solutions complètes couvrant vos besoins numériques et financiers avec facilité et sécurité',
        svc1_title: 'Abonnements Starlink', svc1_desc: 'Activation et renouvellement des abonnements Starlink pour particuliers et entreprises rapidement.',
        svc1_t1: 'Activation instantanée', svc1_t2: 'Renouvellement', svc1_t3: 'Support complet',
        svc2_title: 'Visa & Mastercard', svc2_desc: 'Émission et rechargement de cartes Visa & Mastercard pour les paiements internationaux.',
        svc2_t3: 'Change de devises',
        svc3_title: 'Récupération de compte', svc3_desc: 'Récupérez vos comptes perdus sur les réseaux sociaux, les services email et diverses applications.',
        svc3_t1: 'Réseaux sociaux', svc3_t2: 'Email', svc3_t3: 'Applications',
        svc4_title: 'Paiements mondiaux', svc4_desc: 'Paiements sécurisés et rapides vers les grandes plateformes : Amazon, Shein, ChatGPT, Alibaba, Canva, Coursera.',
        svc5_title: 'Support technique 24/7', svc5_desc: 'Notre équipe dédiée est prête à vous aider à tout moment et résoudre tous vos problèmes techniques.',
        svc5_t1: '24 Heures', svc5_t2: '7 Jours', svc5_t3: 'Réponse instantanée',
        svc_order: 'Demander le service', svc_contact: 'Contacter maintenant',
        pay_tag: 'Paiements mondiaux', pay_title: 'Nous vous connectons à toutes les plateformes',
        pay_desc: 'Nous payons en votre nom sur les plus grands sites rapidement et en toute sécurité',
        why_tag: 'Pourquoi Yaser Com', why_title: 'Faites-nous confiance',
        why1_title: 'Sécurité totale', why1_desc: 'Protection complète de vos données et transactions financières selon les meilleures normes',
        why2_title: 'Rapidité', why2_desc: 'Services instantanés sans attente — nous traitons votre demande le plus vite possible',
        why3_title: 'Support 24/7', why3_desc: 'Notre équipe est disponible 24h/24 tous les jours de la semaine',
        why4_title: 'Qualité garantie', why4_desc: 'Nous garantissons la qualité de nos services ou vous remboursons intégralement',
        why5_title: 'Accès mondial', why5_desc: 'Nous vous connectons à tout site ou service mondial facilement depuis le Soudan',
        cta_title: 'Prêt à commencer aujourd\'hui ?', cta_desc: 'Contactez-nous maintenant et bénéficiez des services Yaser Com rapidement',
        cta_wa: 'WhatsApp', cta_mail: 'Nous écrire',
        contact_tag: 'Contactez-nous', contact_title: 'Nous sommes toujours là',
        wa1_title: 'WhatsApp 1', wa2_title: 'WhatsApp 2', available: 'Disponible maintenant',
        mail_title: 'Email', mail_reply: 'Réponse en quelques heures',
        footer_desc: 'Services techniques et financiers intégrés pour nos clients au Soudan et à l\'étranger.',
        footer_quick: 'Liens rapides', footer_svcs: 'Nos services', footer_contact: 'Contactez-nous',
        footer_copy: '© 2026 Yaser Com – Tous droits réservés | Nous ne sommes pas affiliés à Starlink',
        modal_contact: 'Contactez-nous', modal_email: 'Nous envoyer un email',
        calc_label: 'Devises', calc_title: 'Calculateur de devises',
        calc_live: 'Taux en direct', calc_warning: 'Le taux est approximatif et peut changer. Contactez-nous pour des taux exacts.',
        calc_amount: 'Montant', calc_currency: 'Devise', calc_convert: 'Convertir',
        calc_note: '⚠️ Les taux sont approximatifs à titre indicatif — peuvent changer à tout moment'
    }
};

let currentLang = localStorage.getItem('yc_lang') || 'ar';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('yc_lang', lang);
    const t = translations[lang];
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.body.style.direction = isRTL ? 'rtl' : 'ltr';
    document.body.style.textAlign = isRTL ? 'right' : 'left';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update floating calc if open
    runFloatCalc();
}

// Language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

// Init language on load
applyLanguage(currentLang);

/* ══════════════════════════════════════════
   FLOATING CURRENCY CALCULATOR
   with auto-simulated live USD rate (4800–4970)
   ══════════════════════════════════════════ */

// Fixed relative rates (pegged to USD=1)
const baseRates = {
    USD: 1,
    SAR: 0.2666,
    AED: 0.2725,
    KWD: 3.259,
    BHD: 2.652,
    OMR: 2.600,
    QAR: 0.2747,
    EUR: 1.0962,
    GBP: 1.2692,
    TRY: 0.02923,
    EGP: 0.02077,
    CNY: 0.1385,
    INR: 0.01192
};

const curNames = {
    ar: {
        USD:'دولار أمريكي', SAR:'ريال سعودي', AED:'درهم إماراتي',
        KWD:'دينار كويتي', BHD:'دينار بحريني', OMR:'ريال عماني',
        QAR:'ريال قطري', EUR:'يورو', GBP:'جنيه إسترليني',
        TRY:'ليرة تركية', EGP:'جنيه مصري', CNY:'يوان صيني', INR:'روبية هندية'
    },
    en: {
        USD:'US Dollar', SAR:'Saudi Riyal', AED:'UAE Dirham',
        KWD:'Kuwaiti Dinar', BHD:'Bahraini Dinar', OMR:'Omani Rial',
        QAR:'Qatari Riyal', EUR:'Euro', GBP:'British Pound',
        TRY:'Turkish Lira', EGP:'Egyptian Pound', CNY:'Chinese Yuan', INR:'Indian Rupee'
    },
    fr: {
        USD:'Dollar américain', SAR:'Riyal saoudien', AED:'Dirham des EAU',
        KWD:'Dinar koweïtien', BHD:'Dinar bahreïni', OMR:'Rial omanais',
        QAR:'Riyal qatari', EUR:'Euro', GBP:'Livre sterling',
        TRY:'Livre turque', EGP:'Livre égyptienne', CNY:'Yuan chinois', INR:'Roupie indienne'
    }
};

// Simulated live USD rate fluctuating between 4800 and 4970
let liveUsdRate = 4885; // starting value

function simulateLiveRate() {
    // Random walk within bounds
    const delta = (Math.random() - 0.48) * 12; // slight upward bias
    liveUsdRate = Math.min(4970, Math.max(4800, liveUsdRate + delta));
    liveUsdRate = Math.round(liveUsdRate * 10) / 10;
    document.getElementById('liveRate').textContent = liveUsdRate.toLocaleString();
    runFloatCalc(); // auto-refresh result
}

// Update every 8 seconds
simulateLiveRate();
setInterval(simulateLiveRate, 8000);

function runFloatCalc() {
    const amt  = parseFloat(document.getElementById('fcpAmt').value) || 0;
    const cur  = document.getElementById('fcpCur').value;
    // rate for this currency relative to SDG using live USD
    const rateToSdg = baseRates[cur] * liveUsdRate;
    const result = amt * rateToSdg;
    const lang   = currentLang;
    const names  = curNames[lang] || curNames.ar;
    const suffix = lang === 'ar' ? ' ج.س' : ' SDG';
    document.getElementById('fcpResult').textContent = result.toLocaleString(lang === 'ar' ? 'ar' : 'en') + suffix;
    document.getElementById('fcpEq').textContent =
        `${amt} ${names[cur]} = ${result.toLocaleString(lang === 'ar' ? 'ar' : 'en')} ${lang === 'ar' ? 'جنيه سوداني' : 'Sudanese Pounds'}`;
}

document.getElementById('fcpAmt').addEventListener('input', runFloatCalc);
document.getElementById('fcpCur').addEventListener('change', runFloatCalc);
document.getElementById('fcpBtn').addEventListener('click', runFloatCalc);

// Floating panel toggle
const floatCalcBtn   = document.getElementById('floatCalcBtn');
const floatCalcPanel = document.getElementById('floatCalcPanel');
const floatCalcClose = document.getElementById('floatCalcClose');

floatCalcBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    floatCalcPanel.classList.toggle('open');
    runFloatCalc();
});
floatCalcClose.addEventListener('click', () => floatCalcPanel.classList.remove('open'));

// Close on outside click
document.addEventListener('click', (e) => {
    if (!document.getElementById('floatCalcWrap').contains(e.target)) {
        floatCalcPanel.classList.remove('open');
    }
});

/* ══════════════════════════════════════════
   SERVICE CARD CLICK → MODAL
   ══════════════════════════════════════════ */
const iconMap = {
    'ستارلينك': '📡', 'Starlink': '📡', 'Abonnements': '📡',
    'فيزا': '💳', 'Visa': '💳',
    'ماستر': '💳', 'Mastercard': '💳',
    'استرجاع': '🔐', 'Recovery': '🔐', 'Récupération': '🔐',
    'الدفع': '💸', 'Payment': '💸', 'Paiement': '💸',
    'الدعم': '🎧', 'Support': '🎧',
    'default': '⚙️'
};

function getIcon(svc) {
    for (const [k, v] of Object.entries(iconMap)) {
        if (svc.includes(k)) return v;
    }
    return iconMap.default;
}

document.querySelectorAll('.svc-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.svc));
});

/* ── MODAL ── */
const modal = document.getElementById('modal');

function openModal(svcName) {
    document.getElementById('mSvc').textContent = svcName || '';
    document.getElementById('mIcon').textContent = getIcon(svcName || '');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Expose globally for inline onclick handlers in HTML
window.openModal  = openModal;
window.closeModal = closeModal;
