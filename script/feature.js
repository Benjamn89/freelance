export const feature = () => {
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
