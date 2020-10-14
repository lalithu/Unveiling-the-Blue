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

var dropdownSlide2 = () => {
  var dropdownburger = document.querySelector(".dropdownburger2");
  var dropdown = document.querySelector(".dropdown-article2");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active2");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle2");
  });
};

var dropdownSlide3 = () => {
  var dropdownburger = document.querySelector(".dropdownburger3");
  var dropdown = document.querySelector(".dropdown-article3");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active3");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle3");
  });
}; 

var dropdownSlide4 = () => {
  var dropdownburger = document.querySelector(".dropdownburger4");
  var dropdown = document.querySelector(".dropdown-article4");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active4");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle4");
  });
}; 

var dropdownSlide5 = () => {
  var dropdownburger = document.querySelector(".dropdownburger5");
  var dropdown = document.querySelector(".dropdown-article5");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active5");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle5");
  });
}; 

var dropdownSlide6 = () => {
  var dropdownburger = document.querySelector(".dropdownburger6");
  var dropdown = document.querySelector(".dropdown-article6");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active6");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle6");
  });
}; 

var dropdownSlide7 = () => {
  var dropdownburger = document.querySelector(".dropdownburger7");
  var dropdown = document.querySelector(".dropdown-article7");
  //Toggle Nav
  dropdownburger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdownburger-active7");

    //Burger Animation
    dropdownburger.classList.toggle("dropdowntoggle7");
  });
}; 

const app = () => {
  navSlide();
  dropdownSlide();
  dropdownSlide1();
  dropdownSlide2();
  dropdownSlide3();
  dropdownSlide4();
  dropdownSlide5();
  dropdownSlide6();
  dropdownSlide7();
};

app();

//Each Dropdownm, Just add 1
