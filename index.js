const glide = new Glide(".glide", { autoplay: 4000, type: 'carousel', startAt: 1, gap: 0 });
const captionEl = document.querySelectorAll('.slide-caption');

glide.on(["mount.after", "run.after"], () => {
    const caption = captionEl[glide.index]
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "spring",
        delay: anime.stagger(500, { start: 300 }),
        translateY: [anime.stagger([40, 10]), 0]
    })
});

glide.on("run.bebfore", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    });
});

glide.mount();

ScrollReveal().reveal('.intro-title',  {reset: true, duration: 2000, delay: 500 } );
ScrollReveal().reveal('.skills-content',  {reset: true, duration: 1000,  delay: 1000 } );
ScrollReveal().reveal('.github',  {reset: true, duration: 500, delay: 2000 } );