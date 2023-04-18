//Navbar section starts here

const navbarLink = document.getElementsByClassName("nav-link");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", function () {

  for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].classList.remove("visibility");
  
  }
  closeIcon.classList.remove("visibility");
    menuIcon.classList.add("visibility");
});
closeIcon.addEventListener("click", () => {
    for (let i = 0; i < navbarLink.length; i++) {
      navbarLink[i].classList.add("visibility");
     
    }
    menuIcon.classList.remove("visibility");
    closeIcon.classList.add("visibility");
});

//Navbar section ends here

//Slider section starts here


let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});