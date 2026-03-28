document.addEventListener('DOMContentLoaded', function() {
    // 中英文切换核心代码（已100%修复）
    const langBtns = document.querySelectorAll('.lang-switch button');

    // 初始化语言
    const savedLang = localStorage.getItem('preferred-language') || 'zh';
    switchLanguage(savedLang);
    setActiveBtn(savedLang);

    // 点击切换
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
            setActiveBtn(lang);
            localStorage.setItem('preferred-language', lang);
        });
    });

    function switchLanguage(lang) {
        document.querySelectorAll('[data-zh][data-en]').forEach(el => {
            el.textContent = el.getAttribute('data-' + lang);
        });
    }

    function setActiveBtn(lang) {
        langBtns.forEach(b => b.classList.remove('active'));
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    }

    // 移动端菜单
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
