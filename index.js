// JavaScript pour le mode sombre et menu burger
document.addEventListener('DOMContentLoaded', function() {
    try {
        const colorToggle = document.getElementById('color-toggle');
        const iconSun = document.getElementById('icon-sun');
        const iconMoon = document.getElementById('icon-moon');
        const body = document.body;
        
        // Mode sombre
        if (colorToggle && iconSun && iconMoon) {
            // Vérifier si le mode sombre est déjà activé
            if (localStorage.getItem('dark-mode') === 'enabled') {
                body.classList.add('dark-mode');
                iconSun.classList.add('hidden');
                iconMoon.classList.remove('hidden');
            }
            
            // Gérer le clic sur le bouton de changement de mode
            colorToggle.addEventListener('click', function() {
                body.classList.toggle('dark-mode');
                
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('dark-mode', 'enabled');
                    iconSun.classList.add('hidden');
                    iconMoon.classList.remove('hidden');
                } else {
                    localStorage.setItem('dark-mode', 'disabled');
                    iconSun.classList.remove('hidden');
                    iconMoon.classList.add('hidden');
                }
            });
        }

        // Menu burger
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function(event) {
                event.stopPropagation();
                mobileMenu.classList.toggle('hidden');
            });

            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                });
            });

            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && 
                    !menuToggle.contains(event.target) && 
                    !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    } catch (error) {
        console.error('Erreur dans le script:', error);
    }
});