gsap.to(".menu-item", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.to(".ball", {
    scale: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "edges", // or center, end, edges, [index], and random
        ease: "power3.out"
    },
    repeat: -1,
    yoyo: true
});