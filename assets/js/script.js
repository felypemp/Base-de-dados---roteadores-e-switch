const btnEdd = document.querySelector('#btnEdd');
const btnMk = document.querySelector('#btnMk');

btnMk.addEventListener('click', () => {
    document.querySelector('.cardMk').classList.remove('esconder')
    document.querySelector('.cardEdd').classList.add('esconder')
})

btnEdd.addEventListener('click', () => {
    document.querySelector('.cardEdd').classList.remove('esconder')
    document.querySelector('.cardMk').classList.add('esconder')
})