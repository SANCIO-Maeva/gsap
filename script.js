//Path animation (titreCrew)
gsap.to(".titleCrew", {
  opacity: 1,
  motionPath: {
    path: "#motionPath path",
    align: "#motionPath path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  ease: "none",
  scrollTrigger: {
    //markers: false,
    trigger: ".titleCrew",
    start: "top -10%",
    end: "bottom 70%",
    scrub: 1,
  },
});

//Animation of profile line scroll to up
gsap.to(".firstLine", {
  opacity: 0,
  y: 300,
  scrollTrigger: {
    //markers: true,
    trigger: ".firstLine",
    start: "top 10%",
    end: "bottom 50%",
    scrub: 3,
  },
});

gsap.to(".middleLine", {
  opacity: 0,
  y: 200,
  scrollTrigger: {
    // markers: true,
    trigger: ".middleLine",
    start: "top 10%",
    end: "bottom 50%",
    scrub: 3,
  },
});

gsap.to(".lastLine", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    //markers: true,
    trigger: ".lastLine",
    start: "top 10%",
    end: "bottom 50%",
    scrub: 3,
  },
});

gsap.to(".name", {
  opacity: 1,
  scrollTrigger: {
    //markers: true,
    trigger: ".name",
    start: "top 70%",
    end: "bottom 50%",
    scrub: 1,
  },
});

gsap.to(".vibzMobile", {
  x: 320,
  scrollTrigger: {
    //markers: true,
    trigger: ".vibzMobile",
    start: "top 50%",
    end: "bottom 80%",
    scrub: 1,
  },
});

//Animation scale with scroll of Iphone, Ipad and video
gsap.to(".element", {
  scale: 1,
  scrollTrigger: {
    //markers: true,
    trigger: ".element",
    start: "top 75%",
    end: "bottom 80%",
    scrub: 1,
  },
});

//Rotation Iphone
gsap.to("#iphone", {
  rotation: 18,
  x: 180,
  scrollTrigger: {
    //markers: true,
    trigger: "#iphone",
    start: "top 80%",
    end: "bottom 80%",
    scrub: 1,
  },
});

//Animation button with scroll
gsap.to(".download", {
  scale: 1.1,
  ease: "none",
  scrollTrigger: {
    //markers: true,
    trigger: ".download",
    start: "top 100%",
    end: "bottom 100%",
    scrub: 2,
  },
});

//Parallax
gsap.to("[data-speed]", {
  y: (i, el) =>
    (1 - parseFloat(el.getAttribute("data-speed"))) *
    ScrollTrigger.maxScroll(window),
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0,
  },
});
