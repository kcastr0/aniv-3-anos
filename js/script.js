let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function moveCarousel(direction) {
    currentIndex += direction;

    // Garantir que o índice esteja dentro do intervalo válido
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Atualiza a posição do carrossel para a imagem atual
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Efeito de máquina de escrever no subtítulo
const subtitleText = "Veja as imagens incríveis!";
let index = 0;
const subtitleElement = document.getElementById('subtitle');

function typeSubtitle() {
    if (index < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(index);
        index++;
        setTimeout(typeSubtitle, 100);
    }
}

window.onload = typeSubtitle;
