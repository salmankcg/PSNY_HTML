import 'bootstrap';

new WOW().init();

const header = document.querySelector('.header');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add('header-sticky');
  } 
  else {
    header.classList.remove('header-sticky');
  }
}