window.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#check-checked").addEventListener("click", function() {
    document.querySelector("#gallery-text").classList.toggle("gallery-text__check");
  });
  document.querySelector("#gallery-one").addEventListener("click", function() {
    document.querySelector("#gallery-one").classList.toggle("gallery-text__check");
  });
  document.querySelector("#check-checked-two").addEventListener("click", function() {
    document.querySelector("#gallery-text-two").classList.toggle("gallery-text__check");
  });
  document.querySelector("#gallery-two").addEventListener("click", function() {
    document.querySelector("#gallery-two").classList.toggle("gallery-text__check");
  });
  document.querySelector("#check-checked-three").addEventListener("click", function() {
    document.querySelector("#gallery-text-three").classList.toggle("gallery-text__check");
  });
  document.querySelector("#gallery-three").addEventListener("click", function() {
    document.querySelector("#gallery-three").classList.toggle("gallery-text__check");
  });
});
