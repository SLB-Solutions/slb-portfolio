
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================
  //  Dynamic Year
  // ==========================
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ==========================
  // Mobile Navigation Toggle
  // ==========================
  const menuButton = document.querySelector("button[aria-controls='primary-menu']");
  const mobileMenu = document.getElementById("primary-menu");
  const header = document.querySelector("header");
  const logo = header?.querySelector("img");
  const navLinks = document.querySelectorAll("nav a, #primary-menu a");

  if (menuButton && mobileMenu) {
    const menuIcon = menuButton.querySelector("i");

    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("animate-slideDown");

      // Toggle icon (hamburger ↔ close)
      menuIcon?.classList.toggle("fa-bars", expanded);
      menuIcon?.classList.toggle("fa-times", !expanded);
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          menuButton.setAttribute("aria-expanded", "false");
          menuIcon?.classList.add("fa-bars");
          menuIcon?.classList.remove("fa-times");
        }
      });
    });
  }

  // ==========================
  //  Smooth Scroll (with offset)
  // ==========================
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        const headerHeight = header?.offsetHeight || 0;
        if (target) {
          const offsetTop = target.offsetTop - headerHeight + 10;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    });
  });

  // ==========================
  // Header Scroll Animation
  // ==========================
  if (header) {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY > 60;
      header.classList.toggle("backdrop-blur-md", scrolled);
      header.classList.toggle("bg-white/90", scrolled);
      header.classList.toggle("shadow-lg", scrolled);
      logo?.classList.toggle("scale-90", scrolled);
    });
  }

  // ==========================
  //  Active Link Highlight
  // ==========================
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
      link.classList.toggle("text-blue-600", link.getAttribute("href") === `#${current}`);
      link.classList.toggle("font-semibold", link.getAttribute("href") === `#${current}`);
    });
  });

  // ==========================
  //  Contact Form (AJAX-ready)
  // ==========================
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form).entries());

      try {
        // Placeholder API submission (replace with your endpoint)
        console.log("Submitting form:", data);

        // Simulate delay
        await new Promise(res => setTimeout(res, 500));

        alert("✅ Thank you! Your message has been received.");
        form.reset();
      } catch (err) {
        console.error(err);
        alert("❌ Oops! Something went wrong. Please try again.");
      }
    });
  }

  // ==========================
  //  Solutions Filter (Dynamic Cards)
  // ==========================
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".solution-card");

  if (chips.length && cards.length) {
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => {
          c.classList.remove("active");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("active");
        chip.setAttribute("aria-pressed", "true");

        const filter = chip.dataset.filter;
        cards.forEach(card => {
          const match = filter === "all" || card.dataset.industry === filter;
          card.classList.toggle("hidden", !match);
          if (match) {
            card.classList.add("animate-fadeIn");
            setTimeout(() => card.classList.remove("animate-fadeIn"), 600);
          }
        });
      });
    });
  }
});

