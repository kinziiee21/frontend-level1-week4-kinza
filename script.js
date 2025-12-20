/* =====================================================
   PURECARE – FINAL SCRIPT
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     CONTACT FORM
  ===================== */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.querySelector("#name")?.value.trim();
      const email = contactForm.querySelector("#email")?.value.trim();
      const message = contactForm.querySelector("#message")?.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Thank you for contacting PureCare!");
      contactForm.reset();
    });
  }

  /* =====================
     PRODUCT SEARCH
  ===================== */
  const productSearch = document.getElementById("productSearch");

  if (productSearch) {
    productSearch.addEventListener("input", () => {
      const value = productSearch.value.toLowerCase();
      const products = document.querySelectorAll(".product-item");

      products.forEach(product => {
        const title = product.querySelector("h5")?.innerText.toLowerCase();
        product.style.display = title && title.includes(value) ? "" : "none";
      });
    });
  }

  /* =====================
     ACTIVE NAV LINK
  ===================== */
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* =====================
     MEGA MENU (CLICK BASED)
  ===================== */
  const productToggle = document.querySelector(".product-toggle");
  const megaMenu = document.querySelector(".mega-menu");

  if (productToggle && megaMenu) {

    productToggle.addEventListener("click", (e) => {
      e.preventDefault();
      megaMenu.classList.toggle("open");
    });

    // Close mega menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown-mega")) {
        megaMenu.classList.remove("open");
      }
    });
  }

  /* =====================
     PRODUCT SLIDER (DESKTOP)
  ===================== */
  const track = document.querySelector(".product-track");
  const leftBtn = document.getElementById("slideLeft");
  const rightBtn = document.getElementById("slideRight");

  let currentPosition = 0;
  const slideWidth = 280; // card width + gap

  if (track && leftBtn && rightBtn) {

    rightBtn.addEventListener("click", () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      currentPosition += slideWidth * 2;

      if (currentPosition > maxScroll) {
        currentPosition = maxScroll;
      }

      track.style.transform = `translateX(-${currentPosition}px)`;
    });

    leftBtn.addEventListener("click", () => {
      currentPosition -= slideWidth * 2;

      if (currentPosition < 0) {
        currentPosition = 0;
      }

      track.style.transform = `translateX(-${currentPosition}px)`;
    });
  }

});
