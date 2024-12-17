// Definindo o texto do subtítulo
const subtitleText = "Momentos que merecem ser lembrados";

// Função para animar a escrita do subtítulo
function typeWriter(element, text, i, callback) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i, callback), 100); // Controla a velocidade da digitação
    } else {
        callback();
    }
}

// Quando a página carregar, o efeito é acionado
document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.getElementById("subtitle");
    typeWriter(subtitle, subtitleText, 0, () => {});
});

// Função para alterar a imagem principal ao clicar nas miniaturas
function setActiveImage(event) {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    // Remove a classe 'active' das miniaturas anteriores
    thumbnails.forEach(thumbnail => thumbnail.classList.remove("active"));

    // Adiciona a classe 'active' à miniatura clicada
    event.target.classList.add("active");

    // Atualiza a imagem principal
    mainImage.src = event.target.src;
}

// Adiciona eventos de clique nas miniaturas
document.querySelectorAll(".thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", setActiveImage);
});
