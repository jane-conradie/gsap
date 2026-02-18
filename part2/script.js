gsap.from(".logo", {
    opacity: 0,
    rotation: 360,
    duration: 0.5
});

gsap.from(".menu", {
    y: -100,
    duration: 2,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".btn", {
    x: 100,
    duration: 1.5,
    ease: "bounce",
    delay: 0.5
});

gsap.from(".title", {
    opacity: 0,
    y: -600,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".heart", {
    x: 600,
    y: 600,
    duration: 1.5,
    scale: 0,
    opacity: 0,
});