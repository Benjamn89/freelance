export const jobs = () => {
  document.querySelector(".jobs-p").addEventListener("click", () => {
    document.querySelector(".jobs-p").classList.add("jobs-p-on");
    setTimeout(() => {
      document.querySelector(".jobs-my-jobs").classList.add("jobs-my-jobs-on");
      for (var i = 0; i <= 2; i++) {
        document
          .querySelectorAll(".jobs-to-load")
          [i].classList.add("jobs-to-load-on");
      }
    }, 500);
    console.log(document.querySelectorAll(".jobs-to-load"));
  });
};
