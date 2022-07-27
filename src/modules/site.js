import renderHome from '/src/modules/home.js';
import '/src/style.css';

function renderSite() {
    // All elements get appended to content element
    const content = document.getElementById('content');

    (function createHeader() {
        const header = document.createElement('div');
        header.setAttribute('id', 'header');

        // Container for flexbox
        const headerContent = document.createElement('div');
        
        // Logo
        const title = document.createElement('h1');
        title.setAttribute('id', 'title');
        title.textContent = `Satterfield's`;

        // Home, Menu, and Contact navigation tabs
        const homeTab = document.createElement('h2');
        homeTab.setAttribute('id', 'homeTab');
        homeTab.classList.add('tab');
        homeTab.textContent = 'Home';

        const menuTab = document.createElement('h2');
        menuTab.setAttribute('id', 'menuTab');
        menuTab.classList.add('tab');
        menuTab.textContent = 'Menu';

        const contactTab = document.createElement('h2');
        contactTab.setAttribute('id', 'contactTab');
        contactTab.classList.add('tab');
        contactTab.textContent = 'Contact'
            
        content.appendChild(header);
        header.appendChild(headerContent);
        headerContent.appendChild(title);
        headerContent.appendChild(homeTab);
        headerContent.appendChild(menuTab);
        headerContent.appendChild(contactTab);
    })();

    // Create body and append to content
    (function createMain() {
        const main = document.createElement('div');
        main.setAttribute('id', 'main');

        content.appendChild(main);
    })();

    //Create footer and append to content
    (function createFooter() {
        const footer = document.createElement('div');
        footer.setAttribute('id', 'footer');

        const tele = document.createElement('p');
        tele.textContent = '(919) 919 - 9191';

        const addr = document.createElement('p');
        addr.textContent = '3161 Cahaba Heights Road, Birmingham, AL 35243'; 

        content.appendChild(footer);
        footer.appendChild(tele);
        footer.appendChild(addr);
    })();

    // Initialize by loading home tab
    renderHome();
    homeTab.classList.add('active');
}

export default renderSite;