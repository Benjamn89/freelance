export const chat = () => {
  document.querySelector(".chat-with-us ").addEventListener("click", () => {
    document
      .querySelector(".chat-inside-box")
      .classList.toggle("chat-inside-box-on");
    console.log("ib");
  });
};
