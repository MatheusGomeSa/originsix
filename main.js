const nav = document.querySelector("#header nav");


const toggles = document.querySelectorAll("nav .toggle");

for (const toggle of toggles) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    })
}

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    })
}



const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
    // Mudarr header da página quando der scroll 
    if (window.scrollY >= navHeight) {
        // scroll é maior que a altura do header 
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}



// Testimonial Swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// scrollReveal: Mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
`, { interval: 100 })


window.addEventListener('scroll', () => {

})
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
    // Botão volatar para o topo
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }

}
const sections = document.querySelectorAll('main section[id]');
// Menu ativo conforme a section estiver visivel
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');


        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active');
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active');
        }
    }
}

// when scroll
window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
})
