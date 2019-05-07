window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  fetch("bike-timeline2a.svg")
    .then(res => res.text())
    .then(svgdata => {
      document.querySelector("main").insertAdjacentHTML("afterbegin", svgdata);

      // fitRetangule("#philosopher .HTML_placeholder", ".movie1");
      // fitRetangule("#chamber .HTML_placeholder", ".movie2");
      // fitRetangule("#prisoner .HTML_placeholder", ".movie3");
      // drawLetters();
      animate_1();
      drawPath();
      calulateSizes();

      // console.log(
      //   document
      //     .querySelector(".cls-3")
      //     .getAttribute("transform")
      //     .split(" ", 2)
      // );
    });
}

function drawPath() {
  const ps = document.querySelector(".cls-17a");

  console.log(ps);
  ps.classList.add("draw");
}

function animate_1() {
  console.log(document.querySelector(".cls-2"));

  // TweenMax.to('.panel', 1.5, {scaleY: 1, height:'100vh', ease: Circ.easeOut });

  TweenMax.to("header", 1, {
    opacity: 1,
    left: 0
    // ease: Circ.easeOut
  });
  TweenMax.to(".cls-17", 4, {
    // opacity: 0,
    delay: 5,
    opacity: 1
  });
  TweenMax.fromTo(
    ".cls-13",
    1,
    {
      scale: 0,
      transformOrigin: "50% 50%"
    },
    {
      // opacity: 0,
      delay: 5,
      opacity: 1,
      rotation: -360,
      scale: 1
    }
  );
  TweenMax.to(".cls-2", 3, {
    // opacity: 0,
    delay: 1,
    x: -1000.22
  });

  TweenLite.from(".cls-3", 2, {
    delay: 3,
    y: "-=519",
    ease: Elastic.easeOut.config(0.5, 0.3)
  });
  TweenLite.from(".cls-4", 2, {
    delay: 3,
    y: "-=519",
    ease: Elastic.easeOut.config(0.5, 0.3)
  });
  TweenLite.from(".cls-14", 2, {
    delay: 3,
    y: "-=519",
    ease: Elastic.easeOut.config(0.5, 0.3)
  });
  TweenLite.to(".cls-3", { y: "-=0" });
  TweenLite.to(".cls-4", { y: "-=0" });
  TweenLite.to(".cls-14", { y: "-=0" });
  let animateArray = document.querySelectorAll(".animCircle");

  console.log(animateArray);
  let i;

  for (let i = 0; i < animateArray.length; i++) {
    console.log(i);
    // i++;
    let element = animateArray[i];
    TweenMax.to(element, 1, { delay: i, opacity: 1 });
    console.log(element);

    animateArray[i].addEventListener("mouseover", () => {
      console.log("hehe");
      TweenMax.fromTo(
        element,
        1,
        {
          transformOrigin: "50% 50%",
          rotation: 0
        },
        {
          rotation: -360
        }
      );
    });
  }

  // TweenMax.to('.box', 3, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
}

// var array = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 1 }, { a: 2 }],
//   amount = array.length;

function calulateSizes() {
  const svgPlaceholder = document.querySelectorAll(".svgplaceholder");
  console.log(svgPlaceholder);
  svgPlaceholder.forEach(repalceSVGwithHTML);
}

function repalceSVGwithHTML(htmlElement) {
  //we got an HTMLelement with dta-svgplaceholder
  //We need to find matching SVG element
  // console.log(svgPlaceholder);
  const svgId = htmlElement.dataset.svgplaceholder;
  const svgSelector = "#" + svgId;
  console.log(svgId);
  console.log(htmlElement);
  const svgElement = document.querySelector(svgSelector);

  fitRetangule(svgElement, htmlElement);
}
let headerWidth = document.querySelector("header").offsetWidth;
console.log(headerWidth);

function fitRetangule(svgElement, htmlElement) {
  const rect = svgElement.getBoundingClientRect();

  // htmlElement.style.left = svgElement.getAttribute("x") + "px";
  // htmlElement.style.top = svgElement.getAttribute("y") + "px";

  // htmlElement.style.width = svgElement.getAttribute("width") + "px";
  // htmlElement.style.height = svgElement.getAttribute("height") + "px";

  htmlElement.style.left = rect.x - headerWidth + 0.14 * headerWidth + "px";
  htmlElement.style.top = rect.y + "px";

  htmlElement.style.width = rect.width + "px";
  htmlElement.style.height = rect.height + "px";
}
