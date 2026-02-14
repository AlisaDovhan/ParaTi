document.addEventListener('DOMContentLoaded', () => {
    let noButtonState = 0; // стан кнопки "No"
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');

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

    // Функція для показу gif по черзі
    function showGifsSequentially(gifArray, interval = 1000) {
        gifArray.forEach((id, index) => {
            setTimeout(() => {
                document.querySelectorAll('.gif').forEach(g => g.style.display = 'none');
                document.getElementById(id).style.display = 'block';
            }, interval * index);
        });
    }

    // Клік на "Sí"
    siBtn.addEventListener('click', () => {
        // Ховаємо стартовий gif
        document.getElementById('gifContainer').style.display = 'none';

        // Ховаємо питання та кнопки
        document.getElementById('question').style.display = 'none';
        siBtn.style.display = 'none';
        noBtn.style.display = 'none';

        // Змінюємо фон
        document.body.classList.add('bg-green');

        // Показуємо happy gifs по черзі
        showGifsSequentially(happyGifs, 1000);
    });

    // Клік на "No"
    noBtn.addEventListener('click', () => {
        // Ховаємо стартовий gif
        document.getElementById('gifContainer').style.display = 'none';

        // Показуємо sad gifs по черзі
        showGifsSequentially(sadGifs, 800);

        // Оновлюємо текст кнопки "No"
        noBtn.innerHTML = messages[noButtonState] || '¡Por favor!';

        // Збільшуємо кнопку "Sí"
        siBtn.style.transform = `scale(${1 + noButtonState * 0.1})`;

        noButtonState++;
    });
});
