import chef from './images/chef.png';

function createMenu() {
    const home = document.createElement('div');
    const about = document.createElement('p');
    const description = document.createElement('p');
    const img = new Image();
    
    home.setAttribute('id', 'home');
    
    about.textContent = 'Best and freshest ingredients. \r\n Friendly and knowledgable staff. \r\n Elegant ambience.';
    
    description.textContent = 'test';
    
    img.src = chef;
    img.alt = "Becky Satterfield";
    
    home.appendChild(about);
    home.appendChild(img);
    home.appendChild(description);

    return home;
}

function renderMenu() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createMenu());
}

export default renderMenu;


// const createPElement = (text) => {
//    let p = document.createElement('p');
//    p.textContent = text;

//    return { p };
// }