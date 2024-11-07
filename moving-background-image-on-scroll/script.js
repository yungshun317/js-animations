let pattern = document.querySelector('.background');

window.addEventListener('scroll', () => {
    pattern.style.backgroundPosition = window.scrollY + 'px';
});