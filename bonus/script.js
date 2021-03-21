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

            users.forEach((item, index) => {
                usersWrapper.innerHTML += `
                <div data-num="${index}" class="user">
                    <p>
                        Имя и Фамилия: ${item.fullName}, Дата регистрации: ${item.date.day} ${item.date.month} ${item.date.year} г., 
                        ${item.date.hour}:${item.date.minute}:${item.date.second} <button class="delete-btn">Х</button>
                    </p> 
                </div>`;
            });
        };

        const getUsersToPage = () => {
            let users;

            if (localStorage.getItem('users') === null) {
                users = [];
            } else if (localStorage.getItem('users') === '[]') {
                usersWrapper.innerHTML = 'Пользователей пока что нет';
            } else {
                users = JSON.parse(localStorage.getItem('users'));
            };
            
            users.forEach((item, index) => {
                usersWrapper.innerHTML += `
                <div data-num="${index}" class="user">  
                    <p>
                        Имя и Фамилия: ${item.fullName}, Дата регистрации: ${item.date.day} ${item.date.month} ${item.date.year} г., 
                        ${item.date.hour}:${item.date.minute}:${item.date.second} <button class="delete-btn">Х</button>
                    </p> 
                </div>`;
            });
        };

        const deleteUser = e => {
            let users = JSON.parse(localStorage.getItem('users')),
                target = e.target;

            users.forEach((item, index) => {
                if (target.closest('.user').dataset.num == index) {
                    users[index] = null;

                    users = users.filter(x => {
                        x !== null;
                        return x;
                    });

                    users = JSON.stringify(users);
                    localStorage.setItem('users', users);
                    usersWrapper.innerHTML = '';

                    getUsersToPage();
                }
            });
        };

        const searchUser = e => {
            let users = JSON.parse(localStorage.getItem('users')),
                flag = false;
            const login = prompt('Введите логин'),
                  password = prompt('Введите пароль');

            users.forEach(item => {
                if (item.login === login && item.password === password) {
                    usersWrapper.innerHTML = '';
                    usersWrapper.innerHTML = `
                    <div class="user">  
                        <p>
                            Имя и Фамилия: ${item.fullName}, Дата регистрации: ${item.date.day} ${item.date.month} ${item.date.year} г., 
                            ${item.date.hour}:${item.date.minute}:${item.date.second}
                        </p> 
                    </div>`;
                    flag = true; 
                };
            });

            if (!flag) {
                alert('Пользователь не найден');
            };
        };

        regBtn.addEventListener('click', getNewUsers);
        usersWrapper.addEventListener('click', deleteUser);
        authBtn.addEventListener('click', searchUser);

        getUsersToPage();
    };

    interactionWithUser();
});