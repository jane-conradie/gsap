let tl = gsap.timeline();

tl.to(".box", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
})
.to(".box", {
    x: 200,
    duration: 1,
    ease: "power2.inOut",
})
.to(".box", {
    y: -100,
    duration: 1,
    ease: "bounce.out",
});

function play() {
    tl.play();
}

function pause() {
    tl.pause();
}

function restart() {
    tl.restart();
}

function reverse() {
    tl.reverse();
}