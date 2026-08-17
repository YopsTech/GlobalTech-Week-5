"use strict";

console.log("app.js loaded successfully");

/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNavbar = document.getElementById("mainNavbar");

menuToggle.addEventListener("click", function () {

    const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
        "aria-expanded",
        String(!isExpanded)
    );

    mainNavbar.hidden = isExpanded;

});


/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const liveRegion = document.getElementById("liveRegion");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    liveRegion.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your full name.";

        isValid = false;

    }

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email address.";

        isValid = false;

    } else if (!emailInput.checkValidity()) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    }

    if (!isValid) {

        liveRegion.textContent =
            "There are errors in the form. Please correct them and try again.";

        return;
    }

    liveRegion.textContent =
        "Form submitted successfully.";

});


/* =========================
   TESTIMONIAL ROTATOR
========================= */

const testimonialText =
    document.getElementById("testimonialText");

const testimonialAuthor =
    document.getElementById("testimonialAuthor");

const pauseBtn =
    document.getElementById("pauseBtn");

const testimonials =
    document.getElementById("testimonials");

const testimonialList = [

    {
        text: "NovaFit completely transformed my fitness journey. The trainers are supportive and professional.",
        author: "Sarah A."
    },

    {
        text: "The nutrition coaching changed my eating habits for the better.",
        author: "Michael O."
    },

    {
        text: "I feel stronger, healthier, and more confident every week.",
        author: "Grace E."
    }

];

let currentTestimonial = 0;
let isPaused = false;
let userPaused = false;

function showTestimonial(index) {

    testimonialText.textContent =
        testimonialList[index].text;

    testimonialAuthor.textContent =
        testimonialList[index].author;

}

const rotation = setInterval(function () {

    if (!isPaused) {

        currentTestimonial++;

        if (currentTestimonial >= testimonialList.length) {

            currentTestimonial = 0;

        }

        showTestimonial(currentTestimonial);

    }

}, 5000);


/* Pause / Play button */

pauseBtn.addEventListener("click", function () {

    userPaused = !userPaused;
    isPaused = userPaused;

    pauseBtn.textContent =
        userPaused ? "Play" : "Pause";

    pauseBtn.setAttribute(
        "aria-pressed",
        String(userPaused)
    );

});


/* Pause when user enters testimonial area */

testimonials.addEventListener("mouseenter", function () {

    if (!userPaused) {
        isPaused = true;
    }

});


testimonials.addEventListener("mouseleave", function () {

    if (!userPaused) {
        isPaused = false;
    }

});


testimonials.addEventListener("focusin", function () {

    if (!userPaused) {
        isPaused = true;
    }

});


testimonials.addEventListener("focusout", function () {

    if (!userPaused) {
        isPaused = false;
    }

});