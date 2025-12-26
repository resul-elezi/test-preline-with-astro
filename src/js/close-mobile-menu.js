'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');
const menu = document.querySelector('.hs-collapse');
const links = document.querySelectorAll('#links-div a');


links.forEach(link => link.addEventListener('click', () => {
    if (hamburgerBtn.getAttribute('aria-expanded') === 'true') {
        hamburgerBtn.click();
    }
}))

document.documentElement.addEventListener('click', (e) => {
    if (hamburgerBtn.getAttribute('aria-expanded') === 'true') {
        if (e.target !== hamburgerBtn && !menu.contains(e.target))
            hamburgerBtn.click();
    }
});