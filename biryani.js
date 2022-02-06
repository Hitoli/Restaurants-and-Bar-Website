const navIconEl = document.querySelector('.menu');
const navCloseEl = document.querySelector('.nav-close');
const navlist = document.querySelector('.nav-list');
const navoverlay = document.querySelector('.nav-overlay');
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 12 - 0;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}



const navOpen = () => {
    navlist.classList.add('show');
    navoverlay.classList.add('active');
    navIconEl.classList.add('off');
    document.body.style = 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';

}
const navClose = () => {
    navlist.classList.remove('show');
    navoverlay.classList.remove('active');
    navIconEl.classList.remove('off');
    document.body.style = 'visibility:visible; height:initial; width:100%; overflow-x:hidden;';

}
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navoverlay.addEventListener('click', navClose);
