export const jobs = () => {
  document.querySelector(".jobs-p").addEventListener("click", () => {
    document.querySelector(".jobs-p").classList.add("jobs-p-on");
    setTimeout(() => {
      document.querySelector(".jobs-my-jobs").classList.add("jobs-my-jobs-on");
      document.querySelector(".jobs-to-load").classList.add("jobs-to-load-on");
    }, 500);
  });
};
