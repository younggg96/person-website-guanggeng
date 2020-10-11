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



ScrollReveal().reveal('.intro-title',  { duration: 2000, delay: 500 } );
ScrollReveal().reveal('.intro-content',  { duration: 1000,  delay: 800 } );
ScrollReveal().reveal('.github',  { duration: 500, delay: 1000 } );
ScrollReveal().reveal('.social-icons', { duration: 500, delay: 1200 });

// const workList = document.querySelectorAll('.feature-title');
// ScrollReveal().reveal('.feature-title',  { duration: 500, delay: 1000});

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML5', 'CSS', 'JavaScript', 'SQL', 'Java', 'Swift', 'Python'],
        datasets: [{
            label: 'Programmign Languages',
            data: [10, 9, 9, 6, 8, 5, 4],
            backgroundColor: 'rgba(55, 55, 55, 0.5)',
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
                defualtFontSize: '24px',
            }
        }
    }
});

const isocope = new Isotope(".protoflio-content", {
    layoutMode: "fitRows",
    itemSelector: ".protoflio-item"
})

const fbtn = document.querySelector(".filter-btns");

fbtn.addEventListener("click", e => {
    let {target} = e;
    const filterOption = target.getAttribute("data-filter");
    if(filterOption) {
        document.querySelectorAll(".filter-btn.active")
        .forEach(btn => btn.classList.remove("active"));
        target.classList.add("active");

        isocope.arrange({ filter: filterOption });
    }
});