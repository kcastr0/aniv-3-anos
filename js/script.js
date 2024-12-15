// Definindo o índice inicial da imagem
let currentIndex = 0;

// Função para mover o carrossel
function moveSlide(step) {
    const images = document.querySelectorAll('.carrossel img');
    const totalImages = images.length;

    // Atualizando o índice da imagem
    currentIndex = (currentIndex + step + totalImages) % totalImages;

    // Calculando o deslocamento do carrossel
    const offset = -currentIndex * 100;
    document.querySelector('.carrossel').style.transform = `translateX(${offset}%)`;
}

// Função para iniciar o carrossel automaticamente (opcional)
function autoSlide() {
    setInterval(() => {
        moveSlide(1); // Mover para a próxima imagem
    }, 3000); // Muda a imagem a cada 3 segundos
}

// Chama a função autoSlide se você quiser o carrossel automático
autoSlide();
