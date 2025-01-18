// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    const navbar = document.querySelector('.navbar');

    // Adiciona o botão de menu ao header
    document.querySelector('.header').appendChild(menuToggle);

    // Função para alternar a visibilidade do menu
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
