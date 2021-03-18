'use strict'

const getDays = () => {
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
          wrapper = document.querySelector('.wrapper');

    const toPage = () => {
        week.forEach(item => {
            wrapper.innerHTML += `<li class="day">${item}</li>`
        });

        const getDate = () => {
            let date = new Date(),
                today = date.getDay();

            return today;
        };

        
        const emphasis = () => {
            const days = document.querySelectorAll('.day');
            
            days[5].style.fontStyle = 'italic';
            days[6].style.fontStyle = 'italic';
            days[getDate() - 1].style.fontWeight = 'bold';
            days[getDate() - 1].style.fontStyle = 'normal';
        };

        emphasis();

    };

    toPage();
};

getDays();