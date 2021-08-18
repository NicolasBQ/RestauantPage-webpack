import {menuCreator} from './menu'
import {contactCreator} from './contact'

function headerCreator() {
    const header = document.createElement('header');
    header.appendChild(navCreator());
    return header;
}

function navCreator() {
    const nav = document.createElement('nav');

    const brandTitle = document.createElement('h1');
    brandTitle.textContent = 'VEGGIE';

    const navList = document.createElement('ul');
    navList.className = 'nav-links';
    multipleElements(navList, 'li', 3);
    const home = navList.childNodes[0];
    const menu = navList.childNodes[1];
    const contact = navList.childNodes[2];
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    contact.addEventListener('click', () => {
        contactCreator();
    })
    menu.addEventListener('click', () => {
        menuCreator();
    })

    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'toggleBtn';
    multipleElements(toggleBtn,'span', 3);
    toggleBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    })

    nav.appendChild(brandTitle);
    nav.appendChild(toggleBtn);
    nav.appendChild(navList);


    return nav   
}

function mainCreator() {
    const main = document.createElement('main');
    main.className = 'main-container';

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    const message = document.createElement('h1');
    message.textContent = 'TRY THE BEST VEGAN FOOD IN THE CITY';

    const button = document.createElement('button');
    button.className = 'order-button'
    button.textContent = 'Order Now!';
    button.addEventListener('click', () => {
        menuCreator();
    })

    main.appendChild(messageContainer);
    messageContainer.appendChild(message);
    messageContainer.appendChild(button);

    return main;
}

function multipleElements(parent, element, number) {
    for(let i = 0; i < number; i++) {
        parent.appendChild(document.createElement(`${element}`))
    }
}

function initialize() {
    const mainTag = document.getElementById('content');
    mainTag.appendChild(headerCreator());
    mainTag.appendChild(mainCreator());
}

export { initialize }