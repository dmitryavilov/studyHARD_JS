'use strict';

const arr = ['233331', '42123' , '63123', '84112312', '11233', '42111', '532322'];

const checkArr = () => {
    const wrapper = document.querySelector('.wrapper');
    let counter = 1;

    arr.forEach(item => {
        if (item[0] === '2' || item[0] === '4') {
            wrapper.innerHTML += `${counter}. ${item} <br/>`;
            counter++;
        }
    });
};

checkArr();

const checkNum = () => {
    const wrapper = document.querySelector('.wrapper-2');
    
    for (let i = 2; i <= 100; i++) {
        let flag = 1;
    
        for (let j = 2; (j <= i/2) && (flag === 1); j = j + 1) {
            if (i % j === 0) {
                flag = 0;
            };
        };
    
        if (flag === 1) wrapper.innerHTML += `${i} - делители 1 и ${i} <br/>`;
    }
}

checkNum();
