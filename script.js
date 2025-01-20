document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelector('.carousel-items');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const projetosSection = document.getElementById('projetos');

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
        projetosSection.style.backgroundSize = 'cover';
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

    // Mostrar o primeiro item no início
    showItem(currentIndex);
});
