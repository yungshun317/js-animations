let sideOne = document.querySelector('.side-1');
let sideTwo = document.querySelector('.side-2');

window.addEventListener('scroll', () => {
    sideOne.style.left = -window.scrollY + 'px';
    sideTwo.style.left = window.scrollY + 'px';
});