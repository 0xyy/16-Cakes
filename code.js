const slider = document.getElementById('slider');

const time = 3000;
let value = 0;

const startSlide = () => {
    slider.style.transform = `translateX(${value}%)`;
    value -= 33.15;
    if (value < -99.44) {
        value = 0;
    }
}

setInterval(startSlide, time);
// const icons = [...document.querySelectorAll('.social-media i')];
// const textIcon = [...document.querySelectorAll('.social-media span')];

const nav = document.querySelector('.nav');
const mainMsg = document.querySelector('.main-msg');

setTimeout(() => {
    nav.style.opacity = 1;
    mainMsg.style.opacity = 1;
}, 500);

// const globe = document.querySelector('.globe');
// globe.addEventListener('click', function () {
//     nav.style.display = 'none';
// })

// function showText(e) {
//     if (e.type == 'mouseover') {
//         console.log('in');

//     } else {
//         console.log('out');
//     }
// }


// ['mouseover', 'mouseout'].forEach(evt => {
//     icons.forEach(icon => icon.addEventListener(evt, showText));
// })