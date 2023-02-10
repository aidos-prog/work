window.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#burger-close").addEventListener("click", function() {
    document.querySelector("#menu").classList.remove("menu-isActive");
    document.querySelector("#menu").classList.toggle("menu-isClose");
    document.querySelector("#burger-close").classList.remove("menu-isActive");
  });
});
