gsap.from(".image ", {
    y: 600,
    duration: 1
});

gsap.to(".hero-image", {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.2,
    ease: "sine.out",
    delay: 1.4
});

gsap.from(".logo", {
    y: -100,
    duration: 1
});

gsap.from(".menu", {
    y: -100,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".btn", {
    y: -100,
    duration: 1,
    delay: 1,
    ease: "bounce"
});

gsap.from("h1, h6", {
    y: "-200%",
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".left-side", {
    x: -100,
    duration: 1
});