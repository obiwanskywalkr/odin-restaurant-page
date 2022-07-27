import chef from '/src/images/chef.png';
import '/src/style.css';

function createHome() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const about = document.createElement('p');
    about.textContent = 'Best and freshest ingredients. \r\n Friendly and knowledgable staff. \r\n Elegant ambience.';

    const description = document.createElement('p');
    description.textContent = 'Chef Becky Satterfield';

    const img = new Image();
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