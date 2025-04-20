// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Loan simulation form validation and submission
    const loanForm = document.getElementById('loan-form');
    if (loanForm) {
        loanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const valor = document.getElementById('valor').value;
            const parcelas = document.getElementById('parcelas').value;
            
            if (!valor || valor < 1000 || valor > 50000) {
                alert('Por favor, insira um valor de empréstimo entre R$ 1.000 e R$ 50.000.');
                return;
            }
            
            if (!parcelas) {
                alert('Por favor, selecione o número de parcelas.');
                return;
            }
            
            // Simulate loan calculation (simple example)
            const taxaJuros = 0.02; // 2% monthly interest
            const valorParcela = (valor * (1 + taxaJuros * parcelas)) / parcelas;
            
            alert(`Simulação concluída!\nValor do empréstimo: R$ ${parseFloat(valor).toFixed(2)}\nNúmero de parcelas: ${parcelas}x\nValor aproximado da parcela: R$ ${valorParcela.toFixed(2)}`);
            loanForm.reset();
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