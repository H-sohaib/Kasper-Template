// observer for all elment
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// observer for video caption and about img  translate by Y and animate the stats 
let stats = document.querySelectorAll(".about .stats .box h1");
let interval = 1000;
const observerForVideo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showVideo");
    } else {
      entry.target.classList.remove("showVideo");
    }
    if (entry.target.classList.contains("intersactingStats") || true )  {
      console.log("stats intersacting");
      stats.forEach((stat) => {
        stat.innerHTML = 0
        let startVal = 0; 
        let endVal = parseInt(stat.getAttribute("data-stat"));
        // console.log(endVal);
        let duration = Math.floor(interval / endVal);
        // console.log(duration);
        let hund = setInterval(() => {
          startVal += 1;
          stat.textContent = startVal;
          if (startVal == endVal) {
            clearInterval(hund);
          }
        }, duration)
      });
    }
  });
});
// observer progress for our skills
let skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("observed");
      entry.target.style.width = `${entry.target.getAttribute("data-pogress")}`;
    } else {
      entry.target.style.width = "0%";
    }
  });
});
// observer for blackPart
let quotObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.fontSize = "24px";
    } else {
      entry.target.style.fontSize = "4px";
    }
  });
});
// observer for fixed navbar
const navbar = document.querySelector(".header .navbar");
const navlia = document.querySelectorAll(".header .links ul li a");

let navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("navChange");
      navlia.forEach((a) => {
        a.classList.add("aChange");
        a.onmouseenter = () => {
          a.style.color = "white";
          a.style.borderColor = "white";
        };
      });
    } else {
      navbar.classList.remove("navChange");
      navlia.forEach((a) => {
        a.classList.remove("aChange");
        a.onmouseenter = () => {
          a.style.color = "#19c8fa";
          a.style.borderColor = "#19c8fa";
        };
        a.onmouseleave = () => {
          a.style.color = "white";
        };
      });
    }
  });
});

const hiddenElems = document.querySelectorAll(".hidden");
let srvhidden13 = document.querySelectorAll(".invertXHidden");
let YhiddenEls = document.querySelectorAll(".YHidden");
let skillsBar = document.querySelectorAll("span[data-pogress]");
let quot = document.querySelector(".blackPart h2");
let header = document.querySelector(".header");

hiddenElems.forEach((el) => observer.observe(el));
srvhidden13.forEach((el) => observer.observe(el));
YhiddenEls.forEach((el) => observerForVideo.observe(el));
skillsBar.forEach((el) => skillsObserver.observe(el));
quotObserver.observe(quot);
navObserver.observe(header);

// incremente counter animation 

// if ((window.scrollY = abtSection.offsetTop + 150)) {
//   console.log("entered");

// }