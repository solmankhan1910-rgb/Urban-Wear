(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.querySelector("#name");
    var email = form.querySelector("#email");
    var message = form.querySelector("#message");
    var subject = encodeURIComponent("UrbanWear — message from " + (name && name.value));
    var body = encodeURIComponent(
      "Name: " + (name && name.value) + "\nEmail: " + (email && email.value) + "\n\n" + (message && message.value)
    );
    window.location.href = "mailto:hello@example.com?subject=" + subject + "&body=" + body;
  });
})();
