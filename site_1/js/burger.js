window.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#burger").addEventListener("click", function() {
    document.querySelector("#menu").classList.toggle("menu-isActive");
    document.querySelector("#burger").classList.toggle("header-burger-focus")
  });
});
