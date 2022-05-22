import generateContent from './generateContent';
import generateHome from './generateHome';
import generateMenu from './generateMenu';
import generateAbout from './generateAbout';
import './style.css';


const content = document.querySelector('#content');
generateContent(content);
const main = document.querySelector('#main')
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

// homeSelected();
aboutSelected();

home.addEventListener('click', homeSelected);
menu.addEventListener('click', menuSelected);
about.addEventListener('click', aboutSelected);


// 
function homeSelected(){
    main.innerHTML='';
    main.classList.remove('menu');
    main.classList.remove('about');
    generateHome(main);
    main.classList.add('home');
    let menuButton = document.querySelector('button');
    menuButton.addEventListener('click', menuSelected);
};

function menuSelected(){
    let menuButton = document.querySelector('button');
    if(menuButton){
        menuButton.removeEventListener('click',menuSelected);
    }
    main.innerHTML='';
    main.classList.remove('home');
    main.classList.remove('about');
    generateMenu(main);
    main.classList.add('menu');
};

function aboutSelected(){
    let menuButton = document.querySelector('button');
    if(menuButton){
        menuButton.removeEventListener('click',menuSelected);
    }
    main.innerHTML='';
    main.classList.remove('home');
    main.classList.remove('menu');
    generateAbout(main);
    main.classList.add('about');
};