'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');
const links = document.querySelectorAll('#links-div a');


links.forEach(link => link.addEventListener('click', () => {
    if (hamburgerBtn.ariaExpanded) {
        hamburgerBtn.click();
    }
}))

document.documentElement.addEventListener('click', () => {
    if (hamburgerBtn.ariaExpanded) {
        hamburgerBtn.click();
    }
});