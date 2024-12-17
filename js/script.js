// Selecionando todas as miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');

// Criando a função de exibição ampliada
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Aqui você pode adicionar a funcionalidade de ampliação ou outra interação.
        // Vamos adicionar uma ação simples que exibe o nome da imagem ao clicar.
        alert(`Você clicou na imagem: ${thumbnail.alt}`);
    });
});
