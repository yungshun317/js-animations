let video = document.querySelector('.video');
let thumbnails = document.querySelectorAll('ul li');

thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', () => {
        video.src = `video-${i + 1}.mp4`;
    });
});