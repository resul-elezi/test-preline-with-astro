'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');
const links = document.querySelectorAll('#links-div a');


links.forEach(link => link.addEventListener('click', () => {
    if ('aria-expanded' === 'true') {
        hamburgerBtn.click();
    }
}))

document.documentElement.addEventListener('click', () => {
    if ('aria-expanded' === 'true') {
        hamburgerBtn.click();
    }
});