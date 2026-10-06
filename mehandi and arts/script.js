/* =====================================================
   MEHENDI & ARTS
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon =
        menuBtn.querySelector("i");


    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking */

document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

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



/* ================= BOOKING FORM ================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
                .value
                .trim();


        const phone =
            document.getElementById("phone")
                .value
                .trim();


        const eventDate =
            document.getElementById("eventDate")
                .value;


        const eventType =
            document.getElementById("eventType")
                .value;


        const people =
            document.getElementById("people")
                .value;


        const message =
            document.getElementById("message")
                .value
                .trim();


        /*
            Replace this number with
            the artist's real WhatsApp number.

            IMPORTANT:
            Use country code without +
            or spaces.

            Example:
            919876543210
        */

        const whatsappNumber =
            "919876543210";


        const whatsappText =

            "Hello! I would like to book Mehendi.%0A%0A" +

            "Name: " +
            encodeURIComponent(name) +
            "%0A" +

            "Phone: " +
            encodeURIComponent(phone) +
            "%0A" +

            "Event Date: " +
            encodeURIComponent(eventDate) +
            "%0A" +

            "Event Type: " +
            encodeURIComponent(eventType) +
            "%0A" +

            "Number of People: " +
            encodeURIComponent(people) +
            "%0A" +

            "Message: " +
            encodeURIComponent(message);


        const whatsappURL =

            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            whatsappText;


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);



/* ================= DATE VALIDATION ================= */

/*
    Prevent selecting a date
    in the past.
*/

const eventDate =
    document.getElementById("eventDate");


const today =
    new Date();


const year =
    today.getFullYear();


const month =
    String(
        today.getMonth() + 1
    ).padStart(2, "0");


const day =
    String(
        today.getDate()
    ).padStart(2, "0");


eventDate.min =
    `${year}-${month}-${day}`;



/* ================= HEADER SHADOW ================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 5px 25px rgba(50,25,15,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);