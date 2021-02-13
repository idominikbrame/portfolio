//gsap
gsap.registerPlugin(ScrollTrigger)

gsap.from('.header', {duration: 1, opacity: 0, ease: 'bounce'})
gsap.from('.nav-item', {duration: 1, opacity:0, y: '-100%', stagger: .2, ease:'bounce'})
gsap.from('.side-nav li', {duration: 1, opacity:0, y: '-100%', ease:'bounce', stagger: .1})
gsap.from('.video-container #landing-video', {duration: 1.5, opacity: 0, transform:"scale(1.05)"})

//register scroll plugin

document.querySelectorAll('.section-container').forEach(item, {
  gsap.from(item, {
    x: -2000,
    duration: 1,
    scrollTrigger: {
      trigger: ".barber",
      start: "top 70%",
      markers: true,
    }
  })
  
})

