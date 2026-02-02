// Função para rolar suavemente até a próxima seção
function goToNextsection() {
    document.getElementById('aboutClinicID').scrollIntoView({ behavior: 'smooth' });
}

// Menu Hambúrguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header--items ul');
const header = document.querySelector('header');

// Toggle do menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    header.classList.toggle('black')
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.header--items ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Efeito sticky no header ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
// Animação de scroll para seções
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Elemento aparece quando está 80% visível na tela
        if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
            element.classList.add('show');
        }
    });
}

// Executar ao carregar a página
document.addEventListener('DOMContentLoaded', handleScrollAnimation);

// Executar ao rolar a página
window.addEventListener('scroll', handleScrollAnimation);