import createAndAppend from "./createAndAppend";
// import { mdiInstagram } from '@mdi/js';

function generateHome(home){
    const homeLeft = createAndAppend(home, 'div', '', 'home-left');
    createAndAppend(homeLeft, 'span', '', '');
    const homeText = createAndAppend(homeLeft, 'div', '', 'home-text');
    createAndAppend(homeText, 'h3', 'Welcome to')
    createAndAppend(homeText, 'h1', 'Prime House')
    createAndAppend(homeText, 'button', 'Menu')
    createAndAppend(homeLeft, 'span', '', 'horizontal-line');
    const homeIcons = createAndAppend(homeLeft, 'div', '', 'homeIcons');
    createAndAppend(createAndAppend(homeIcons,'a'),'span', '', '', 'iconify-inline').dataset.icon = 'akar-icons:instagram-fill';
    createAndAppend(createAndAppend(homeIcons,'a'),'span', '', '', 'iconify-inline').dataset.icon = 'akar-icons:facebook-fill';
    createAndAppend(createAndAppend(homeIcons,'a'),'span', '', '', 'iconify-inline').dataset.icon = 'akar-icons:whatsapp-fill';
    homeIcons.querySelectorAll('a').forEach(a=>a.href='');

    const homeRight = createAndAppend(home, 'div', '', 'home-right'); 
}

export default generateHome;