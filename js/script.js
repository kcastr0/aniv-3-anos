// Selecionando todas as miniaturas e a imagem principal
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

// Adicionando o evento de clique para cada miniatura
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Atualizando a imagem principal com a imagem da miniatura clicada
        mainImage.src = thumbnail.src;

        // Remover a classe "active" de todas as miniaturas
        thumbnails.forEach((thumb) => thumb.classList.remove('active'));

        // Adicionar a classe "active" na miniatura clicada
        thumbnail.classList.add('active');
    });
});
