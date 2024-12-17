// Selecionando todas as miniaturas e a imagem principal
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

// Função que altera a imagem principal
function changeMainImage(event) {
    // Atualizando a imagem principal com a imagem da miniatura clicada
    const newImage = event.target.getAttribute('data-image');
    mainImage.src = `images/${newImage}`;

    // Remover a classe 'active' de todas as miniaturas
    thumbnails.forEach((thumb) => thumb.classList.remove('active'));

    // Adicionar a classe 'active' na miniatura clicada
    event.target.classList.add('active');
}

// Adicionando o evento de clique para cada miniatura
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', changeMainImage);
});
