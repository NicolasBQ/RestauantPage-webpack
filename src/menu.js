function menuCreator() {
    document.querySelector('.message-container').style.display = 'none';
    const contact = document.querySelector('.contact-creator');
    if(contact) {
        contact.style.display = 'none';
    }

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    
    menuContainer.appendChild(menuElements('Burguer', '3,99$', '../dist/images/hamburguer.svg'));
    menuContainer.appendChild(menuElements('Pizza', '5,99$', '../dist/images/pizza.svg'));
    menuContainer.appendChild(menuElements('Lasagna', '6,99$', '../dist/images/lasagna.svg'));
    menuContainer.appendChild(menuElements('Wok', '6,99$', '../dist/images/wok.svg'));
    menuContainer.appendChild(menuElements('Sandwich', '4,99$', '../dist/images/sandwich.svg'));
    menuContainer.appendChild(menuElements('Salad', '6,99$', '../dist/images/salad.svg'));

    
    
    const homeBtn = document.querySelector('.nav-links').childNodes[0];
    const menuBtn = document.querySelector('.nav-links').childNodes[1];
    const contactBtn = document.querySelector('.nav-links').childNodes[2];
    homeBtn.addEventListener('click', () => {
        menuContainer.style.display = 'none';
        document.querySelector('.message-container').style.display = 'block';
    })
    contactBtn.addEventListener('click', () => {
        menuContainer.style.display = 'none';
        document.querySelector('.contact-container').style.display = 'flex'
    })
    menuBtn.addEventListener('click', () => {
        menuContainer.remove();
    })


    document.querySelector('.main-container').appendChild(menuContainer);
}

function menuElements(description, price, image) {
    const element = document.createElement('div');
    element.className = 'restaurant-element';

    const imageSpace = document.createElement('img');
    imageSpace.src = image;
    imageSpace.className = 'image';

    const elementPrice = document.createElement('span');
    const elementDescription = document.createElement('span');
    elementPrice.textContent = price;
    elementDescription.textContent = description;

    

    element.appendChild(imageSpace);
    element.appendChild(elementPrice);
    element.appendChild(elementDescription);

    return element
}



export { menuCreator };