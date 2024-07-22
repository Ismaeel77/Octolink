let btns = document.querySelectorAll(".main-btn");
let navlinks = document.querySelectorAll("nav.navbar a");
let header = document.querySelector("header");
let featureSection = document.getElementById("allfeatures");
let learnSection = document.getElementById("learnMore");

function handleHovers(elements) {
  elements.forEach((ele) =>
    ele.addEventListener("mousemove", (e) => {
      e.target.style.background = e.target.dataset.color;
      ele.addEventListener("mouseleave", () => {
        ele.style.background = "";
      });
    })
  );
}

function handleScroll() {
  window.onscroll = () => {
    if (
      window.scrollY >= featureSection.offsetTop &&
      window.scrollY < learnSection.offsetTop
    ) {
      header.style.opacity = "0";
    } else {
      header.style.opacity = "1";
    }
  };
}

function featureNav() {
  const navLinks = document.querySelectorAll("#allfeatures .sideNav a");
  const sections = document.querySelectorAll("#allfeatures .feat-body");

  function onScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (
            link.getAttribute("href").substring(1) ===
            section.getAttribute("id")
          ) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
}

handleHovers(btns);
handleHovers(navlinks);
handleScroll();
featureNav();
