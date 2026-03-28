document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ==============================================
    // 中英文切换功能（已修复，可正常使用）
    // ==============================================
    const langBtns = document.querySelectorAll('.lang-switch button');
    
    // 读取本地存储的语言
    const savedLang = localStorage.getItem('preferred-language') || 'zh';
    switchLanguage(savedLang);
    setActiveButton(savedLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
            setActiveButton(lang);
            localStorage.setItem('preferred-language', lang);
        });
    });

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-zh][data-en]');
        elements.forEach(el => {
            el.textContent = el.getAttribute('data-' + lang);
        });
    }

    function setActiveButton(lang) {
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
    }

    // 动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .product-card, .solution-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
