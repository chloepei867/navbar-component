const menuBtn = document.getElementById("menu");
const subnav = document.getElementById("subnav");
const actions = document.getElementById("actions");
const icon = document.querySelector("#menu i");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function () {
  subnav.classList.toggle("hidden");
  actions.classList.toggle("hidden");
  body.classList.toggle("menu-open");

  if (icon && icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
