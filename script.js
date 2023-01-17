gsap.to(".titleCrew", {
  motionPath: {
    path: "#motionPath path",
    align: "#motionPath path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  ease: "none",
  /*scrollTrigger: {
    markers: true,
    trigger: ".titleCrew",
    start: "top 20%",
    end: "bottom 50%",
    scrub: 1,
  },*/
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
