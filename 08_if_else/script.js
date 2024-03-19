let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

const phraseRandom = Math.round( Math.random() * 4);
const answerPhrase = (phraseRandom === 1) ?
`Вы загадали число.. ${answerNumber }\n\u{1F629}` :
(phraseRandom === 2) ?
`Я думаю это... ${answerNumber }\n\u{1F914}` :
(phraseRandom === 3) ?
`Алгоритм сообщает, что это..  ${answerNumber }\n\u{1F44F}`:
(phraseRandom === 4) ?
`Я подозреваю, что это.. ${answerNumber }\n\u{1F914}` :
`Я думаю о.. ${answerNumber }\n\u{1F92F}`;
answerField.innerText = answerPhrase;

document.getElementById('btnRetry').addEventListener('click', function () {
   /* let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    let answerNumber  = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = true;
    
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
*/
location.reload();
   
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
            `Ой, это было неудачно..\n\u{1F629}` :
            (phraseRandom === 2) ?
            `Может стоит попробовать еще раз?\n\u{1F914}` :
            (phraseRandom === 3) ?
            `Думаю, это победа за вами!\n\u{1F44F}`:
            (phraseRandom === 4) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            `Я сдаюсь..\n\u{1F92F}`;
                


            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали число.. ${answerNumber }\n\u{1F629}` :
            (phraseRandom === 2) ?
            `Я думаю это... ${answerNumber }\n\u{1F914}` :
            (phraseRandom === 3) ?
            `Алгоритм сообщает, что это..  ${answerNumber }\n\u{1F44F}`:
            (phraseRandom === 4) ?
            `Я подозреваю, что это.. ${answerNumber }\n\u{1F914}` :
            `Я думаю о.. ${answerNumber }\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
            `Ой, это было неудачно..\n\u{1F629}` :
            (phraseRandom === 2) ?
            `Может стоит попробовать еще раз?\n\u{1F914}` :
            (phraseRandom === 3) ?
            `Думаю, это победа за вами!\n\u{1F44F}`:
            (phraseRandom === 4) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали число.. ${answerNumber }\n\u{1F629}` :
            (phraseRandom === 2) ?
            `Я думаю это... ${answerNumber }\n\u{1F914}` :
            (phraseRandom === 3) ?
            `Алгоритм сообщает, что это..  ${answerNumber }\n\u{1F44F}`:
            (phraseRandom === 4) ?
            `Я подозреваю, что это.. ${answerNumber }\n\u{1F914}` :
            `Я думаю о.. ${answerNumber }\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        const phraseRandom = Math.round( Math.random() * 4);
        const answerPhrase = (phraseRandom === 1) ?
        `Легко!..\n\u{1F629}` :
        (phraseRandom === 2) ?
        `Я всегда побеждаю)\n\u{1F914}` :
        (phraseRandom === 3) ?
        `Загадай что-то посложнее\n\u{1F44F}`:
        (phraseRandom === 4) ?
        `Я гений\n\u{1F914}` :
        `Я всегда отгадываю\n\u{1F92F}`;

        answerField.innerText = answerPhrase;


        gameRun = false;
    }
})


