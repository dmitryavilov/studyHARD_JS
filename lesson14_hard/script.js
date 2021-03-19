window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    class DomElement {
        constructor (selector, height, width, bg, fontSize, text) {
            this.selector = selector;
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.text = text;
        }

        createElement() {
            let elem = document.createElement('div');

            if (this.selector[0] === '.') {
                elem.classList.add(this.selector.slice(1));
            } else {
                elem.id = this.selector.slice(1);
            };

            elem.style.cssText = `
                position: absolute;
                width: ${this.width};
                height: ${this.height};
                background-color: ${this.bg};
                font-size: ${this.fontSize};
            `;

            elem.textContent = this.text;

            return elem;
        }

        toPage() {
            document.body.insertAdjacentElement('afterbegin', this.createElement());
        }
    };

    const newElem = new DomElement('.hello-one', '50px', '50px', 'red', '15px', 'Hello');

    newElem.createElement();
    newElem.toPage();

    let top = 0,
        left = 0;

    document.addEventListener('keydown', e => {
        const elem = document.querySelector('div');
        let keyCode = e.keyCode;

        switch (keyCode) {
            case 37:
                left -= 10;
                elem.style.transform = `translate(${left}px, ${top}px)`;
                break;
            case 38:
                top -= 10;
                elem.style.transform = `translate(${left}px, ${top}px)`;
                break;
            case 39:
                left += 10;
                elem.style.transform = `translate(${left}px, ${top}px)`;
                break;
            case 40:
                top += 10;
                elem.style.transform = `translate(${left}px, ${top}px)`;
                break;
        }
    });

});