window.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#burger").addEventListener("click", function() {
    document.querySelector("#menu").classList.remove("menu-isClose");
    document.querySelector("#menu").classList.toggle("menu-isActive");
    document.querySelector("#burger-close").classList.toggle("menu-isActive")
  });
});
