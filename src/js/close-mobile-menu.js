'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');
const links = document.querySelectorAll('#links-div a');
// hamburgerBtn.addEventListener('click', () => {
//     if ('aria-expanded') {
//         console.log('menu offen');
//     }
// })

links.forEach(link => link.addEventListener('click', (e) => {
    if ('aria-expanded') {
        hamburgerBtn.click();
    }
}))