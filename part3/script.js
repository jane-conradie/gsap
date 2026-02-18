gsap.to(".ball", {
    y: -200,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.out",
    backgroundColor: "#ab69e0"
});

gsap.to(".shadow", {
    opacity: 0,
    scale: 0,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
});