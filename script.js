/*gsap.to(".titleCrew", {
  motionPath: {
    path: "#motionPath path",
    align: "#motionPath path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  ease: "none",
  scrollTrigger: {
    markers: true,
    trigger: ".titleCrew",
    start: "top 20%",
    end: "bottom 50%",
    scrub: 1,
  },
});*/

gsap.to(".firstLine", {
  y: 250,
  scrollTrigger: {
    markers: true,
    trigger: ".line",
    start: "top 0%",
    end: "bottom 10%",
    scrub: 0.5,
  },
});

gsap.to(".middleLine", {
  y: 250,
  scrollTrigger: {
    markers: true,
    trigger: ".line",
    start: "top 10%",
    end: "bottom 20%",
    scrub: 1,
  },
});

gsap.to(".lastLine", {
  y: 250,
  scrollTrigger: {
    markers: true,
    trigger: ".line",
    start: "top 20%",
    end: "bottom 30%",
    scrub: 1.5,
  },
});

gsap.to(".element", {
  scale: 1,
  scrollTrigger: {
    //markers: true,
    // l'élément déclencheur
    // en général le même qui est animé à la 1ère ligne
    trigger: ".element",
    // reste du code scroll trigger
    // ..
    start: "top 80%",
    end: "bottom 80%",
    scrub: 1,
  },
});

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
