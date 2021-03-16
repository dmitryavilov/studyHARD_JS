'use strict';

const ask = prompt('Введите текст', '   Привет как дела, чо делаешь я сегодня поел, у тебя как делишки братишка    ');

const getInfo = str => {
    const wrapper = document.querySelector('.wrapper');

    const checkLength = data => {
        if (str.length > 30) {
            data = `${data.substring(0, 29)}...`
        }

        return data;
    };

    if (isNaN(str)) {
        str = str.match(/\S*\S/gi).join(' ');
        wrapper.innerHTML = checkLength(str);
    } else {
        alert(`${str} - не строка`);
    }
};

getInfo(ask);