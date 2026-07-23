(() => {
  "use strict";

  const config = window.ARDENTE_CONFIG || {};
  const setupNote = document.getElementById("setupNote");
  const artboard = document.getElementById("artboard");

  if (new URLSearchParams(window.location.search).get("debug") === "1") {
    artboard.classList.add("debug");
  }

  const isRealUrl = (value) => {
    if (!value || typeof value !== "string") return false;
    if (value.includes("PASTE_YOUR") || value.includes("YOUR-EMAIL")) return false;
    try {
      const parsed = new URL(value);
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch {
      return false;
    }
  };

  const showSetupNote = () => {
    setupNote.hidden = false;
    clearTimeout(showSetupNote.timer);
    showSetupNote.timer = setTimeout(() => {
      setupNote.hidden = true;
    }, 5500);
  };

  document.querySelectorAll('[data-link="stripe"]').forEach((link) => {
    if (isRealUrl(config.stripePaymentLink)) {
      link.href = config.stripePaymentLink;
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showSetupNote();
      });
    }
  });

  document.querySelectorAll('[data-link="facebook"]').forEach((link) => {
    link.href = isRealUrl(config.facebookUrl) ? config.facebookUrl : "https://www.facebook.com/";
  });

  document.querySelectorAll('[data-link="amazon"]').forEach((link) => {
    link.href = isRealUrl(config.amazonBookUrl) ? config.amazonBookUrl : "https://www.amazon.com/";
  });

  document.querySelectorAll('[data-link="email"]').forEach((link) => {
    const email = String(config.contactEmail || "").trim();
    if (email && !email.includes("YOUR-EMAIL") && email.includes("@")) {
      link.href = `mailto:${email}?subject=Ardente%20Family%20Treasures`;
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        setupNote.innerHTML = "Add your email address in <strong>site-config.js</strong> to activate this button.";
        showSetupNote();
      });
    }
  });
})();
