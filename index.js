const glide = new Glide(".glide", { autoplay: 4000, type: 'carousel', startAt: 1, gap: 0 });
const captionEl = document.querySelectorAll('.slide-caption');
const headerEl = document.querySelector("header");
const dataSectionEl = document.querySelector(".data-section");
const scrollToTop = document.querySelector(".scrollToTop");
const exploreBtnEl = document.querySelector(".explore-btn");

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

const staggeringOption = {
    delay: 300,
    distance: "50px",
    duration: 500,
    easing: "ease-in-out",
    origin: "bottom"
};

ScrollReveal().reveal(".feature", {...staggeringOption, interval: 350});
ScrollReveal().reveal('.intro-title',  { duration: 2000, delay: 500 } );
ScrollReveal().reveal('.intro-content',  { duration: 1000,  delay: 800 } );
ScrollReveal().reveal('.github',  { duration: 500, delay: 1000 } );
ScrollReveal().reveal('.social-icons', { duration: 500, delay: 1200 });

ScrollReveal().reveal(".data-section", {
    beforeReveal: () => {
        anime({
            targets: ".data-piece .num",
            innerHTML: el => {
                return [0, el.innerHTML];
            },
            duration: 2000,
            round: 1,
            easing: "easeInOutExpo"
        });
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${dataSectionEL.getBoundingClientRect().bottom / 8}px)`
    }
});

window.addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;
    if (window.pageYOffset - height > 800) {
        if (!headerEl.classList.contains("sticky")) {
            headerEl.classList.add("sticky");
        
        }
    } else {
        headerEl.classList.remove("sticky");
    }

    if (window.pageYOffset > 1200) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }

    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect().top;

    if(bottom >= 0 && top <= window.innerHeight) {
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom / 10}px)`
    }
})


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

const isocope = new Isotope(".portfolio-content", {
    layoutMode: "fitRows",
    itemSelector: ".portfolio-item"
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

var map = L.map('mapid', {
    center: [40.722069, -74.036753],
    zoom: 13,
    tileSize: 512,
    zoomOffset: -1,
});

var marker = L.marker([40.722069, -74.036753]).addTo(map);
marker.bindPopup("<b>Where I Am</b>").openPopup();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]');

exploreBtnEl.addEventListener("click", () => {
    scroll.animateScroll(document.querySelector("#about-me"));
})