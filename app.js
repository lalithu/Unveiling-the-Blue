const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.right-side');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        //Burger Animation
    burger.classList.toggle('toggle');

    });
}

navSlide();
