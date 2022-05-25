import currentMenu from './images/menu.png';
import './style.css';

function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    
    const img = new Image();
    img.src = currentMenu;
    img.alt = "Menu";
    
    menu.appendChild(img);

    return menu;
}

function renderMenu() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createMenu());
}

export default renderMenu;