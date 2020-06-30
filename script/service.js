export const test = () => {
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
