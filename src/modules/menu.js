import cappellacci from '/src/images/cappellacci.png'
import scallops from '/src/images/scallops.png'
import filet from '/src/images/filet.png'
import beignets from '/src/images/beignets.png'
import dinnerMenu from '/src/menus/dinner-dessert.pdf'
import wineMenu from '/src/menus/wine.pdf'
import '/src/style.css'

let slideIndex = 1;

function createMenu() {

    const menuSlideshow = document.createElement('div');
    menuSlideshow.setAttribute('id', 'menuSlideshow');

    const cappellacciSlide = document.createElement('div');
    cappellacciSlide.classList.add('slides', 'fade');

    const cappellacciImg = new Image();
    cappellacciImg.src = cappellacci;
    cappellacciImg.alt = "Cappellacci";

    const scallopSlide = document.createElement('div');
    scallopSlide.classList.add('slides', 'fade');

    const scallopImg = new Image();
    scallopImg.src = scallops;
    scallopImg.alt = "Scallops";

    const filetSlide = document.createElement('div');
    filetSlide.classList.add('slides', 'fade');

    const filetImg = new Image();
    filetImg.src = filet;
    filetImg.alt = "Filet";

    const beignetSlide = document.createElement('div');
    beignetSlide.classList.add('slides', 'fade');

    const beignetImg = new Image();
    beignetImg.src = beignets;
    beignetImg.alt = "Beignets";

    cappellacciSlide.appendChild(cappellacciImg);
    scallopSlide.appendChild(scallopImg);
    filetSlide.appendChild(filetImg);
    beignetSlide.appendChild(beignetImg);

    menuSlideshow.appendChild(cappellacciSlide);
    menuSlideshow.appendChild(scallopSlide);
    menuSlideshow.appendChild(filetSlide);
    menuSlideshow.appendChild(beignetSlide);

    const previousSlide = document.createElement('a');
    previousSlide.classList.add('previous');
    previousSlide.textContent = "❮";
    previousSlide.addEventListener('click', () => {
        incrementSlides(-1);
    })

    menuSlideshow.appendChild(previousSlide);

    const nextSlide = document.createElement('a');
    nextSlide.classList.add('next');
    nextSlide.textContent = "❯";
    nextSlide.addEventListener('click', () => {
        incrementSlides(1);
    })

    menuSlideshow.appendChild(nextSlide)

    const dotsContainer = document.createElement('div');
    dotsContainer.setAttribute('id', 'dotsContainer');

    const dot1 = document.createElement('span');
    dot1.classList.add('dot');
    dot1.addEventListener('click', () => {
        currentSlide(1)
    });

    dotsContainer.appendChild(dot1);

    const dot2 = document.createElement('span');
    dot2.classList.add('dot');
    dot2.addEventListener('click', () => {
        currentSlide(2)
    });

    dotsContainer.appendChild(dot2);

    const dot3 = document.createElement('span');
    dot3.classList.add('dot');
    dot3.addEventListener('click', () => {
        currentSlide(3)
    });

    dotsContainer.appendChild(dot3);

    const dot4 = document.createElement('span');
    dot4.classList.add('dot');
    dot4.addEventListener('click', () => {
        currentSlide(4)
    });

    dotsContainer.appendChild(dot4);

    const viewMenus = document.createElement('div');
    viewMenus.setAttribute('id', 'viewMenus');

    const viewMenusHeader = document.createElement('p');
    viewMenusHeader.textContent = "View our current menus"

    const viewDinner = document.createElement('div');
    viewDinner.setAttribute('id', 'viewDinner');

    const viewDinnerButton = document.createElement('button');
    viewDinnerButton.classList.add('viewButton');

    const viewDinnerLink = document.createElement('a');
    viewDinnerLink.classList.add('viewLink');
    viewDinnerLink.href = dinnerMenu;
    viewDinnerLink.textContent = "Dinner Menu";

    const viewWine = document.createElement('div');
    viewWine.setAttribute('id', 'viewWine');

    const viewWineButton = document.createElement('button');
    viewWineButton.classList.add('viewButton');

    const viewWineLink = document.createElement('a');
    viewWineLink.classList.add('viewLink');
    viewWineLink.href = wineMenu;
    viewWineLink.textContent = "Wine Menu";

    viewDinnerButton.appendChild(viewDinnerLink);
    viewDinner.appendChild(viewDinnerButton);
    viewWineButton.appendChild(viewWineLink);
    viewWine.appendChild(viewWineButton);
    viewMenus.appendChild(viewMenusHeader);
    viewMenus.appendChild(viewDinner);
    viewMenus.appendChild(viewWine);
    menuSlideshow.appendChild(dotsContainer);
    menuSlideshow.appendChild(viewMenus);

    return menuSlideshow;
}

function renderMenu() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createMenu());
    autoSlides();
}

function incrementSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slides');
    let dots = document.querySelectorAll('.dot');

    if ( n > slides.length ) { slideIndex = 1 }
    if ( n < 1 ) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' activeDot', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' activeDot';
}

function autoSlides() {
    let slides = document.querySelectorAll('.slides');
    let dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' activeDot', '');
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' activeDot';

    setTimeout(autoSlides, 3000);
}

export default renderMenu