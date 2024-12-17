// Efeito de máquina de escrever no subtítulo
const subtitleText = "Veja as imagens incríveis!";
let index = 0;
const subtitleElement = document.getElementById('subtitle');

function typeSubtitle() {
    if (index < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(index);
        index++;
        setTimeout(typeSubtitle, 100);
    }
}

window.onload = typeSubtitle;

// Atualizar a imagem principal ao clicar nas miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) => {
        const newSrc = event.target.src;
        mainImage.src = newSrc; // Atualiza a imagem principal
        thumbnails.forEach((thumb) => thumb.classList.remove('active')); // Remove a classe "active" das miniaturas
        event.target.classList.add('active'); // Adiciona a classe "active" à miniatura clicada
    });
});
