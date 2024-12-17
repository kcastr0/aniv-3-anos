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
});
