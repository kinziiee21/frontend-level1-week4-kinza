document.addEventListener("DOMContentLoaded", () => {

  const productToggle = document.querySelector(".product-toggle");
  const megaMenu = document.querySelector(".mega-menu");

  // Products toggle
  productToggle.addEventListener("click", (e) => {
    e.preventDefault();
    megaMenu.classList.toggle("open");
  });

  // Level 1 toggle
  document.querySelectorAll(".level1").forEach(item => {
    item.addEventListener("click", () => {
      const menu = item.nextElementSibling;
      menu.classList.toggle("open");
    });
  });

  // Level 2 toggle
  document.querySelectorAll(".level2").forEach(item => {
    item.addEventListener("click", () => {
      const menu = item.nextElementSibling;
      menu.classList.toggle("open");
    });
  });

});

/* =====================
   PRODUCT SLIDER LOGIC
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

const productData = {
  "Hair Care": {
    Shampoo: [
      { name: "Women Repair Shampoo", img: "product1.jpeg", price: "₹299" },
      { name: "Men Strength Shampoo", img: "product2.jpeg", price: "₹279" }
    ],
    Conditioner: [
      { name: "Smooth Conditioner", img: "product3.jpeg", price: "₹249" }
    ],
    "Hair Oil": [
      { name: "Coconut Hair Oil", img: "product4.jpeg", price: "₹199" },
      { name: "Almond Hair Oil", img: "product5.jpeg", price: "₹219" }
    ]
  },

  "Skin Care": {
    "Body Wash": [
      { name: "Hydrating Body Wash", img: "product6.jpeg", price: "₹199" }
    ],
    Creams: [
      { name: "Moisturizing Cream", img: "product7.jpeg", price: "₹299" }
    ],
    "Face Wash": [
      { name: "Gentle Face Wash", img: "product8.jpeg", price: "₹249" }
    ]
  },

  "Baby Care": {
    "Baby Soap": [
      { name: "Mild Baby Soap", img: "product9.jpeg", price: "₹149" }
    ],
    "Baby Lotion": [
      { name: "Soft Baby Lotion", img: "product10.jpeg", price: "₹199" }
    ]
  }
};

/* =====================
   MOBILE SCROLL ENABLE
===================== */
function isMobile() {
  return window.innerWidth <= 768;
}

// Disable transform slider on mobile
window.addEventListener("resize", () => {
  if (isMobile() && track) {
    track.style.transform = "none";
  }
});

// On first load
if (isMobile() && track) {
  track.style.transform = "none";
}
