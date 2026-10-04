// =====================================================
// BHARTIYA SANSKRITI
// MAIN JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {


    // =================================================
    // CHECK CONFIG
    // =================================================

    if (typeof shop === "undefined") {

        console.error(
            "config.js load नहीं हुआ।"
        );

        return;

    }


    // =================================================
    // HELPER
    // =================================================

    function setText(selector, value) {

        document
            .querySelectorAll(selector)
            .forEach(function (element) {

                element.textContent = value;

            });

    }


    // =================================================
    // LOAD CONFIG DATA
    // =================================================

    setText(
        "[data-shop-name]",
        shop.name
    );


    setText(
        "[data-tagline]",
        shop.tagline
    );


    setText(
        "[data-product-name]",
        shop.productName
    );


    setText(
        "[data-email]",
        shop.email
    );


    setText(
        "[data-weight-200]",
        shop.weight200
    );


    setText(
        "[data-price-200]",
        shop.price200
    );


    setText(
        "[data-mrp-200]",
        shop.mrp200
    );


    setText(
        "[data-weight-400]",
        shop.weight400
    );


    setText(
        "[data-price-400]",
        shop.price400
    );


    setText(
        "[data-mrp-400]",
        shop.mrp400
    );


    setText(
        "[data-offer-title]",
        shop.offerTitle
    );


    setText(
        "[data-offer-text]",
        shop.offerText
    );


    setText(
        "[data-instagram-name]",
        shop.instagramName
    );


    setText(
        "[data-youtube-name]",
        shop.youtubeName
    );


    setText(
        "[data-facebook-name]",
        shop.facebookName
    );


    // =================================================
    // LOGO
    // =================================================

    document
        .querySelectorAll("[data-logo-image]")
        .forEach(function (image) {

            image.src = shop.logoImage;

            image.alt = shop.name;

        });


    // =================================================
    // PRODUCT IMAGES
    // =================================================

    document
        .querySelectorAll("[data-product-image]")
        .forEach(function (image) {

            image.src = shop.productImage;

            image.alt = shop.productName;

        });


    // =================================================
    // WHATSAPP
    // =================================================

    const whatsappNumber =
        "91" +
        shop.phone.replace(/\D/g, "");


    const generalMessage =
        "नमस्ते! मुझे " +
        shop.name +
        " का " +
        shop.productName +
        " ऑर्डर करना है।";


    const generalWhatsAppURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(
            generalMessage
        );


    document
        .querySelectorAll("[data-whatsapp]")
        .forEach(function (button) {

            button.href =
                generalWhatsAppURL;

            button.target = "_blank";

            button.rel =
                "noopener noreferrer";

        });


    // =================================================
    // 200 GRAM ORDER
    // =================================================

    document
        .querySelectorAll("[data-order-200]")
        .forEach(function (button) {


            const message =
                "नमस्ते! मुझे " +
                shop.name +
                " का " +
                shop.productName +
                " का " +
                shop.weight200 +
                " पैक ऑर्डर करना है। " +
                "कीमत: " +
                shop.price200;


            button.href =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    message
                );


            button.target = "_blank";

            button.rel =
                "noopener noreferrer";

        });


    // =================================================
    // 400 GRAM ORDER
    // =================================================

    document
        .querySelectorAll("[data-order-400]")
        .forEach(function (button) {


            const message =
                "नमस्ते! मुझे " +
                shop.name +
                " का " +
                shop.productName +
                " का " +
                shop.weight400 +
                " पैक ऑर्डर करना है। " +
                "कीमत: " +
                shop.price400;


            button.href =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    message
                );


            button.target = "_blank";

            button.rel =
                "noopener noreferrer";

        });


    // =================================================
    // SOCIAL MEDIA LINKS
    // =================================================

    document
        .querySelectorAll("[data-instagram-link]")
        .forEach(function (link) {

            link.href =
                shop.instagramUrl;

        });


    document
        .querySelectorAll("[data-youtube-link]")
        .forEach(function (link) {

            link.href =
                shop.youtubeUrl;

        });


    document
        .querySelectorAll("[data-facebook-link]")
        .forEach(function (link) {

            link.href =
                shop.facebookUrl;

        });


    // =================================================
    // MOBILE MENU
    // =================================================

    const menuBtn =
        document.getElementById("menuBtn");


    const navMenu =
        document.getElementById("navMenu");


    if (menuBtn && navMenu) {


        menuBtn.addEventListener(
            "click",
            function () {


                navMenu.classList.toggle(
                    "active"
                );


                const icon =
                    menuBtn.querySelector("i");


                if (
                    icon &&
                    navMenu.classList.contains(
                        "active"
                    )
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                }

                else if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }
        );


        // Close mobile menu

        navMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navMenu.classList.remove(
                            "active"
                        );


                        const icon =
                            menuBtn.querySelector("i");


                        if (icon) {

                            icon.classList.remove(
                                "fa-xmark"
                            );

                            icon.classList.add(
                                "fa-bars"
                            );

                        }

                    }
                );

            });

    }


    // =================================================
    // SMOOTH SCROLL
    // =================================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {


                    const targetId =
                        this.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    // =================================================
    // CURRENT YEAR
    // =================================================

    document
        .querySelectorAll(".current-year")
        .forEach(function (element) {

            element.textContent =
                new Date().getFullYear();

        });


    // =================================================
    // IMAGE ERROR CHECK
    // =================================================

    document
        .querySelectorAll("img")
        .forEach(function (image) {

            image.addEventListener(
                "error",
                function () {

                    console.warn(
                        "Image could not be loaded:",
                        image.src
                    );

                }
            );

        });


    // =================================================
    // NAVBAR SCROLL
    // =================================================

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 30
                ) {

                    navbar.classList.add(
                        "scrolled"
                    );

                }

                else {

                    navbar.classList.remove(
                        "scrolled"
                    );

                }

            }
        );

    }


    // =================================================
    // FINAL CONSOLE MESSAGE
    // =================================================

    console.log(
        "भारतीय संस्कृति website loaded successfully."
    );

    console.log(
        "WhatsApp:",
        shop.phone
    );

});