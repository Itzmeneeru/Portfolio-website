// --- Typewriter effect (optional for hero section) ---
const typewriter = document.getElementById("typewriter");
const text = "Hi, I'm Neeraj Bisht👋";
let idx = 0;

function type() {
  if (!typewriter) return;
  if (idx < text.length) {
    typewriter.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(type, 90);
  }
}
type();

// --- Skills animation on scroll ---
(function () {
  const progresses = document.querySelectorAll(".progress");

  function animateProgressBar(progressEl) {
    const target = Number(progressEl.dataset.progress) || 0;

    // animate the blue bar
    progressEl.style.width = target + "%";

    // animate the number text
    const percentLabel = progressEl
      .closest(".skill-card")
      .querySelector(".skill-percent");

    let current = 0;
    const step = Math.max(1, Math.floor(target / 25));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      percentLabel.textContent = current + "%";
    }, 20);
  }

  function onScrollAnimate() {
    const trigger = window.innerHeight * 0.85;
    progresses.forEach((p) => {
      if (p.dataset.animated) return; // skip if already animated
      const top = p.getBoundingClientRect().top;
      if (top < trigger) {
        animateProgressBar(p);
        p.dataset.animated = "true";
      }
    });
  }

  window.addEventListener("scroll", onScrollAnimate);
  window.addEventListener("load", onScrollAnimate);
})();

// --- Project Modal Popup ---
function openModal(project) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";

  if(project === 'portfolio') {
    modalImg.src = "Profile.JPG"; // your Profile image
    caption.innerHTML = "Portfolio Website";
  } else if(project === 'sales') {
    modalImg.src = "screenshot_Dashboard.jpg"; // your Excel Dashboard screenshot
    caption.innerHTML = "Sales Dashboard Project";
  } else if(project === 'covid') {
    modalImg.src = "Dashboardpng.PNG"; // your Power BI Dashboard screenshot
    caption.innerHTML = "COVID-19 Dashboard Project";
  } else if(project === 'bmi') {
    modalImg.src = "Bmi_sc.PNG"; // your BMI screenshot
    caption.innerHTML = "BMI Calculator Project";
  }
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
}

