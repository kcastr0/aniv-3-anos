// Aguardar o carregamento completo do conteúdo
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    let index = 0;

    // Função para mover para a próxima imagem
    function moveToNextImage() {
        index++;
        if (index >= images.length) {
            index = 0; // Volta para a primeira imagem
        }
        const offset = -index * 100; // Calcula o deslocamento para a nova imagem
        carousel.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
    }

    // Mudar as imagens a cada 3 segundos
    setInterval(moveToNextImage, 3000); // 3000ms = 3 segundos
});
