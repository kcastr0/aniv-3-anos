// Selecionar elementos
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

// Adicionar evento de clique nas miniaturas
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        // Atualizar a imagem principal
        const newImage = this.getAttribute('data-image');
        mainImage.src = newImage;

        // Marcar a miniatura ativa
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});
