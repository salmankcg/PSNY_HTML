import 'bootstrap';

const header = document.querySelector('.header');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    header.classList.add('header-sticky');
  } 
  else {
    header.classList.remove('header-sticky');
  }
}