import './style.css';
import chef from './images/chef.png';

// All elements get appended to content element
const content = document.getElementById('content');

// Header elements
const header = document.createElement('div');
header.setAttribute('id', 'header');

const headerContent = document.createElement('div');

const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.textContent = `Satterfield's`;

const homeTab = document.createElement('h2');
homeTab.setAttribute('id', 'homeTab');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', (e) => {

});

const menuTab = document.createElement('h2');
menuTab.setAttribute('id', 'menuTab');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', (e) => {

});

const contactTab = document.createElement('h2');
contactTab.setAttribute('id', 'contactTab');
contactTab.textContent = 'Contact'
contactTab.addEventListener('click', (e) => {

});

header.appendChild(headerContent);
headerContent.appendChild(title);
headerContent.appendChild(homeTab);
headerContent.appendChild(menuTab);
headerContent.appendChild(contactTab);

// Body elements
const main = document.createElement('div');
main.setAttribute('id', 'main');

const home = document.createElement('div');
home.setAttribute('id', 'home');

const about = document.createElement('p');
about.textContent = 'Best and freshest ingredients. \r\n Friendly and knowledgable staff. \r\n Elegant ambience.';

const img = new Image();
img.src = chef;
img.setAttribute('alt', 'Becky Satterfield');

const description = document.createElement('p');
description.textContent = 'Chef Becky Satterfield';

home.appendChild(about);
home.appendChild(img);
home.appendChild(description);
main.appendChild(home);

// Footer elements
const footer = document.createElement('div');
footer.setAttribute('id', 'footer');

const tele = document.createElement('p');
tele.textContent = '(919) 919 - 9191';

const addr = document.createElement('p');
addr.textContent = '3161 Cahaba Heights Road, Birmingham, AL 35243';

footer.appendChild(tele);
footer.appendChild(addr);

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);
