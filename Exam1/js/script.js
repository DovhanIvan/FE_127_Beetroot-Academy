document.addEventListener('DOMContentLoaded', function () {
  var burgerMenu = document.querySelector('.burger-menu');
  var burgerList = document.querySelector('.burger-list');

  burgerMenu.addEventListener('click', function () {
    burgerList.classList.toggle('show');
  });

  function checkWindowSize() {
    if (window.innerWidth < 720) {
      burgerMenu.style.display = 'block';
      burgerList.style.display = 'none';
    } else {
      burgerMenu.style.display = 'none';
      burgerList.classList.remove('show'); 
    }
  }
  window.addEventListener('resize', checkWindowSize);
  checkWindowSize();
});