let slideIndex = 0;

// Função para mover o carrossel
function moveSlide(n) {
    const slides = document.querySelectorAll(".carrossel img");
    slideIndex += n;

    // Garantir que o índice fique dentro do intervalo de imagens
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Volta para a primeira imagem
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Vai para a última imagem
    }

    // Mover o carrossel para o slide correto
    const newTransform = -slideIndex * 100; // Cada imagem tem 100% de largura
    document.querySelector(".carrossel").style.transform = `translateX(${newTransform}%)`;
}
