let btns = document.querySelectorAll(".main-btn");
let navlinks = document.querySelectorAll("nav.navbar a");

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

handleHovers(btns);
handleHovers(navlinks);
