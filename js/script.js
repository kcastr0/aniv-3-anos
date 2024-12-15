let currentIndex = 0;

function moveSlide(step) {
    const images = document.querySelectorAll('.carrossel img');
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.querySelector('.carrossel').style.transform = `translateX(-${currentIndex * 100}%)`;
}
