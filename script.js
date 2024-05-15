var tl = gsap.timeline();
var nav = document.getElementById("#navbar");
var navContent = document.querySelectorAll("#navbar-content span");
var navContenth4 = document.querySelector("#navbar-content h4");
// console.log(navContenth4);
tl.from("#content h1", {
  // x: -700,
  // y: 300,
  duration: 1,
  delay: 1,
  // opacity: 0,
  scale: 0,
});
tl.from("#navbar", {
  y: -100,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
});

tl.from("#navbar-content span", {
  y: -100,
  duration: 0.6,
  // delay: 0.2,
  stagger: 0.2,
  opacity: 0,
});

tl.from("#content h2", {
  // x: -1000,
  duration: 0.8,
  // delay:0.1,
  opacity: 0,
  scale: 0,
});
gsap.to("#page1 #navbar", {
  backgroundColor: "white",
  // backdropFilter: blur(0),
  // document.getElementById("#navbar-content h1").color="white",
  scrollTrigger: {
    trigger: "#page1 #navbar",
    scroller: "body",
    start: "top -50%",
    end: "max",
    // markers: true,
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

navContent.forEach((el) => {
  // console.log(el);
  el.addEventListener("mouseenter", function (dets) {
    var component = document.querySelector(`#${dets.target.id} h4`);
    t2 = gsap.timeline();
    t2.from(component, {
      y: 30,
      duration: 0.5,
      repeat: 0,
    });
    t2.to(component, {
      y: 0,
      duration: 0.5,
      repeat: 0,
    });
  });
});
function logo_tansition() {
  var t = gsap.timeline();
  var logo = document.querySelector("#navbar img");
  t.to(logo, {
    scale: 1.1,
    rotateY: 360,
  });
  t.pause();
  logo.addEventListener("mouseenter", () => {
    t.play();
  });
  logo.addEventListener("mouseleave", () => {
    t.reverse();
  });
}
logo_tansition();

function splitTextAnimation() {
  var t = gsap.timeline();
  var npgc = document.querySelector("#content h1").textContent.split("");
  // console.log(npgc);
  var content = "";
  npgc.forEach((e, i) => {
    content += `<span id="collegeName_${i}">${e}</span>`;
  });
  document.querySelector("#content h1").innerHTML = content;
  var animationText = document.querySelectorAll("#content h1 span");
  animationText.forEach((el, i) => {
    el.addEventListener("mouseenter", (dets) => {
      gsap.from(dets.target, {
        scale: 1.2,
        opacity: 0.5,
      });
    });
    el.addEventListener("mouseleave", (dets) => {
      console.log("leave");
      console.log(dets.target);
      gsap.to(dets.target, {
        scale: 1,
        y: 0,
        opacity: 1,
      });
    });
  });
}
splitTextAnimation();
// navContent.addEventListener("mouseleave", () => {});
