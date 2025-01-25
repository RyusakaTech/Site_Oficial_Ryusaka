const carouselItems = document.querySelector('.carousel-items'); // Container dos itens do carrossel
const items = document.querySelectorAll('.carousel-item'); // Todos os itens do carrossel
const prevButton = document.getElementById('prev'); // Botão "Anterior"
const nextButton = document.getElementById('next'); // Botão "Próximo"
const menuButton = document.getElementById('menu-button'); // Botão de menu
const menu = document.getElementById('menu'); // Menu principal
const projetosSection = document.getElementById('projetos'); // Seção de projetos

let currentIndex = 0;

// Array de imagens de fundo para os projetos
const backgrounds = [
    "url('assets/aula.png')",
    "url('assets/Frame2.jpg')",
    "url('assets/Frame3.png')"
];

// Função para mostrar o item atual e alterar o fundo
function showItem(index) {
    const offset = -index * 100; // Desloca o carrossel horizontalmente
    carouselItems.style.transform = `translateX(${offset}%)`;
    projetosSection.style.background = `
        linear-gradient(
            rgba(0, 0, 0, 0.60), 
            rgba(0, 0, 0, 0.60)
        ),
        ${backgrounds[index]}
    `;
    projetosSection.style.backgroundSize = 'cover'; // Certifica-se de que o fundo se ajusta corretamente
    //projetosSection.style.backgroundPosition = 'center'; // Centraliza o fundo
}


// Evento para botão "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

// Evento para botão "Próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

// Alterna a exibição do menu
menuButton.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

// Navegação suave ao clicar nos links
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão

        const targetId = link.getAttribute('href').substring(1); // Obtém o ID sem o '#'
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Navegação suave
        }

        // Oculta o menu após a navegação
        menu.style.display = 'none';
    });
});

// Selecionar o botão de e-mail e elementos do pop-up
const emailButton = document.getElementById("emailButton");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

// Função para copiar o e-mail para a área de transferência
function copyEmailToClipboard() {
    const email = "exemplo@gmail.com";
    navigator.clipboard.writeText(email)
        .then(() => {
            showPopup();
        })
        .catch(err => {
            console.error("Erro ao copiar o e-mail: ", err);
        });
}

// Função para exibir o pop-up
function showPopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
}

// Função para fechar o pop-up
function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

// Adicionar evento de clique ao botão de e-mail
if (emailButton) {
    emailButton.addEventListener("click", copyEmailToClipboard);
}

// Garantir que o pop-up seja fechado corretamente
if (overlay) {
    overlay.addEventListener("click", closePopup);
}