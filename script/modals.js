export const modals = () => {
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
