let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        let scrollDistance = window.scrollY;
        let sectionDistance = section.offsetTop;

        if (scrollDistance >= sectionDistance - 150) {
            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });
};