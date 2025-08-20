const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
const navMenu = document.querySelector('nav[class*="hidden md:block"]');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('top-16');
    navMenu.classList.toggle('left-0');
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('bg-white');
    navMenu.classList.toggle('p-4');
    navMenu.classList.toggle('shadow-md');
});

// 2. Smooth Scroll pour les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Ferme le menu mobile après clic
        if (!navMenu.classList.contains('hidden')) {
            navMenu.classList.add('hidden');
        }
    });
});

// 3. Animation au scroll (Intersection Observer)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        observer.observe(el);
    });
};

// 4. Gestion du formulaire
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        // Simulation d'envoi (remplacer par fetch() en réel)
        console.log('Message envoyé :', Object.fromEntries(formData));
        
        alert('Message envoyé avec succès !');
        contactForm.reset();
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Ajoute la classe animate-fadeIn pour les keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);
});