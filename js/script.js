<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site com Imagens e Música</title>
    <link rel="stylesheet" href="css/style.css"> <!-- Link para o arquivo CSS -->
</head>
<body>
    <h1>Bem-vindo ao meu site!</h1>

    <!-- Carrossel de Imagens -->
    <div class="carousel">
        <div class="arrow left">&#8592;</div>
        <div class="image-container">
            <img src="images/aniv_ayrton.jpeg" alt="Imagem 1" class="image" width="500px">
            <img src="images/natal_2.jpeg" alt="Imagem 2" class="image" width="500px">
            <img src="images/ponta_negra.jpeg" alt="Imagem 3" class="image" width="500px">
        </div>
        <div class="arrow right">&#8594;</div>
    </div>

    <!-- Adicionando a música -->
    <audio controls>
        <source src="Liniker - TUDO.mp3" type="audio/mp3">
        Seu navegador não suporta a tag de áudio.
    </audio>

    <!-- Incluindo o script JavaScript -->
    <script src="js/script.js"></script>
</body>
</html>
