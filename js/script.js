// Função para gerar partículas dinâmicas
function generateParticles() {
    const container = document.getElementById('particle-container');
    const numParticles = 50; // Número de partículas

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        // Definindo a posição e animação das partículas aleatoriamente
        particle.style.left = `${Math.random() * 100}%`; 
        particle.style.animationDuration = `${Math.random() * 4 + 2}s`; // Aleatório entre 2s e 6s
        particle.style.animationDelay = `${Math.random() * 3}s`; // Aleatório entre 0s e 3s
        container.appendChild(particle);
    }
}

// Chama a função para gerar as partículas quando a página for carregada
window.onload = function() {
    generateParticles();
};

// Função para mudar a imagem principal quando uma miniatura é clicada
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}
