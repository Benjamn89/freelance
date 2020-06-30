export const howTo = () => {
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
