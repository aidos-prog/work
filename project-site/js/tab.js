(() => {
  function setTabs (dataPath, dataTarget) {
      const btns = document.querySelectorAll(`.catalog-item__link[${dataPath}]`);
      const contents = document.querySelectorAll(`.catalog-container__one[${dataTarget}]`);
      
      btns.forEach((btn) => {
          btn.addEventListener('click', function (evt) {
              const path = this.getAttribute(dataPath);
              console.log(path);
              const target = document.querySelector(`.catalog-container__one[${dataTarget}="${path}"]`);


              btns.forEach((currentBtn) => {
                  currentBtn.classList.remove('open');
              });

              this.classList.add('open');

              contents.forEach((content) => {
                  content.classList.remove('open');
              });

              target.classList.add('open');
          });
      });
  }

  setTabs('data-path', 'data-target');
})();