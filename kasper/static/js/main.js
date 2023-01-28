let buttonNav = document.querySelector(".header .navbar .icon");
let bullets = document.querySelectorAll(".header .bullets li");
let ul = document.querySelector(".navbar .links ul");
let nav = document.querySelector(".header .links ul");
let imgs = document.querySelectorAll(".imgSlider");
let rightRow = document.querySelector(".header .rowicon i:first-of-type");
let leftRow = document.querySelector(".header .rowicon i:last-of-type");
let selector = 0;
let activateInc = false;

// for slider  *************
// nav button ******************************
buttonNav.onclick = () => {
  if (ul.style.display == "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
};
// ******************************************

bullets.forEach((li) => {
  li.onclick = () => {
    selector = li.getAttribute("data-id");
    removeactive(bullets, li);
    changeImg(selector);
  };
});
rightRow.onclick = () => {
  selector == 2 ? (selector = 0) : selector++;
  let li = document.querySelector(`.bullets li[data-id = "${selector}"]`);
  removeactive(bullets, li);
  changeImg(selector);
};
leftRow.onclick = () => {
  selector == 0 ? (selector = 2) : selector--;
  let li = document.querySelector(`.bullets li[data-id = "${selector}"]`);
  removeactive(bullets, li);
  changeImg(selector);
};

function changeImg(selector) {
  imgs.forEach((img) => {
    img.style.opacity = 1;
    if (img.getAttribute("data-id") != selector) {
      img.style.opacity = 0;
    }
  });
}

// portfolio filter *************************************************************
let button = Array.from(
  document.querySelectorAll(".potfolio .container ul li")
);
let boxes = document.querySelectorAll(".boxes .box");

button.forEach((li) => {
  li.onclick = () => {
    removeactive(button, li, "filterActive");
    switch (li.innerHTML) {
      case "ALL":
        showallbox(boxes);
        break;
      case "APP":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "APP") {
            box.style.display = "none";
          }
        });
        break;
      case "PHOTOGRAPHY":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "PHOTOGRAPHY") {
            box.style.display = "none";
          }
        });
        break;
      case "WEB":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "WEB") {
            box.style.display = "none";
          }
        });
        break;
      case "PRINT":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "PRINT") {
            box.style.display = "none";
          }
        });
        break;
    }
  };
});

function removeactive(array, li, className = "active") {
  array.forEach((li) => {
    li.classList.remove(className);
  });
  li.classList.add(className);
}

function showallbox(boxes = boxes) {
  boxes.forEach((box) => {
    box.style.display = "block";
  });
}

// animate with scrolling ****************
// // **********************************************
// let inc = false;
// let navbar = document.querySelector(".header .navbar");
// let navlia = document.querySelectorAll(".header .links ul li a");
// let wind = document.querySelector(".header .landing");
// 
// let abtSection = document.querySelector(".about");
// let skillsprog = Array.from(
//   document.querySelectorAll(".skills .skill div span")
// );
// let services = document.querySelectorAll(".services .srv");

// // animate services part
// // first translate out the srv by add class translate
// let i = 0;
// services.forEach((srv) => {
//   if (srv.getAttribute("data-n") == 0 || srv.getAttribute("data-n") == 2) {
//     srv.classList.add("translate13");
//   } else {
//     srv.classList.add("translate24");
//   }
// });

// window.onscroll = () => {
//   // navbar part onscroll ***********
//   if (window.scrollY >= 535) {
//     console.log("aahaha");
//     navbar.classList.add("changeBgColor");
//     document.querySelector(".header .head").style.height = "55px";
//     navlia.forEach((a) => {
//       a.style.cssText = "padding-bottom : 19px; color: white ;  ";
//     });
//     navlia.forEach((e) => {
//       e.onmouseenter = () => {
//         e.style.borderColor = "white";
//       };
//     });
//     // hide the hr
//     document.querySelector(".navbar hr").style.display = "none";
//   } else {
//     navbar.classList.remove("changeBgColor");
//     document.querySelector(".header .head").style.height = "80px";
//     document.querySelectorAll(".header .links ul li a").forEach((a) => {
//       a.style.cssText = "padding-bottom : 32.5px; ";
//     });
//     navlia.forEach((e) => {
//       e.onmouseenter = () => {
//         e.style.borderColor = "#19c8fa";
//       };
//     });
//     // show the hr
//     document.querySelector(".navbar hr").style.display = "block";
//   }
//   // end navbar part osncroll
//   // start stats part onscroll "probleme"



//   // end stats *************
//   // start skills progress     4080
//   if (window.scrollY >= 4080) {
//     skillsprog.forEach((prog) => {
//       let progress = prog.getAttribute("data-pogress");
//       prog.style.width = `${progress}`;
//     });
//   }
//   // end skills progress
//   // services animate ********    416
//   if (window.scrollY >= 416) {
//     services.forEach((srv) => {
//       srv.style.opacity = 1;
//       if (srv.getAttribute("data-n") == 0 || srv.getAttribute("data-n") == 2) {
//         srv.classList.remove("translate13");
//       } else {
//         srv.classList.remove("translate24");
//       }
//     });
//   }
//   // phone aniamate part2     950
//   if (window.scrollY >= 950) {
//     // moving the window
//     document.querySelector(".part2 .window").style.right = "0%";
//     // moving the big phone
//     document.querySelector(".part2 .phone-imgs img:first-of-type").style.left =
//       "0%";
//     document.querySelector(".part2 .phone-imgs img:last-of-type").style.left =
//       "140px";
//   }

//   // video part   2700
//   if (window.scrollY >= 2550) {
//     // moving the caption of video
//     document.querySelector(".video .caption").style.top = "50%";
//   }

//   // 3370  aboout
//   if (window.scrollY >= 3370) {
//     // moving the caption of video
//     document.querySelector(".about img").style.cssText = "top: 5px; opacity:1;";
//   }

//   // quote  4600
//   if (window.scrollY >= 4600) {
//     // moving the caption of video
//     document.querySelector(".blackPart h2").style.fontSize = "24px";
//   }

//   // princing 5250
//   if (window.scrollY >= 5250) {
//     // moving the caption of video
//     document.querySelectorAll(".pricing .price").forEach((price) => {
//       price.style.opacity = "1";
//     });
//   }

//   // footer 7100
//   if (window.scrollY >= 7100) {
//     // moving the caption of video
//     document.querySelectorAll(".pricing .price").forEach((price) => {
//       price.style.opacity = "1";
//     });
//   }

//   // ****************
// };

// // landing part
// window.onload = () => {
//   wind.style.left = "0%";
// };

// window.onscroll = () => {
//   // navbar part onscroll ***********
//   if (window.scrollY >= 535) {
//     navbar.classList.add("changeBgColor");
//     // document.querySelector(".header .head").style.height = "55px";
//     // navlia.forEach((a) => {
//     //   a.style.cssText = "padding-bottom : 19px; color: white ;  ";
//     // });
//     navlia.forEach((e) => {
//       e.onmouseenter = () => {
//         e.style.borderColor = "white";
//       };
//     });
//     // hide the hr
//     document.querySelector(".navbar hr").style.display = "none";
//   } else {
//     navbar.classList.remove("changeBgColor");
//     document.querySelector(".header .head").style.height = "80px";
//     document.querySelectorAll(".header .links ul li a").forEach((a) => {
//       a.style.cssText = "padding-bottom : 32.5px; ";
//     });
//     navlia.forEach((e) => {
//       e.onmouseenter = () => {
//         e.style.borderColor = "#19c8fa";
//       };
//     });
//     // show the hr
//     document.querySelector(".navbar hr").style.display = "block";
//   }
// }
