// Обработчик для первого маркера
document.querySelector('#animated-marker1').addEventListener('markerFound', function () {
    const backgroundMusic = document.querySelector('#background-music');
    if (backgroundMusic) {
        backgroundMusic.play();
    }

});


// Обработчики потери маркера
document.querySelector('#animated-marker1').addEventListener('markerLost', () => {
    const backgroundMusic = document.querySelector('#background-music');
    if (backgroundMusic) {
        backgroundMusic.pause();
    }
});

