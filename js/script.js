// Aguardar o carregamento completo do conteúdo
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');

    // Função para mudar a imagem principal quando clicar na miniatura
    function changeMainImage(event) {
        const index = event.target.getAttribute('data-index');
        const imageSrc = `images/image${parseInt(index) + 1}.jpg`; // Assume que as imagens são sequenciais

        mainImage.src = imageSrc;
    }

    // Adicionando o evento de clique nas miniaturas
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', changeMainImage);
    });

    // Carrossel para alternar automaticamente as imagens
    const carousel = document.querySelector('.carousel');
    let index = 0;
    const images = document.querySelectorAll('.carousel-image');

    // Função para mover para a próxima imagem do carrossel
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
