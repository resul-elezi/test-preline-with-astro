'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');
const links = document.querySelectorAll('#links-div a')

function setAriaExpandedFalse() {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}