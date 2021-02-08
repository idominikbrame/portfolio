window.addEventListener('load', function(e) {
  setTimeout(videoOpacity, 700)
  setTimeout(showNav, 1000)
})

const showNav = () => {
  document.querySelector('.aside').style.opacity = "1";
  document.querySelector('header').style.opacity = "1";
}


const videoOpacity = () => {
  let landingVideo = document.querySelector('#landing-video').style
  landingVideo.opacity = "1";
  landingVideo.transform = "scale(.95)"
}