// Header

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

// navbar

let navBarLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});


// Slider

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});



// Counter Design


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        var object = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                object.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1154, 3000);
    counter("count2", 100, 5204, 2500);
    counter("count3", 0, 1086, 3000);
    counter("count4", 100, 5578, 3000);
});



// Our Partner


var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },
    }
})
