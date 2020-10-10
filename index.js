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

glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    });
});

glide.mount();

ScrollReveal().reveal('.intro-title',  {reset: true, duration: 2000, delay: 500 } );
ScrollReveal().reveal('.intro-content',  {reset: true, duration: 1000,  delay: 800 } );
ScrollReveal().reveal('.github',  {reset: true, duration: 500, delay: 1000 } );
ScrollReveal().reveal('.social-icons', { reset: true, duration: 500, delay: 1200 });

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});