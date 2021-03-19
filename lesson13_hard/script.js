'use strict';

const changeBgColor = () => {
    const wrapper = document.querySelector('.wrapper'),
          btn = document.getElementById('changeBtn'),
          span = document.getElementById('color');

    const flexCenter = elem => {
        const styles = document.createElement('style');

        styles.textContent = `
            .${elem} {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        `;

        document.head.appendChild(styles);
    };

    flexCenter('wrapper');    

    const getRandomColor = () => {
        const random = '#' + Math.floor(Math.random() * 16777215).toString(16);

        return random;
    };

    btn.addEventListener('click', () => {
        const color = getRandomColor();

        document.body.style.backgroundColor = color;
        span.textContent = color;
    });
};

changeBgColor();