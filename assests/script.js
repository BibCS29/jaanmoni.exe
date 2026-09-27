// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideIn 0.8s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all love sections
document.querySelectorAll(".love-section").forEach((section) => {
  observer.observe(section);
});

// ============================================
// FLOATING HEARTS ANIMATION
// ============================================

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "5";

  document.body.appendChild(heart);

  const duration = Math.random() * 3 + 4; // 4-7 seconds
  const keyframes = `
        @keyframes float-up {
            0% {
                transform: translateY(0) translateX(0);
                opacity: ${heart.style.opacity};
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;

  const style = document.createElement("style");
  style.textContent = keyframes;
  document.head.appendChild(style);

  heart.style.animation = `float-up ${duration}s ease-in forwards`;

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// ============================================
// HOVER EFFECTS FOR IMAGE WRAPPERS
// ============================================

document.querySelectorAll(".image-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotate(2deg)";
  });

  wrapper.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// ============================================
// INTERACTIVE BOUQUET FLOWERS
// ============================================

document.querySelectorAll(".flower").forEach((flower) => {
  flower.addEventListener("click", function () {
    this.style.animation = "bounce 0.5s ease-out";
    setTimeout(() => {
      this.style.animation = "";
    }, 500);
  });

  flower.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.15)";
  });

  flower.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Add bounce animation
const style = document.createElement("style");
style.textContent = `
    @keyframes bounce {
        0%, 100% {
            transform: scale(1.15);
        }
        50% {
            transform: scale(1.3);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;

  // Parallax effect on hero section
  const hero = document.querySelector(".hero");
  if (hero && scrolled < window.innerHeight) {
    hero.style.backgroundPosition = "0 " + scrolled * 0.5 + "px";
  }
});

// ============================================
// MESSAGE CARD ANIMATION
// ============================================

document.querySelectorAll(".message-card").forEach((card, index) => {
  card.style.animation = `slideIn 0.8s ease-out ${index * 0.1}s backwards`;
});

// ============================================
// LOVE TREE INTERACTION
// ============================================

document.querySelectorAll(".hanging-photo").forEach((photo) => {
  photo.addEventListener("click", function () {
    this.style.animation = "none";
    setTimeout(() => {
      this.style.animation = `sway 3s ease-in-out infinite`;
    }, 10);
  });

  // Add glow effect on hover
  photo.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 0 20px rgba(255, 20, 147, 0.8)";
  });

  photo.addEventListener("mouseleave", function () {
    this.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
  });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function createScrollButton() {
  const button = document.createElement("button");
    button.innerHTML = "&#8593;";
  button.className = "scroll-to-top";
    button.setAttribute("aria-label", "Back to top");
    button.title = "Back to top";
  button.style.cssText = `
        position: fixed;
      bottom: 24px;
      right: 24px;
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      background: #c32d49;
      color: #fff4f5;
        border: none;
      border-radius: 50%;
        cursor: pointer;
      font-size: 1.25rem;
      box-shadow: 0 5px 20px rgba(195, 45, 73, 0.25);
        z-index: 50;
        opacity: 0;
        transition: all 0.3s ease;
        transform: translateY(20px);
    `;

  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
      button.style.pointerEvents = "auto";
    } else {
      button.style.opacity = "0";
      button.style.transform = "translateY(20px)";
      button.style.pointerEvents = "none";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(0) scale(1.1)";
  });

  button.addEventListener("mouseleave", function () {
    if (window.pageYOffset > 300) {
      this.style.transform = "translateY(0)";
    }
  });
}

createScrollButton();

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener("load", function () {
  document.body.style.animation = "fadeIn 0.8s ease-out";
});

// Add fade in animation
const fadeInStyle = document.createElement("style");
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(fadeInStyle);

// ============================================
// BIRTHDAY LETTER AND WISH
// ============================================

const letterToggle = document.querySelector(".letter-toggle");
const birthdayLetter = document.querySelector("#birthday-letter");

letterToggle?.addEventListener("click", () => {
  const isExpanded = letterToggle.getAttribute("aria-expanded") === "true";
  letterToggle.setAttribute("aria-expanded", String(!isExpanded));
  birthdayLetter.hidden = isExpanded;
  letterToggle.querySelector("span:last-child").textContent = isExpanded ? "+" : "-";
  letterToggle.querySelector(".toggle-label").textContent = isExpanded
    ? "Open your birthday letter"
    : "Close your birthday letter";
});

document.querySelector("#celebrate-button")?.addEventListener("click", () => {
  const colors = ["#c32d49", "#ed9aaa", "#b3445b", "#f4bbc5", "#fff4f5"];

  for (let index = 0; index < 70; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "birthday-confetti";
    confetti.style.setProperty("--x", `${Math.random() * 100}vw`);
    confetti.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    confetti.style.backgroundColor = colors[index % colors.length];
    confetti.style.animationDelay = `${Math.random() * 450}ms`;
    document.body.appendChild(confetti);
    confetti.addEventListener("animationend", () => confetti.remove(), { once: true });
  }
});

const cakePopButton = document.querySelector("#cake-pop-button");
const birthdaySurprise = document.querySelector("#birthday-surprise");
const birthdayDialogClose = document.querySelector(".birthday-dialog-close");
const birthdayDialogConfirm = document.querySelector(".birthday-dialog-confirm");

cakePopButton?.addEventListener("click", () => {
  if (!birthdaySurprise || birthdaySurprise.open) return;

  cakePopButton.classList.remove("is-popping");
  void cakePopButton.offsetWidth;
  cakePopButton.classList.add("is-popping");

  window.setTimeout(() => {
    cakePopButton.classList.remove("is-popping");
    birthdaySurprise.showModal();
  }, 360);
});

birthdayDialogClose?.addEventListener("click", () => birthdaySurprise?.close());
birthdayDialogConfirm?.addEventListener("click", () => birthdaySurprise?.close());
birthdaySurprise?.addEventListener("click", (event) => {
  if (event.target === birthdaySurprise) birthdaySurprise.close();
});

const messageCards = [...document.querySelectorAll(".message-card")];
const noteAnnouncement = document.querySelector("#love-note-announcement");

document.querySelector("#quote-button")?.addEventListener("click", () => {
  const availableCards = messageCards.filter(
    (card) => !card.classList.contains("is-featured"),
  );
  const selectedCard = availableCards[Math.floor(Math.random() * availableCards.length)];

  messageCards.forEach((card) => card.classList.remove("is-featured"));
  selectedCard.classList.add("is-featured");
  noteAnnouncement.textContent = `A note for you: ${selectedCard.textContent.replaceAll('"', "").trim()}`;
  selectedCard.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#rose-button")?.addEventListener("click", (event) => {
  const buttonBounds = event.currentTarget.getBoundingClientRect();
  const blossoms = ["🌹", "🌸", "🌷", "🌹"];
  noteAnnouncement.textContent = "A rose and a few blossoms, just for you.";

  for (let index = 0; index < 12; index += 1) {
    const rose = document.createElement("span");
    rose.className = "floating-rose";
    rose.setAttribute("aria-hidden", "true");
    rose.textContent = blossoms[index % blossoms.length];
    rose.style.setProperty(
      "--x",
      `${buttonBounds.left + buttonBounds.width / 2 + Math.random() * 100 - 50}px`,
    );
    rose.style.setProperty("--y", `${buttonBounds.top + buttonBounds.height / 2}px`);
    rose.style.setProperty("--drift", `${Math.random() * 150 - 75}px`);
    rose.style.animationDelay = `${Math.random() * 350}ms`;
    document.body.appendChild(rose);
    rose.addEventListener("animationend", () => rose.remove(), { once: true });
  }
});

// ============================================
// CONSOLE LOVE MESSAGE
// ============================================

console.log(
  "%cHappy birthday, Deepsikha!",
  "font-size: 20px; color: #c32d49; font-weight: bold;",
);
console.log(
  "%cThis website is dedicated to expressing love in 19 beautiful frames.",
  "font-size: 14px; color: #ff69b4;",
);
console.log("%cEnjoy the love story! 💕", "font-size: 14px; color: #ff69b4;");

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener("keydown", function (event) {
  // Press 'L' for love effect
  if (event.key.toLowerCase() === "l") {
    for (let i = 0; i < 5; i++) {
      setTimeout(createFloatingHeart, i * 100);
    }
  }

  // Press 'H' to scroll to home
  if (event.key.toLowerCase() === "h") {
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  }
});

// ============================================
// END OF SCRIPT
// ============================================
