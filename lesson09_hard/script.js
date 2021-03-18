'use strict'

const getDayToPage = () => {
    const wrapper = document.querySelector('.wrapper');

    const getDate = () => {
        let date = new Date();

        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            weekDay: date.getDay(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    };

    let today = getDate();

    const filterDates = () => {
        const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
              months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const getFilterData = () => {
            let weekDay = weekDays[today.weekDay - 1],
                month = months[today.month];

            return {
                weekDay,
                month
            };
        };

        let filterDataToday = getFilterData();

        return filterDataToday;
    };



    const toPage = () => {
        let filterDate = filterDates();

        //Проверка числа

        const checkNumber = num => {
            let changedNum;

            if (num.toString().length < 2) {
                changedNum = `0${num}`
            } else {
                changedNum = num;
            };

            return changedNum;
        };

        //Проверка склонения

        const checkDeclination = (isHour = false, isMin = false, isSec = false) => {
            let hour = today.hour.toString().slice(-2),
                minute = today.minute.toString().slice(-2),
                second = today.second.toString().slice(-2),
                ending;

            // Для часов

            if (isHour) {
                switch (+hour) {
                    case 1: case 21:
                        ending = '';
                        break;
                    case 2: case 3: case 4: case 22: case 23:
                        ending = 'а';
                        break;
                    case 0: case 5: case 6: case 7: case 8: case 9:
                    case 10: case 11: case 12: case 13: case 14: case 15:
                    case 16: case 16: case 18: case 19: case 20:
                        ending = 'ов';
                        break;
                };
            };

            // Для минут

            if (isMin) {
                switch (+minute) {
                    case 0: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12:
                    case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20:
                    case 25: case 26: case 27: case 28: case 29: case 30: case 35: case 36:
                    case 37: case 38: case 39: case 40: case 45: case 46: case 47: case 48:
                    case 49: case 50: case 55: case 56: case 57: case 58: case 59:
                        ending = '';
                        break;
                    case 1: case 21: case 31: case 41: case 51:
                        ending = 'а';
                        break;
                    case 2: case 3: case 4: case 22: case 23: case 24: case 32: case 34:
                    case 42: case 43: case 44: case 52: case 53: case 54:
                        ending = 'ы';
                        break;
                };
            };

            // Для секунд

            if (isSec) {
                switch (+second) {
                    case 0: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12:
                    case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20:
                    case 25: case 26: case 27: case 28: case 29: case 30: case 35: case 36:
                    case 37: case 38: case 39: case 40: case 45: case 46: case 47: case 48:
                    case 49: case 50: case 55: case 56: case 57: case 58: case 59:
                        ending = '';
                        break;
                    case 1: case 21: case 31: case 41: case 51:
                        ending = 'а';
                        break;
                    case 2: case 3: case 4: case 22: case 23: case 24: case 32: case 34:
                    case 42: case 43: case 44: case 52: case 53: case 54:
                        ending = 'ы';
                        break;
                };
            }


            return ending;
        };

        //Первый вариант

        const firstVariant = () => {
            wrapper.innerHTML = `
                <span class="today">
                    Сегодня ${filterDate.weekDay}, ${today.day} ${filterDate.month} ${today.year} года, 
                    ${today.hour} час${checkDeclination(true)} ${today.minute} минут${checkDeclination(false, true)} 
                    ${today.second} секунд${checkDeclination(false, false, true)}
                </span>
            `;
        };

        firstVariant();

        //Второй вариант

        const secondVariant = () => {
            wrapper.innerHTML += `
            <br/>
            <span class="today-2">
                ${checkNumber(today.day)}.${checkNumber(today.month + 1)}.${today.year}
                 - ${checkNumber(today.hour)}:${checkNumber(today.minute)}:${checkNumber(today.second)}
            </span>`;
        }

        secondVariant();
    };

    toPage();
};

setInterval(getDayToPage, 1000);