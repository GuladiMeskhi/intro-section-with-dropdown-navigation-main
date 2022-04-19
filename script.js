const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');


burger.addEventListener('click', () => {
    console.log(nav)
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-btn-x');
});

const arrow = document.getElementById('arrow');
const arrowSecond = document.getElementById('arrow-second');
const featuresDrop = document.querySelector('.features');
const companyDrop = document.querySelector('.company')

arrow.addEventListener('click', () => {
    featuresDrop.classList.toggle('feature-on');
    arrow.classList.toggle('arrow-down')
})

arrowSecond.addEventListener('click', (e) => {
    companyDrop.classList.toggle('company-on');
    arrowSecond.classList.toggle('arrow-down');
})