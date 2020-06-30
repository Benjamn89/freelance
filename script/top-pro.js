let topInd = 0;

export const topPro = () => {
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
