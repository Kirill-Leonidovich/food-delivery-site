// burger
document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})

document.querySelector('.header__reset').addEventListener('click', () => {
    document.querySelector('.header__input').value = null;
});

document.querySelector('.header__input').addEventListener('click', () => {
    document.querySelector('.header__submit').classList.toggle('focus');
    document.querySelector('.header__reset').classList.toggle('focus');
});