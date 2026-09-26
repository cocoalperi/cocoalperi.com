// Intro disappears automatically. If the page is opened from a hash,
// the browser will still navigate normally after the intro.

const slides = [...document.querySelectorAll(".slide")];
const dotsContainer = document.querySelector(".carousel-dots");
let current = 0;
let timer;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (index === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Go to image ${index + 1}`);
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = [...document.querySelectorAll(".dot")];

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(current + 1), 5000);
}

document.querySelector(".prev").addEventListener("click", () => showSlide(current - 1));
document.querySelector(".next").addEventListener("click", () => showSlide(current + 1));
resetTimer();

// Work filters
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".project").forEach(project => {
      const visible = filter === "all" || project.dataset.category === filter;
      project.classList.toggle("hidden", !visible);
    });
  });
});
