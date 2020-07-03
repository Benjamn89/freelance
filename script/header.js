import { test } from "./service.js";
import { howTo } from "./howto.js";
import { topPro } from "./top-pro.js";
import { jobs } from "./jobs.js";
import { feature } from "./feature.js";
import { modals } from "./modals.js";
test();
howTo();
topPro();
jobs();
feature();
modals();

// On Load event
window.addEventListener("load", () => {
  document.querySelector(".spinner").classList.add("pre-load-scale");
  setTimeout(() => {
    document.querySelector(".spinner").classList.add("pre-load-off");
    document.querySelector(".big-wrapper").classList.add("big-wrapper-on");
  }, 1000);
});

const closeNavIphone = () => {
  document
    .querySelector(".nav-open-phone")
    .classList.toggle("nav-open-phone-on");
};

document
  .querySelector(".header-hamburger")
  .addEventListener("click", closeNavIphone);
document
  .querySelector(".open-phone-exit")
  .addEventListener("click", closeNavIphone);

// Sticky navbar
const header = document.querySelector(".navbar-big-screen");
const sticky = header.offsetTop;
const fixTheNav = () => {
  if (window.pageYOffset > sticky) {
    if (!header.classList.contains("navbar-big-scroll")) {
      header.classList.add("navbar-big-scroll");
    }
  } else {
    if (header.classList.contains("navbar-big-scroll")) {
      header.classList.remove("navbar-big-scroll");
    }
  }
};
window.onscroll = function () {
  fixTheNav();
};

// Send request
const headInp = document.querySelectorAll(".header-direct-to input");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
document
  .querySelector(".header-direct-to button")
  .addEventListener("click", (e) => {
    let counter = 0;
    e.preventDefault();
    document.querySelector(".header-svg").classList.add("header-svg-on");
    setTimeout(() => {
      if (headInp[0].value.length > 3) {
        if (headInp[0].classList.contains("header-input-red")) {
          headInp[0].classList.remove("header-input-red");
        }
        counter++;
      } else {
        headInp[0].classList.add("header-input-red");
      }
      if (headInp[1].value.match(pattern)) {
        if (headInp[1].classList.contains("header-input-red")) {
          headInp[1].classList.remove("header-input-red");
        }
        counter++;
      } else {
        headInp[1].classList.add("header-input-red");
      }
      if (headInp[2].value.length > 7) {
        if (headInp[2].classList.contains("header-input-red")) {
          headInp[2].classList.remove("header-input-red");
        }
        counter++;
      } else {
        headInp[2].classList.add("header-input-red");
      }
      document.querySelector(".header-svg").classList.remove("header-svg-on");
      if (counter === 3) {
        document.querySelector(".header-direct-to button").innerHTML =
          "בקשה נשלחה!";
        document
          .querySelector(".header-direct-to button")
          .classList.add("header-button-off");
        headInp[0].value = "";
        headInp[1].value = "";
        headInp[2].value = "";
      }
    }, 2000);
  });
