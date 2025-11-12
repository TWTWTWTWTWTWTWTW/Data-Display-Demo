// Simple scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".qa-card, .intro-vid");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  revealElements.forEach(el => observer.observe(el));
});

