'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');
const menu = document.querySelector('.hs-collapse');
const links = document.querySelectorAll('#links-div a');

function setAriaExpandedFalse() {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}

function closeMenu() {
    menu.classList.remove('open');
    menu.addEventListener('click', e => e.stopPropagation());
}

links.forEach(link => link.addEventListener('click', () => {
    closeMenu();
    setAriaExpandedFalse();
}))