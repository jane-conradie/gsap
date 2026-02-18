// NOTE notice how duration 1 is duplicated everywhere

// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' });

// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });

// gsap.from('.right', { duration: 2, x: '-100vw', delay: 1, ease: 'power2.in' });
// gsap.from('.left', { duration: 2, x: '-100%', delay: 1.5 });

// gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 });

// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 3.5 });

// NOTE timeline fixes that using 'defaults'
// NOTE in timelines delays will now trigger from end of last action and not the whole start, and is formatted
// after animation properties

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
    .from('.header', { y: '-100%', ease: 'bounce' })
    .from('.link', {  opacity: 0, stagger: 0.5 })
    .from('.right', {  x: '-100vw', ease: 'power2.in' }, 1)
    // NOTE < means when previous animation starts, can also add delay here
    .from('.left', {  x: '-100%' }, '<.5')
    .to('.footer', {  y: 0, ease: 'elastic' })
    .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 });

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    // NOTE can set time scale for new thing
    timeline.timeScale(3);
    // NOTE can also reverse
    timeline.reverse();
})
