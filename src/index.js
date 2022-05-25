import renderSite from './site.js';
import renderHome from './home.js';
import renderMenu from './menu.js'
import renderContact from './contact.js'

renderSite();

const homeTab = document.getElementById('homeTab');
homeTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveTab(homeTab);
    renderHome();
});

const menuTab = document.getElementById('menuTab');
menuTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveTab(menuTab);
    renderMenu();
});

const contactTab = document.getElementById('contactTab');
contactTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveTab(contactTab);
    renderContact();
});

function setActiveTab(tab) {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
        if (tab != this) {
            tab.classList.remove('active');
        }
    });

    tab.classList.add('active');
}