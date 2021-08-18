function contactCreator() {
    document.querySelector('.message-container').style.display = 'none';
    const menu = document.querySelector('.menu-container');
    if(menu) {
        menu.style.display = 'none';
    }
    
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';

    const number = document.createElement('span');
    number.textContent = '123456789';

    const adress = document.createElement('span');
    adress.textContent = '169 St Number 15-56';

    const image = document.createElement('img');
    image.className = 'imageUbication';
    image.src = '../dist/images/ubicacion.jpg';

    contactContainer.appendChild(number);
    contactContainer.appendChild(adress);
    contactContainer.appendChild(image);

    const homeBtn = document.querySelector('.nav-links').childNodes[0];
    const menuBtn = document.querySelector('.nav-links').childNodes[1];
    const contactBtn = document.querySelector('.nav-links').childNodes[2];
    homeBtn.addEventListener('click', () => {
        contactContainer.style.display = 'none';
        document.querySelector('.message-container').style.display = 'block';
    })
    menuBtn.addEventListener('click', () => {
        contactContainer.style.display = 'none';
        document.querySelector('.menu-container').style.display = 'grid';
    })
    contactBtn.addEventListener('click', () => {
        contactContainer.remove();
    })

    document.querySelector('.main-container').appendChild(contactContainer);

}



export {contactCreator}