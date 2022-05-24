import chef from './images/chef.png';

function createHome() {
    const home = document.createElement('div');
    const about = document.createElement('p');
    const description = document.createElement('p');
    const img = new Image();
    
    home.setAttribute('id', 'home');
    
    about.textContent = 'Best and freshest ingredients. \r\n Friendly and knowledgable staff. \r\n Elegant ambience.';
    
    description.textContent = 'Chef Becky Satterfield';
    
    img.src = chef;
    img.alt = "Becky Satterfield";
    
    home.appendChild(about);
    home.appendChild(img);
    home.appendChild(description);

    return home;
}

function renderHome() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createHome());
}

export default renderHome;


// const createPElement = (text) => {
//    let p = document.createElement('p');
//    p.textContent = text;

//    return { p };
// }