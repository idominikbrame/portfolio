//gsap
gsap.registerPlugin(ScrollTrigger)

gsap.from('.header', {duration: 1, opacity: 0, ease: 'bounce'})
gsap.from('.nav-item', {duration: 1, opacity:0, y: '-100%', stagger: .2, ease:'bounce'})
gsap.from('.side-nav li', {duration: 1, opacity:0, y: '-100%', ease:'bounce', stagger: .1})
gsap.from('.video-container #landing-video', {duration: 1.5, opacity: 0, transform:"scale(1.05)"})

//register scroll plugin

gsap.from(".box", {
  x: -100,
  duration: 1,
  rotation:15,
  scrollTrigger: {
    trigger: ".box",
    start: "top 60%",
    markers: true,
  }
})

gsap.from(".box2", {
  x: -100,
  duration: 1,
  rotation:15,
  scrollTrigger: {
    trigger: ".box2",
    start: "top 60%",
    markers: true,
  }
})

gsap.from(".box3", {
  x: -100,
  duration: 1,
  rotation:15,
  scrollTrigger: {
    trigger: ".box3",
    start: "top 60%",
    markers: true,
  }
})

gsap.from(".box4", {
  x: -100,
  duration: 1.5,
  rotation:25,
  scrollTrigger: {
    trigger: ".box4",
    start: "top 60%",
    markers: true,
  }
})




document.querySelector(".gallery1").addEventListener("mouseover", e  => {
      gsap.to(".gallery1", {
        x:-900,
        duration: 1.5,
      })
      gsap.to(".gallery1-item", {
        delay: 1,
        x: 50,
        duration: 2,
        opacity: 1
      })
  })


  
document.querySelector(".gallery2").addEventListener("mouseover", e  => {
  gsap.to(".gallery2", {
    x:-900,
    duration: 1.5,
  })
  gsap.to(".gallery2-item", {
    delay: 1,
    x: 50,
    duration: 2,
    opacity: 1
  })
})




document.querySelector(".gallery3").addEventListener("mouseover", e  => {
  gsap.to(".gallery3", {
    x:-900,
    duration: 1.5,
  })
  gsap.to(".gallery3-item", {
    delay: 1,
    x: 50,
    duration: 2,
    opacity: 1
  })
})
