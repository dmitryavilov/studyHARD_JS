window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const interactionWithUser = () => {
        const authBtn = document.getElementById('auth'),
              regBtn = document.getElementById('reg'),
              usersWrapper = document.getElementById('users');
        
        const createNewUser = () => {
            const fullName = prompt('Введите свои Имя и Фамилию', 'Иван Иванов'),
                  login = prompt('Введите будущий логин', 'login'),
                  password = prompt('Введите будущий пароль'),
                  date = new Date();

            const filterMonth = () => {
                const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
                'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
                let actuallyMonth;

                actuallyMonth = months[date.getMonth()];

                return actuallyMonth;
            };

            return {
                fullName,
                login,
                password,
                date: {
                    year: date.getFullYear(),
                    day: date.getDate(),
                    month: filterMonth(),
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }
            }
        };

        const addToLocalStorage = () => {
            const userData = createNewUser();
            let users;

            if (localStorage.getItem('users') === null) {
                users = [];
            } else {
                users = JSON.parse(localStorage.getItem('users'));
            }
            users.push(userData);

            users = JSON.stringify(users);
            localStorage.setItem('users', users);

            return JSON.parse(localStorage.getItem('users'));
        };

        const getNewUsers = () => {
            const users = addToLocalStorage();

            usersWrapper.innerHTML = '';

            users.forEach(item => {
                usersWrapper.innerHTML += `
                <li>
                    Имя и Фамилия: ${item.fullName}, Дата регистрации: ${item.date.day} ${item.date.month} ${item.date.year} г., 
                    ${item.date.hour}:${item.date.minute}:${item.date.second}
                </li>`;
            });
        };

        const getUsersToPage = () => {
            let users;

            if (localStorage.getItem('users') === null) {
                users = [];
            } else {
                users = JSON.parse(localStorage.getItem('users'));
            };
            
            users.forEach(item => {
                usersWrapper.innerHTML += `
                <li>
                    Имя и Фамилия: ${item.fullName}, Дата регистрации: ${item.date.day} ${item.date.month} ${item.date.year} г., 
                    ${item.date.hour}:${item.date.minute}:${item.date.second}
                </li>`;
            });
        };

        regBtn.addEventListener('click', getNewUsers);

        getUsersToPage();
        
    }

    interactionWithUser();
});