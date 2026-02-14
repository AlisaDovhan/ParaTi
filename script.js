document.addEventListener('DOMContentLoaded', () => {

    let noButtonState = 0;

    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    const subtext = document.getElementById('subtext');
    const question = document.getElementById('question');
    const gifContainer = document.getElementById('gifContainer');

    const happyGifs = [
        'happyGifContainer',
        'happyGifContainer2',
        'happyGifContainer3',
        'happyGifContainer4'
    ];

    const sadGifs = [
        'sadGifContainer',
        'sadGifContainer1',
        'sadGifContainer2'
    ];

    const messages = [
        '¡Oh no! ¿Estás seguro?',
        'Estás seguro de verdad, ¿eh?',
        '¿Eres positivo?',
        'Di que si por favor?',
        'Solo piensa en ello',
        'Si dices que no estaré muy triste',
        'Estaré muy triste',
        'Estaré muy muy muy triste',
        'Estaré muy muy muy muy triste.',
        'Vale, ya dejaré de preguntar...',
        'Es broma, POR FAVOR DI SÍ',
        'Estaré muy muy muy muy muy triste.',
        'Estás rompiendo mi corazón :(',
        'NO... ya di que si',
        'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii',
        'Por favooooooor'
    ];

    function showGifsSequentially(gifArray, interval = 1000) {
        gifArray.forEach((id, index) => {
            setTimeout(() => {
                document.querySelectorAll('.gif').forEach(g => g.style.display = 'none');
                const gif = document.getElementById(id);
                if (gif) gif.style.display = 'block';
            }, interval * index);
        });
    }

    // Кнопка SI
    siBtn.addEventListener('click', () => {

        // Сховати текст під питанням
        if (subtext) subtext.style.display = 'none';

        gifContainer.style.display = 'none';
        question.style.display = 'none';
        siBtn.style.display = 'none';
        noBtn.style.display = 'none';

        document.body.classList.add('bg-green');

        showGifsSequentially(happyGifs, 1000);
    });

    // Кнопка NO
    noBtn.addEventListener('click', () => {

        gifContainer.style.display = 'none';

        showGifsSequentially(sadGifs, 800);

        noBtn.innerHTML = messages[noButtonState] || '¡Por favor!';

        siBtn.style.transform = `scale(${1 + noButtonState * 0.1})`;

        noButtonState++;
    });

});
