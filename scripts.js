// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('right-4');
            mobileMenu.classList.toggle('bg-white');
            mobileMenu.classList.toggle('p-4');
            mobileMenu.classList.toggle('rounded-lg');
            mobileMenu.classList.toggle('shadow-lg');
            mobileMenu.classList.toggle('space-y-4');
            mobileMenu.classList.toggle('space-x-0');
        });
    }

    // Form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Simulate form submission
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});