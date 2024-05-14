var tl = gsap.timeline();
var nav = document.getElementById("#navbar");
var navContent = document.querySelector("#navbar-content h4");

tl.from("#navbar", {
  y: -100,
  duration: 0.8,
  delay: 0.5,
});

tl.from("#navbar-content h4", {
  y: -100,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.2,
});
tl.from("#content h1",{
    x:-1200,
    duration:0.5,
    delay:0.1
})
tl.from("#content h2",{
    x:-1000,
    duration:0.5,
    delay:0.1
})
gsap.to("#page1 #navbar", {
  backgroundColor: "white",
  backdropFilter: blur(0),
  // document.getElementById("#navbar-content h1").color="white",
  scrollTrigger: {
    trigger: "#page1 #navbar",
    scroller: "body",
    start: "top -50%",
    end: "max",
    // markers:true,
    scrub: true,
  },
});

gsap.to("#page1 #navbar #navbar-content h4", {
  color: "black",
  scrollTrigger: {
    trigger: "#page1 #navbar #navbar-content h4",
    scroller: "body",
    start: "top -50%",
    end: "max",
    scrub: true,
  },
});

navContent.addEventListener("mouseover", function () {
  gsap.from("#navbar-content span", {
    y:-50,
    duration: 0.5,
  });
  gsap.to("#navbar-content span",{
    y:0,
    duration:0.5
  })
});



