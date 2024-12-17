// Função para trocar a imagem principal quando a miniatura for clicada
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});
