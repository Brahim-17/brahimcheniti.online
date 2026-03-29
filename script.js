/**
 * Website Interactivity Script (Bilingual Support EN/AR)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ====================================================================
       1. Localization (i18n) Dictionary & Logic
       ==================================================================== */
    const locales = {
        docTitle: { en: "Brahim Cheniti — Software Developer & Domain Specialist", ar: "براهيم شنيتي — مطور برمجيات ومتخصص في أسماء النطاقات" },
        logoText: { en: "Brahim Cheniti", ar: "براهيم شنيتي" },
        navHome: { en: "Home", ar: "الرئيسية" },
        navAbout: { en: "About", ar: "حول" },
        navServices: { en: "Services", ar: "الخدمات" },
        navDomains: { en: "Domains", ar: "النطاقات" },
        navContact: { en: "Contact", ar: "اتصال" },
        
        heroBadge: { en: "Software Developer & Domain Specialist", ar: "مطور برمجيات ومتخصص في أسماء النطاقات" },
        heroTitle: { en: "Hi, I'm Brahim<br>Cheniti", ar: "مرحباً، أنا براهيم<br>شنيتي" },
        heroBuild: { en: "I build", ar: "أنا أصنع" },
        heroDesc: { en: "Turning ideas into robust software solutions and connecting modern brands with premium digital real estate.", ar: "تحويل الأفكار إلى حلول برمجية قوية وربط العلامات التجارية الحديثة بأصول رقمية مميزة." },
        btnGetInTouch: { en: "Get in Touch", ar: "تواصل معي" },
        btnViewServices: { en: "View Services", ar: "عرض الخدمات" },
        
        aboutHead: { en: "About Me", ar: "نبذة عني" },
        aboutSubhead: { en: "My Journey", ar: "مسيرتي" },
        aboutP1: { en: "Hello! I'm Brahim, a 39-year-old technologist based in Algeria. My academic journey began with a BSc in Nature and Life Sciences (2007), but my true passion has always been rooted in technology and digital creation.", ar: "مرحباً! أنا براهيم، تقني يبلغ من العمر 39 عاماً ومقري في الجزائر. بدأت مسيرتي الأكاديمية بدرجة البكالوريوس في علوم الطبيعة والحياة (2007)، لكن شغفي الحقيقي كان دائماً متجذراً في التكنولوجيا والإبداع الرقمي." },
        aboutP2: { en: "Over the years, I successfully pivoted my career into software development, mastering both PC and Mobile application creation. I specialize in building robust apps tailored to client needs. Alongside coding, I've developed a sharp eye for digital assets, managing a portfolio of premium domain names to help modern brands establish their online identity.", ar: "على مر السنين، نجحت في تحويل مساري المهني إلى تطوير البرمجيات، وأتقنت إنشاء تطبيقات الكمبيوتر والهواتف المحمولة. أتخصص في بناء تطبيقات قوية مصممة خصيصاً لتلبية احتياجات العملاء. إلى جانب البرمجة، طورت نظرة ثاقبة للأصول الرقمية، حيث أدير محفظة من أسماء النطاقات المميزة لمساعدة العلامات التجارية الحديثة على ترسيخ هويتها عبر الإنترنت." },
        
        statYears: { en: "Years in Tech", ar: "سنوات في التقنية" },
        statProjects: { en: "Projects Delivered", ar: "مشاريع منجزة" },
        statDomains: { en: "Domains Managed", ar: "نطاقات مدارة" },
        
        servicesHead: { en: "Services", ar: "الخدمات" },
        srvPCHead: { en: "PC Software Development", ar: "تطوير برمجيات الكمبيوتر" },
        srvPCDesc: { en: "Custom desktop applications, automation tools, system utilities, and highly-tailored enterprise software solutions designed for maximum efficiency.", ar: "تطبيقات سطح مكتب مخصصة، أدوات أتمتة، أدوات مساعدة، وحلول برمجية للشركات مصممة لتحقيق أقصى كفاءة." },
        srvMobileHead: { en: "Mobile App Development", ar: "تطوير تطبيقات الهواتف المحمولة" },
        srvMobileDesc: { en: "Responsive, engaging, and performant mobile applications built for Android and iOS, bringing your product directly to users' hands.", ar: "تطبيقات هواتف محمولة متجاوبة وجذابة وعالية الأداء تعمل على نظامي أندرويد وiOS، لتضع منتجك مباشرة في أيدي المستخدمين." },
        srvDomainHead: { en: "Domain Name Services", ar: "خدمات أسماء النطاقات" },
        srvDomainDesc: { en: "Premium domain name acquisition, valuation, brokering, and portfolio management. Finding the perfect digital real estate for your brand.", ar: "اقتناء وتقييم ووساطة أسماء النطاقات المميزة وإدارة المحافظ. إيجاد الأصل الرقمي المثالي لعلامتك التجارية." },
        
        domainsHead: { en: "Premium Domains for Sale", ar: "نطاقات مميزة للبيع" },
        domainsSub: { en: "Invest in the perfect domain name for your brand.", ar: "استثمر في اسم النطاق المثالي لعلامتك التجارية." },
        filterAll: { en: "All", ar: "الكل" },
        
        contactHead: { en: "Let's Work Together", ar: "دعنا نعمل معاً" },
        contactDesc: { en: "Whether you have a project in mind, need a specific domain, or just want to say hi, feel free to drop a message.", ar: "سواء كان لديك مشروع في ذهنك، أو تحتاج إلى نطاق معين، أو تريد فقط إلقاء التحية، فلا تتردد في ترك رسالة." },
        formBot: { en: "Don't fill this out if you're human: <input name='bot-field' />", ar: "لا تملأ هذا الحقل إذا كنت بشراً: <input name='bot-field' />" },
        formName: { en: "Your Name", ar: "اسمك" },
        formEmail: { en: "Your Email", ar: "بريدك الإلكتروني" },
        formSubject: { en: "Subject (or Domain Name)", ar: "الموضوع (أو اسم النطاق)" },
        formMessage: { en: "Your Message", ar: "رسالتك" },
        formSubmit: { en: "Send Message", ar: "إرسال الرسالة" },
        
        footerCopy: { en: "&copy; 2026 Brahim Cheniti. All rights reserved.", ar: "&copy; 2026 براهيم شنيتي. جميع الحقوق محفوظة." }
    };

    const statusTranslations = {
        "Premium": { en: "Premium", ar: "مميّز" },
        "Available": { en: "Available", ar: "متاح" },
        "Negotiable": { en: "Negotiable", ar: "قابل للتفاوض" }
    };

    const uiTranslations = {
        inquire: { en: "Inquire", ar: "استفسار" }
    };

    const typedStrings = {
        en: [
            "PC & Mobile Applications",
            "Robust Software Solutions",
            "Clean, Modern UIs",
            "Your Digital Presence"
        ],
        ar: [
            "تطبيقات الكمبيوتر والجوال",
            "حلول برمجية قوية",
            "واجهات مستخدم حديثة ونظيفة",
            "حضورك الرقمي"
        ]
    };

    /* ====================================================================
       Data Initialization & Core Scoped Variables
       ==================================================================== */
    let currentLang = localStorage.getItem('siteLang') || 'en';
    let textArray = typedStrings[currentLang];
    
    const typedTextSpan = document.getElementById("typed-text");
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    const domainsData = [
        { name: "techflow.io", price: "$2,500", tld: ".io", tldClass: "tld-io", status: "Premium", statusClass: "status-premium" },
        { name: "brandpulse.com", price: "$4,000", tld: ".com", tldClass: "tld-com", status: "Available", statusClass: "status-available" },
        { name: "devcraft.dev", price: "$1,800", tld: ".dev", tldClass: "tld-dev", status: "Negotiable", statusClass: "status-negotiable" },
        { name: "smartnode.net", price: "$1,200", tld: ".net", tldClass: "tld-net", status: "Available", statusClass: "status-available" },
        { name: "cloudpeak.io", price: "$3,500", tld: ".io", tldClass: "tld-io", status: "Premium", statusClass: "status-premium" },
        { name: "vortexlab.com", price: "$2,800", tld: ".com", tldClass: "tld-com", status: "Negotiable", statusClass: "status-negotiable" },
        { name: "codeforge.online", price: "$900", tld: ".online", tldClass: "tld-online", status: "Available", statusClass: "status-available" }
    ];

    const domainsGrid = document.getElementById('domainsGrid');

    /* ====================================================================
       Function Declarations
       ==================================================================== */
    function attachInquireListeners() {
        const inquireBtns = document.querySelectorAll('.btn-inquire');
        const subjectInput = document.getElementById('subject');

        inquireBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const domainName = this.getAttribute('data-domain');
                if (subjectInput) {
                    const prefix = currentLang === 'ar' ? 'استفسار بخصوص النطاق: ' : 'Inquiry regarding domain: ';
                    subjectInput.value = prefix + domainName;
                    subjectInput.focus();
                }
            });
        });
    }

    function renderDomains(filter = 'all') {
        if(!domainsGrid) return;
        domainsGrid.innerHTML = ''; 

        const filtered = filter === 'all' ? domainsData : domainsData.filter(d => d.tld === filter);

        filtered.forEach(domain => {
            const card = document.createElement('div');
            card.className = `domain-card fade-up-animate in-view filter-item`;
            card.dataset.tld = domain.tld;
            
            const statusText = statusTranslations[domain.status][currentLang];
            const inquireText = uiTranslations.inquire[currentLang];

            card.innerHTML = `
                <div class="domain-header">
                    <div class="domain-name-wrapper">
                        <span class="domain-name" dir="ltr">${domain.name}</span>
                        <span class="tld-badge ${domain.tldClass}" dir="ltr">${domain.tld}</span>
                    </div>
                    <div class="domain-price" dir="ltr">${domain.price}</div>
                </div>
                <div class="domain-footer">
                    <div class="status-indicator ${domain.statusClass}">
                        <div class="status-dot"></div>
                        <span>${statusText}</span>
                    </div>
                    <a href="#contact" class="btn btn-primary btn-inquire" data-domain="${domain.name}">${inquireText}</a>
                </div>
            `;
            domainsGrid.appendChild(card);
        });

        attachInquireListeners();
    }

    function type() {
        if (!typedTextSpan || !textArray) return;
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (!typedTextSpan || !textArray) return;
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }
    
    function switchLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        if(locales['docTitle'] && locales['docTitle'][lang]) {
            document.title = locales['docTitle'][lang];
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (locales[key] && locales[key][lang]) {
                el.innerHTML = locales[key][lang];
            }
        });

        const langSwitcherBtn = document.getElementById('langSwitcher');
        if(langSwitcherBtn) {
            langSwitcherBtn.innerText = lang === 'en' ? 'EN | بالعربية' : 'بالعربية | EN';
        }

        localStorage.setItem('siteLang', lang);

        textArray = typedStrings[lang];
        if(typedTextSpan) typedTextSpan.textContent = '';
        charIndex = 0;
        textArrayIndex = 0;

        renderDomains('all');
        const activeFilterBtn = document.querySelector('.filter-btn.active');
        if(activeFilterBtn) { activeFilterBtn.classList.remove('active'); }
        const allBtn = document.querySelector('[data-filter="all"]');
        if(allBtn) allBtn.classList.add('active');
    }

    /* ====================================================================
       Initialization & Event Listeners
       ==================================================================== */
       
    // Initialize Language
    if (currentLang !== 'en') {
        switchLanguage(currentLang);
    } else {
        const langSwitcherBtn = document.getElementById('langSwitcher');
        if(langSwitcherBtn) langSwitcherBtn.innerText = 'EN | بالعربية';
    }

    // Initialize Domains Setup
    renderDomains();

    // Toggle Button Listener
    const langSwitcher = document.getElementById('langSwitcher');
    if(langSwitcher) {
        langSwitcher.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            switchLanguage(newLang);
        });
    }

    // Init typing effect
    if (textArray && textArray.length) setTimeout(type, newTextDelay + 250);


    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    if(menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinksContainer.classList.remove('open');
            });
        });
    }

    // Sticky Navbar & Active Link Highlight
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if(navbar) {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

    // Filter Logic for Domains
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filterValue = e.target.getAttribute('data-filter');
            renderDomains(filterValue);
        });
    });

    /* ====================================================================
       Scroll Animations (Intersection Observer)
       ==================================================================== */
    const fadeElements = document.querySelectorAll('.fade-up-animate');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('in-view');
            
            // If it's the stats section, fire count-up animation
            if(entry.target.querySelector('.stats-row')) {
                const counters = entry.target.querySelectorAll('.stat-num');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const increment = target / (duration / 16); 
                    
                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
            }

            observer.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    /* ====================================================================
       Back to Top Button
       ==================================================================== */
    const backToTopBtn = document.getElementById('backToTop');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) backToTopBtn.classList.add('visible');
            else backToTopBtn.classList.remove('visible');
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
