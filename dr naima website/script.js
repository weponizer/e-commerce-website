/* =====================================================
   DR. NAIMA DENTAL WEBSITE
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu when clicking a navigation link */

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ================= FAQ ================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (button) {

    button.addEventListener("click", function () {

        const currentItem =
            button.parentElement;


        /* Close other FAQ items */

        document
            .querySelectorAll(".faq-item")
            .forEach(function (item) {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    const icon =
                        item.querySelector(".faq-question span");

                    if (icon) {

                        icon.textContent = "+";

                    }

                }

            });


        /* Toggle current FAQ */

        currentItem.classList.toggle("active");


        const icon =
            button.querySelector("span");


        if (currentItem.classList.contains("active")) {

            icon.textContent = "−";

        } else {

            icon.textContent = "+";

        }

    });

});


/* ================= APPOINTMENT FORM ================= */

const appointmentForm =
    document.getElementById("appointmentForm");


appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const date =
        document.getElementById("date").value;


    const treatment =
        document.getElementById("treatment").value;


    const message =
        document.getElementById("message").value.trim();


    /*
       Replace this with Dr. Naima's
       real WhatsApp number.

       Format:
       Country code + number
       WITHOUT + or spaces.
    */

    const whatsappNumber =
        "919876543210";


    const whatsappMessage =

        "Hello Dr. Naima,%0A%0A" +

        "I would like to book a dental appointment.%0A%0A" +

        "Name: " + encodeURIComponent(name) + "%0A" +

        "Phone: " + encodeURIComponent(phone) + "%0A" +

        "Email: " + encodeURIComponent(email) + "%0A" +

        "Preferred Date: " + encodeURIComponent(date) + "%0A" +

        "Treatment: " + encodeURIComponent(treatment) + "%0A" +

        "Message: " + encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* ================= DATE VALIDATION ================= */

/*
   Prevent users from selecting
   a date in the past.
*/

const dateInput =
    document.getElementById("date");


const today =
    new Date();


const year =
    today.getFullYear();


const month =
    String(today.getMonth() + 1)
        .padStart(2, "0");


const day =
    String(today.getDate())
        .padStart(2, "0");


const todayString =
    `${year}-${month}-${day}`;


dateInput.setAttribute(
    "min",
    todayString
);