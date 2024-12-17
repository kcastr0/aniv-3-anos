// Selecionando todas as miniaturas e a imagem principal
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

// Criando a função de exibição ampliada
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Atualizando a imagem principal com a imagem clicada
        mainImage.src = thumbnail.src;
    });
});
