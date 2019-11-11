//HIDE & SHOW

const hideSection = id => document.getElementById(id).classList.add('hide');
const showSection = id => document.getElementById(id).classList.remove('hide');

//BUTTON

const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');

//MENU

const menu = document.getElementById('mobile-menu-list');

//FUNCTIONS

showMenu = () => {
    showSection('menu');
}

menuBtn.addEventListener('click', showMenu);

closeMenu = () => {
    hideSection('menu');
}

closeBtn.addEventListener('click', closeMenu);