// Variáveis para manipulação do carrossel
let index = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Função para mover o carrossel
function moveCarousel() {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}

// Atualizar a imagem a cada 3 segundos
setInterval(moveCarousel, 3000);
