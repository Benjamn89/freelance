import { test } from "./service.js";
import { howTo } from "./howto.js";
import { topPro } from "./top-pro.js";
import { jobs } from "./jobs.js";
import { feature } from "./feature.js";
test();
howTo();
topPro();
jobs();
feature();

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
// Open service
const bgBlack = document.querySelector(".bg-black-all");
const myHtml = document.getElementsByTagName("html")[0];
const cancelModal = (e) => {
  bgBlack.classList.add("bg-black-off");
  setTimeout(() => {
    bgBlack.classList.remove("bg-black-on");
    bgBlack.classList.remove("bg-black-off");
    myHtml.classList.remove("html-hide");
  }, 500);
};
document.querySelector(".navbar-service-on").addEventListener("click", (e) => {
  e.preventDefault();
  bgBlack.classList.add("bg-black-on");
  myHtml.classList.add("html-hide");
  bgBlack.focus();
  bgBlack.addEventListener("click", (e) => {
    if (e.target.className.length > 2) {
      cancelModal();
    }
  });
  bgBlack.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
      cancelModal();
    }
  });
  document.querySelector(".bg-inside").addEventListener("click", cancelModal);
});
