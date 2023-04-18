// navbar to menu for mobile

const hamBurger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelectorAll(".nav-a").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navUl.classList.toggle("active");
  })
);

// scroll
const root = document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for (let i = 0; i < marqueeElementDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// mediaquery
const marqueeAni = document.getElementById("marquee-ani");
const marqueeFixed = document.getElementById("marquee-fixed");

function screenChange(e) {
  if (e.matches) {
    marqueeAni.classList.add("hide");
    marqueeFixed.classList.remove("hide");
  } else {
    marqueeFixed.classList.add("hide");
    marqueeAni.classList.remove("hide");
  }
}

const mediaQuery = window.matchMedia("(min-width: 800px)");

mediaQuery.addListener(screenChange);

screenChange(mediaQuery);

// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenBlur = document.querySelectorAll(".hiddenb");
hiddenBlur.forEach((el) => observer.observe(el));

const slideRight = document.querySelectorAll(".slide-right");
slideRight.forEach((el) => observer.observe(el));

const slideLeft = document.querySelectorAll(".slide-left");
slideLeft.forEach((el) => observer.observe(el));
