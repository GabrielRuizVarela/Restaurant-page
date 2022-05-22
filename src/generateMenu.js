import createAndAppend from "./createAndAppend";

// const plate, description, price;
const plate = [
    'Crispy Brick Chicken',
    'Double Cut Lamb Chops',
    '10oz Double Wagyu Cheeseburger',
    'Prime Rib French Dip',
    'Honey Peppered Ora King Salmon',
    'Bone-In Filet Mignon'
];

const description = [
    'slow roasted sweet garlic, crushed oregano, natural jus',
    'roasted garlic, rosemary and a few olives',
    'griddled and pressed snake river farms wagyu with american cheese, pickles, and dijonnaise',
    'swiss cheese, natural jus',
    'aromatic brown butter & lemon',
    '16oz, bearnaise sauce, steak salt',
];

const price = ['$37', '$75', '$35', '$38', '$45', '$89'];


function generateMenu(main){
    createAndAppend(main, 'h2', 'Prime House', 'menu-name');
    createAndAppend(main, 'h1', 'Menu', 'menu-title');
    const menu = createAndAppend(main, 'div', '', 'menu-container');
    for (let i = 0; i < price.length; i++) {
        let menuItem = createAndAppend(menu, 'div', '', '', 'menu-item');
        createAndAppend(menuItem, 'div', plate[i], '', 'plate');
        createAndAppend(menuItem, 'div', description[i], '', 'description');
        createAndAppend(menuItem, 'div', price[i], '', 'price');
        createAndAppend(menuItem, 'div', '');
    }
    createAndAppend(main,'div', '');
}

export default generateMenu;