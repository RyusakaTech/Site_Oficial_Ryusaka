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

// Função para copiar e mostrar o pop-up
document.getElementById("emailButton").addEventListener("click", function() {
    const email = "exemplo@gmail.com";

    // Copiar o e-mail para a área de transferência
    navigator.clipboard.writeText(email).then(() => {
        // Exibir o pop-up
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
});

// Função para fechar o pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

