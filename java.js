// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }
    
    // Toggle theme function
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme === 'dark');
    });
    
    // Update icon based on theme
    function updateThemeIcon(isDark) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    // Toggle menú móvil
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Cerrar con overlay
    menuOverlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Toggle dropdown en móvil
    mobileDropdownBtn.addEventListener('click', () => {
        mobileDropdown.classList.toggle('active');
        const icon = mobileDropdownBtn.querySelector('i');
        if (mobileDropdown.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });

    // Cerrar menú al hacer clic en un enlace
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});
