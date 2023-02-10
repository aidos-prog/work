document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".work-item").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".we-work-content").forEach(function(tabContent) {
        tabContent.classList.remove("we-work-content-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("we-work-content-active")
      })
  })
})

