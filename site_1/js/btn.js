document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".work-item").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".work-item").forEach(function(tabContent) {
        tabContent.classList.remove("work-item-active")
      })
      document.querySelector(`[data-path="${path}"]`).classList.add("work-item-active")
      })
  })
})

