'use strict';

const lang = prompt('Введите язык', 'ru'),
      daysRu = `
        <ul class="days">
            <li class="day">Понедельник</li>
            <li class="day">Вторник</li>
            <li class="day">Среда</li>
            <li class="day">Четверг</li>
            <li class="day">Пятница</li>
            <li class="day">Суббота</li>
            <li class="day">Воскресенье</li>
        </ul>
      `,
      daysEn = `
        <ul class="days">
            <li class="day">Sunday</li>
            <li class="day">Monday</li>
            <li class="day">Tuesday</li>
            <li class="day">Wednesday</li>
            <li class="day">Thursday</li>
            <li class="day">Friday</li>
            <li class="day">Saturday</li>
        </ul>
      `;

const toDay = () => {
    const wrapper = document.querySelector('.wrapper');

    const withIf = () => {
         if (lang === 'ru') {
            wrapper.innerHTML = daysRu;
        } else {
            wrapper.innerHTML = daysEn;
        }
    }

    const withSwitch = () => {
        switch (lang) {
            case 'ru':
                wrapper.innerHTML = daysRu;
                break;
            case 'en':
                wrapper.innerHTML = daysEn;
                break;
        };
    };

    const withTernary = () => {
        const whatLang = lang === 'ru' ? ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        : 
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        wrapper.innerHTML = whatLang.join(', ');
    }

    withTernary();
};

toDay();

