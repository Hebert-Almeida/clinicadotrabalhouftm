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