if (typeof emailjs === "undefined") {
    var emailjs = window.emailjs;
}

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

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init(window.EMAILJS_PUBLIC_KEY); // Usando a chave pública definida no HTML

    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("EmailJS carregado?", emailjs);

        // Captura os valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
        const statusMsg = document.getElementById("status-msg");

        // Cria um objeto com os dados do formulário (corrigindo os nomes das chaves)
        const templateParams = {
            from_name: nome,
            reply_to: email,
            message: mensagem,
            user_email: email
        };

        console.log("Enviando com os seguintes parâmetros:", templateParams);

        // Envia o e-mail via EmailJS
        emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_ID, templateParams) // Usando os valores das variáveis
            .then(response => {
                statusMsg.textContent = "Mensagem enviada com sucesso!";
                statusMsg.style.color = "green";
                statusMsg.style.display = "block";

                document.querySelector(".contact-form").reset();
            })
            .catch(error => {
                statusMsg.textContent = "Erro ao enviar mensagem. Tente novamente.";
                statusMsg.style.color = "red";
                statusMsg.style.display = "block";

                console.error("Erro:", error);
            });
    });
});
