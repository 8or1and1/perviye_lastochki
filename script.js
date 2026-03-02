document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav__links--open");
    });

    navLinks.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("nav__links--open");
      }
    });
  }

  const form = document.getElementById("join-form");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const parentName = String(formData.get("parentName") || "").trim();
      const childName = String(formData.get("childName") || "").trim();

      if (!parentName || !childName) {
        alert("Пожалуйста, заполните имя родителя и имя ребёнка.");
        return;
      }

      alert(
        "Спасибо за заявку! Мы свяжемся с вами по указанному e‑mail и расскажем о ближайших встречах."
      );
      form.reset();
    });
  }
});

