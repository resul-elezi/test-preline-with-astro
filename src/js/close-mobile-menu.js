'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');


function setAriaExpandedFalse() {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}