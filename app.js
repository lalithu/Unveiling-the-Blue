const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".right-side");
  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

const dropdownSlide = () => {
  const dropdownburger = document.querySelector(".dropdownburger");
  const dropdown = document.querySelector(".dropdown-article");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle");
  });
};

navSlide();
dropdownSlide();
