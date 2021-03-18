
    'use strict';

    const toPlay = () => {
        const getNumber = (min, max) => {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        };

        const randomNumber = getNumber(0, 100);
        let tryCounter = 10;
        
        const checkNumber = () => {
            const userNumber = prompt('Введите любое число от 0 до 100', 53);
            
            switch (true) {
                case (userNumber === null):
                    alert('Игра окончена!');
                    break;
                case (userNumber === ''):
                    alert('Не оставляйте поле пустым');
                    checkNumber();
                    break;
                case (tryCounter < 1):
                    const playCase = confirm('Попытки закончились, хотите сыграть еще?');

                    if (playCase) {
                        tryCounter = 10;
                        checkNumber();
                    } else {
                        alert('Игра окончена!');
                    };

                    break;
                case (+userNumber > 100):
                    alert('Введите число в указанном диапазоне!');
                    checkNumber();
                    break;
                case isNaN(+userNumber):
                    alert('Введите число в верном формате');
                    checkNumber();
                    break;
                case (+userNumber > randomNumber):
                    tryCounter--;
                    alert(`Загаданное число меньше, осталось попыток ${tryCounter}`);
                    checkNumber();
                    break;
                case (+userNumber < randomNumber):
                    tryCounter--;
                    alert(`Загаданное число больше, осталось попыток ${tryCounter}`);
                    checkNumber();
                    break;
                case (+userNumber === randomNumber):
                    const congratulations = confirm('Поздравляю, Вы угадали! Хотите сыграть еще');

                    if (congratulations) {
                        tryCounter = 10;
                        checkNumber();
                    } else {
                        alert('Игра окончена!');
                    };

                    break;
            }
        };

        checkNumber();
    };

    toPlay();