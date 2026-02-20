const texts = ["Programmer", "Game Developer", "Coder", "Problem Solver"];

const textElement = document.getElementById("animated-text");

let index = 0;

function animateText() {
    const word = texts[index];
    textElement.textContent = word;

    gsap.fromTo(textElement, {
       y: 50,
       opacity: 0
    }, {
       y: 0,
       opacity: 1,
       duration: 1,
       ease: "elastic.out(1, 0.5)"
    });

    gsap.to(textElement, {
        y: -50,
        opacity: 0,
        delay: 2,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
            index = (index + 1) % texts.length;
            animateText();
        }
    });
}

animateText();