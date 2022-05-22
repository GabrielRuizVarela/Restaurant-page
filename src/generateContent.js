import createAndAppend from "./createAndAppend";

function generateContent(content){
    // ---Header--- //
    const header = document.createElement('header');
    content.appendChild(header);
    // createAndAppend(createAndAppend(header, 'a','','home'), 'div', 'Home');
    // createAndAppend(createAndAppend(header, 'a'), 'div', 'Menu', 'menu');
    // createAndAppend(createAndAppend(header, 'a'), 'div', 'About', 'about');
    createAndAppend(header, 'div', 'Home', 'home');
    createAndAppend(header, 'div', 'Menu', 'menu');
    createAndAppend(header, 'div', 'About', 'about');
    header.querySelectorAll('a').forEach(a=>a.href='');
    // ---Main--- //
    createAndAppend(content, 'div', '', 'main');
    // ---Footer--- //
    createAndAppend(createAndAppend(content,'a'), 'footer', 'By Gabriel Ruiz Varela');
    document.querySelector('#content>a').href = 'https://github.com/GabrielRuizVarela';
}

export default generateContent;
