// ********** set date ************
// select span
const date = (document.getElementById('date').innerHTML =
    new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// add event listener
navBtn.addEventListener('click', () => {
    links.classList.add('show-links');
});
navClose.addEventListener('click', () => {
    links.classList.remove('show-links');
});

const singleLinks = document.querySelectorAll('.nav-link');
singleLinks.forEach((link) => {
    link.addEventListener('click', () => {
        links.classList.remove('show-links');
    });
});
