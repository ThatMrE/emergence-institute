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

  /* ---- application form ---- */
  // Google Apps Script web app that captures submissions into a sheet with
  // email / name / source / message columns. Posts form-encoded, no-cors.
  var FELLOWSHIP_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbwAX_8vjyS7QUsCaulYhM4sKKK-PjytfSCr1HYE2NyCipGt-sNUA6IM7nINwNdSQlSBgA/exec";

  var form = document.querySelector("[data-apply]");
  if (form) {
    var ok = document.querySelector(".form__ok");

    // Human labels for the fields folded into the combined `message` string.
    // The sheet only has email/source/name/message columns, so everything
    // other than email + name is packed into `message` (order preserved).
    var MESSAGE_FIELDS = [
      ["pronouns", "Pronouns"],
      ["location", "Location / timezone"],
      ["track", "Primary track"],
      ["portfolio", "Portfolio / sample"],
      ["background", "Background"],
      ["scenario", "Scenario pitch"],
      ["fix", "The fix"],
      ["affiliation", "Community labs / affiliations"],
      ["heard", "How they found us"],
      ["attest_charter", "Attests charter"],
      ["attest_nohazard", "Attests no hazard"],
      ["attest_conduct", "Attests conduct"],
    ];

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Preserve native validation (form uses novalidate for styling).
      if (typeof form.checkValidity === "function" && !form.checkValidity()) {
        if (typeof form.reportValidity === "function") form.reportValidity();
        return;
      }

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

      var data = new FormData(form);
      function val(n) {
        var v = data.get(n);
        return v == null ? "" : String(v).trim();
      }

      var parts = [];
      MESSAGE_FIELDS.forEach(function (f) {
        var v;
        if (f[0].indexOf("attest_") === 0) {
          v = form.querySelector('[name="' + f[0] + '"]').checked ? "yes" : "no";
        } else {
          v = val(f[0]);
        }
        if (v) parts.push(f[1] + ": " + v);
      });

      var body = new URLSearchParams({
        email: val("email"),
        name: val("name"),
        source: "emergence.institute",
        message: parts.join(" | "),
      }).toString();

      fetch(FELLOWSHIP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body,
      })
        .then(done)
        .catch(done);
    });
  }

  /* ---- footer year ---- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
