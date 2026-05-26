/* Volunteer Form */

const form = document.getElementById("volunteerForm");

const message = document.getElementById("message");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        message.innerHTML =
        "Thank You For Joining She Can Foundation ";

        form.reset();

    });
}

/* Counter Animation */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;
        }
    };

    updateCounter();
});

/* FAQ */

const questions =
document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        answer.classList.toggle("show");
    });
});

/* Dark Mode */

const darkBtn =
document.getElementById("darkModeBtn");

if(darkBtn){

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");
    });
}

/* Mobile Menu */

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");
    });
}