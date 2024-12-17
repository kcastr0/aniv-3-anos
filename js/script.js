// JavaScript para o Álbum de Fotos
document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail"); // Seleciona todas as miniaturas
    const mainImage = document.querySelector(".main-image-container img"); // Seleciona a imagem principal

    // Função para verificar se uma imagem foi carregada corretamente
    const verifyImageLoad = (imgElement, fallbackSrc) => {
        imgElement.onerror = () => {
            console.error(`Erro ao carregar a imagem: ${imgElement.src}`);
            imgElement.src = fallbackSrc; // Define uma imagem de fallback
        };
    };

    // Adiciona evento de clique para cada miniatura
    thumbnails.forEach((thumbnail) => {
        verifyImageLoad(thumbnail, "images/fallback.jpeg"); // Verifica as miniaturas

        thumbnail.addEventListener("click", () => {
            // Atualiza a imagem principal para corresponder à miniatura clicada
            mainImage.src = thumbnail.src;

            // Remove a classe 'active' de todas as miniaturas
            thumbnails.forEach((thumb) => thumb.classList.remove("active"));

            // Adiciona a classe 'active' à miniatura clicada
            thumbnail.classList.add("active");
        });
    });

    // Verifica a imagem principal ao carregar
    if (thumbnails.length > 0) {
        verifyImageLoad(mainImage, "images/fallback.jpeg");
        thumbnails[0].click(); // Define a primeira miniatura como ativa
    }
});
