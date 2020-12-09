document
  .querySelector(".hamburger")
  .addEventListener("click", function (event) {
    document.querySelector(".aside__menu").classList.toggle("aside--left");
    document
      .querySelector(".page__articles")
      .classList.toggle("articles--margin");
  });
