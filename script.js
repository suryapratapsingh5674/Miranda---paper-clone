gsap.from("#page1",{
    scale: .4,
    y: 100,
    rotate: 360,
    duration: 2,
})

gsap.from("body",{
    opacity: 0,
    duration: 2,
    backgroundColor: "black",
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// --- RED PANEL ---
gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".smooth-scroll",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: self => console.log(self.direction)
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
  });
  
  
  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    },
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });
  
  
  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple",
        scroller: ".smooth-scroll",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      }
    });
  
  tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
    .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
    .to(".purple", {backgroundColor: "#28a92b"}, 0);
  
  
  

  