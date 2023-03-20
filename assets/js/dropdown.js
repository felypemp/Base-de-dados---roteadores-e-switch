const btnMenu = document.querySelector('.dropDown');
const menuMobile = document.querySelector('#menuMobile');

const menu = btnMenu.addEventListener('click', () => {
    if (menuMobile.style.display === 'block'){
        menuMobile.style.display = 'none';
    } else {
        menuMobile.style.display = 'block';
    }
})