const container = document.getElementsByClassName('balls')[0];
console.log(container);

let htmlContent = '';

// For loop to generate 5 divs
for (let i = 0; i <= 20; i++) {
    htmlContent += `<div class="ball" style="transform: translateX(${getPosition(i)}px);"></div>`;
}

console.log(htmlContent);


// Single DOM update for performance
container.innerHTML = htmlContent;

console.log(container);

function getPosition(i) {
    console.log(i % 2);
    

    // if second one, keep left
    if (i % 2 === 0) {
        return 0;
    } else {
        return 300;
    }
}


// gsap.to("h1", {
//     duration: 2,
//     opacity: 1,
//     rotation: 360,
//     ease: 'power3.out',
//     delay: 0.5
// });

// gsap.to(".box", {
//     x: 300,
//     duration: 1,
//     ease: "power1.inOut",
// });

// gsap.from(".box", {
//     x: 300,
//     duration: 1,
//     delay: 4
// });


gsap.fromTo(".ball", {
    x: 0,
    opacity: 0,
    scale: 0,
    delay: 5
}, {
    x: 300,
    duration: 2,
    opacity: 1,
    scale: 1
});