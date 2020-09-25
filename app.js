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

var dropdownSlide = () => {
  var dropdownburger = document.querySelector(".dropdownburger");
  var dropdown = document.querySelector(".dropdown-article");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle");
  });
};

var dropdownSlide1 = () => {
  var dropdownburger = document.querySelector(".dropdownburger1");
  var dropdown = document.querySelector(".dropdown-article1");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active1");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle1");
  });
};

const app = () => {
  navSlide();
  dropdownSlide();
  dropdownSlide1();
};

app();

//Each Dropdownm, Just add 1
