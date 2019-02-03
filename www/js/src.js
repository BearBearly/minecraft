var menu = document.querySelector('.main-nav');
console.log(menu);
var menuOpener = document.querySelector('.main-nav__opener');

menuOpener.addEventListener('click', function() {
   menu.classList.toggle('is-active');
   menuOpener.classList.toggle('is-active');
});
