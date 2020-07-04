// Stop load the video no phones
document.addEventListener("DOMContentLoaded", () => {
  if (screen.width < 820) {
    // document.getElementsByTagName("video")[0].removeAttribute("autoplay");
    document.getElementsByTagName("video")[0].remove();
  }
});

// On Load event
if (screen.width < 820) {
  document.querySelector(".spinner").classList.add("pre-load-off");
  document.querySelector(".big-wrapper").classList.add("big-wrapper-on");
} else {
  window.addEventListener("load", () => {
    document.querySelector(".spinner").classList.add("pre-load-scale");
    setTimeout(() => {
      document.querySelector(".spinner").classList.add("pre-load-off");
      document.querySelector(".big-wrapper").classList.add("big-wrapper-on");
    }, 1000);
  });
}

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
const feature = () => {
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  var featureA = document.querySelector(".feature-a");
  var inputs = document.querySelectorAll(".feature-inside input");
  var featureSvg = document.querySelector(".feature-svg");
  featureA.addEventListener("click", (e) => {
    e.preventDefault();
    featureSvg.classList.add("feature-svg-on");
    setTimeout(() => {
      let counter = 0;
      if (inputs[0].value.length > 4) {
        counter++;
        if (inputs[0].classList.contains("feature-input-red")) {
          inputs[0].classList.remove("feature-input-red");
        }
      } else {
        inputs[0].classList.add("feature-input-red");
      }
      if (inputs[1].value.match(pattern)) {
        counter++;
        if (inputs[1].classList.contains("feature-input-red")) {
          inputs[1].classList.remove("feature-input-red");
        }
      } else {
        inputs[1].classList.add("feature-input-red");
      }
      if (inputs[2].value.length > 7) {
        counter++;
        if (inputs[2].classList.contains("feature-input-red")) {
          inputs[2].classList.remove("feature-input-red");
        }
      } else {
        inputs[2].classList.add("feature-input-red");
      }
      featureSvg.classList.remove("feature-svg-on");
      if (counter === 3) {
        featureA.innerHTML = "נשלח!";
        featureA.classList.add("feature-a-off");
      }
    }, 2000);
  });
};
feature();
const howTo = () => {
  for (var i = 0; i <= 6; i++) {
    document
      .querySelectorAll(".howto-tabs-div li")
      [i].addEventListener("click", (e) => {
        const ind = parseInt(e.target.getAttribute("index"));
        // Take care the li class on
        document.querySelector(".howto-li-on").classList.remove("howto-li-on");
        document
          .querySelectorAll(".howto-tabs-div li")
          [ind].classList.add("howto-li-on");
        // Show content
        document.querySelector(".howto-on").classList.remove("howto-on");
        document
          .querySelectorAll(".howto-content-div")
          [ind].classList.add("howto-on");
      });
  }
};
howTo();
const jobs = () => {
  document.querySelector(".jobs-p").addEventListener("click", () => {
    document.querySelector(".jobs-p").classList.add("jobs-p-on");
    setTimeout(() => {
      document.querySelector(".jobs-my-jobs").classList.add("jobs-my-jobs-on");
      document.querySelector(".jobs-to-load").classList.add("jobs-to-load-on");
    }, 500);
  });
};
jobs();
const modals = () => {
  // Open service
  const bgBlack = document.querySelector(".bg-black-all");
  const myHtml = document.getElementsByTagName("html")[0];
  const cancelModal = () => {
    bgBlack.classList.add("bg-black-off");
    setTimeout(() => {
      bgBlack.classList.remove("bg-black-on");
      bgBlack.classList.remove("bg-black-off");
      myHtml.classList.remove("html-hide");
    }, 500);
  };
  const enterModal = (e) => {
    e.preventDefault();
    bgBlack.classList.add("bg-black-on");
    if (document.querySelector(".bg-black-inside-off")) {
      document
        .querySelector(".bg-black-inside-off")
        .classList.remove("bg-black-inside-off");
    }
    myHtml.classList.add("html-hide");
    if (e.target.getAttribute("contact")) {
      document
        .querySelector(".bg-black-first")
        .classList.add("bg-black-inside-off");
    } else {
      document
        .querySelector(".bg-black-second")
        .classList.add("bg-black-inside-off");
    }
    bgBlack.focus();
    bgBlack.addEventListener("click", (e) => {
      if (e.target.className.length > 16) {
        cancelModal();
      }
    });
    bgBlack.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        cancelModal();
      }
    });
    for (var i = 0; i <= 1; i++) {
      document
        .querySelectorAll(".bg-inside")
        [i].addEventListener("click", cancelModal);
    }
  };
  document
    .querySelector(".navbar-service-on")
    .addEventListener("click", enterModal);
  document
    .querySelector(".navbar-service-on-p")
    .addEventListener("click", enterModal);
  for (var i = 0; i <= 1; i++) {
    document
      .querySelectorAll(".make-contact-first")
      [i].addEventListener("click", enterModal);
  }
};
modals();
const test = () => {
  for (var i = 0; i <= 5; i++) {
    document
      .querySelectorAll(".service-info-div li")
      [i].addEventListener("click", (e) => {
        const ind = parseInt(e.target.getAttribute("index"));
        //Change li active color
        document
          .querySelector(".service-li-on")
          .classList.remove("service-li-on");
        document
          .querySelector(".service-a-on")
          .classList.remove("service-a-on");
        document
          .querySelectorAll(".service-info-div li")
          [ind].classList.add("service-li-on");
        document
          .querySelectorAll(".service-info-div li")
          [ind].classList.add("service-a-on");

        // Change the actual content
        document
          .querySelector(".service-small-on")
          .classList.remove("service-small-on");
        document
          .querySelectorAll(".service-info-content-div div")
          [ind].classList.add("service-small-on");
      });
  }
};
test();
let topInd = 0;
const topPro = () => {
  const projects = document.querySelectorAll(".top-wrapper").length;
  document.querySelector(".top-total-pro").innerHTML = `0${projects}/`;
  const change = (ind) => {
    if (ind < 0) {
      topInd = projects - 1;
    }
    if (ind > projects - 1) {
      topInd = 0;
    }
    // Start changing the content
    document.querySelector(".top-on").classList.remove("top-on");
    document.querySelectorAll(".top-wrapper")[topInd].classList.add("top-on");
    // Span
    document.querySelector(".top-span-num").innerHTML = `0${topInd + 1}`;
  };
  document.querySelector(".top-right-arrow").addEventListener("click", () => {
    topInd = topInd - 1;
    change(topInd);
  });
  document.querySelector(".top-left-arrow").addEventListener("click", () => {
    topInd = topInd + 1;
    change(topInd);
  });
};
topPro();
