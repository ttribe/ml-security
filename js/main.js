/* ============================================
   ML Security — Main JavaScript
   ============================================ */

(function () {
  "use strict";

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".header__nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("open");
      nav.classList.toggle("open");
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
    });

    // Close menu when clicking a nav link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Contact Form Handling ---
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  if (form && successMsg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const message = form.querySelector("#message");
      let valid = true;

      [name, email, message].forEach(function (field) {
        if (field && !field.value.trim()) {
          field.style.borderColor = "#dc3545";
          valid = false;
        } else if (field) {
          field.style.borderColor = "#ddd";
        }
      });

      if (email && email.value && !isValidEmail(email.value)) {
        email.style.borderColor = "#dc3545";
        valid = false;
      }

      if (valid) {
        form.style.display = "none";
        successMsg.classList.add("show");
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // --- Services Nav Active State on Scroll ---
  var serviceNavLinks = document.querySelectorAll(".services-nav__link");
  if (serviceNavLinks.length > 0) {
    var serviceSections = document.querySelectorAll(".service-detail[id]");
    window.addEventListener("scroll", function () {
      var scrollPos = window.scrollY + 200;
      serviceSections.forEach(function (section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        var id = section.getAttribute("id");
        var link = document.querySelector('.services-nav__link[href="#' + id + '"]');
        if (link) {
          if (scrollPos >= top && scrollPos < bottom) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    });
  }
})();
