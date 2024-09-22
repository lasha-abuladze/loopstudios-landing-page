`use strict`;


const navigationUl = document.querySelector(`.navigation-ul`);
const navigationsLi = document.querySelectorAll(`.navigation-li`);
const hamburgerBtn = document.querySelector(`.hamburger-btn`);
const closeBtn = document.querySelector(`.close-btn`);





hamburgerBtn.addEventListener(`click`, () => {

    navigationUl.classList.remove(`display-none`);
    navigationUl.classList.add(`open-menu`);
    navigationUl.classList.remove(`close-menu`);
    
    closeBtn.classList.toggle(`display-none`);
    hamburgerBtn.classList.toggle(`display-none`);

    navigationsLi.forEach((el, i) => {
        setTimeout(() => 
        el.style.transform = `translateX(0px)`,
        Number(`${i}00`));
    })
});


closeBtn.addEventListener(`click`, () => {
    navigationUl.classList.remove(`open-menu`);
    navigationUl.classList.add(`close-menu`);

    closeBtn.classList.toggle(`display-none`);
    hamburgerBtn.classList.toggle(`display-none`);

    navigationsLi.forEach((el, i) => {
        setTimeout(() => 
        el.style.transform = `translateX(95vh)`,
        Number(`${i}00`));
    })
})
