/* Emergence Institute — shared interactions. Dependency-free. */
(function () {
  "use strict";

  /* ---- mobile nav ---- */
  var burger = document.querySelector(".nav__burger");
  var links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---- application form (no backend by default) ---- */
  // Paste a Formspree / Tally / Google Form POST endpoint here to receive real
  // submissions. Until set, the form runs its confirmation state locally.
  var FELLOWSHIP_ENDPOINT = "";

  var form = document.querySelector("[data-apply]");
  if (form) {
    var ok = document.querySelector(".form__ok");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var submit = form.querySelector('[type="submit"]');
      if (submit) {
        submit.disabled = true;
        submit.textContent = "Transmitting…";
      }
      function done() {
        form.style.display = "none";
        if (ok) {
          ok.classList.add("show");
          ok.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      if (FELLOWSHIP_ENDPOINT) {
        fetch(FELLOWSHIP_ENDPOINT, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        })
          .then(done)
          .catch(function () {
            if (submit) {
              submit.disabled = false;
              submit.textContent = "File application";
            }
            alert("Transmission failed. Email hello@biopunklab.com instead.");
          });
      } else {
        setTimeout(done, 650);
      }
    });
  }

  /* ---- footer year ---- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
