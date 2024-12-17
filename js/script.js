// Efeito de máquina de escrever no subtítulo
const subtitleText = "Bem-vindo ao meu álbum de fotos!";
let i = 0;

function typeSubtitle() {
    if (i < subtitleText.length) {
        document.getElementById('subtitle').innerHTML += subtitleText.charAt(i);
        i++;
        setTimeout(typeSubtitle, 100); // Ajuste a velocidade da digitação (100ms)
    }
}

typeSubtitle();
