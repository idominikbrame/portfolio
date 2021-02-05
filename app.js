window.addEventListener('scroll', function(e) {

  const target = document.querySelector('.scroll');
  const target2 = document.querySelector('.scroll2');
  const target3 = document.querySelector('.scroll3');
  const target4 = document.querySelector('.scroll4');
  console.log(window.pageYOffset)

  let scrolled = window.pageYOffset;
  let rate = scrolled * .5;
  let ballRate = scrolled;
  target.style.transform = 'translate3d(0px, '+rate*-3.5+'px, 0px)';
  target2.style.transform = 'translate3d(0px, '+rate*-1.2+'px, 0px)';
  target3.style.transform = 'translate3d(0px, '+rate*2.8+'px, 0px)';
  target4.style.transform = 'translate3d(0px, '+rate*5.8+'px, 0px)';
})