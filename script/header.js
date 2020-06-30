import { test } from "./service.js";
import { howTo } from "./howto.js";
import { topPro } from "./top-pro.js";
test();
howTo();
topPro();
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
