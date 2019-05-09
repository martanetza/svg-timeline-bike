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
      delay: 7,
      opacity: 1,
      rotation: -360,
      scale: 1
    }
  );
  TweenMax.fromTo(
    ".svgplaceholder",
    1,
    {
      scale: 0,
      transformOrigin: "50% 50%"
    },
    {
      // opacity: 0,
      delay: 8,
      opacity: 1,
      // rotation: 360,
      scale: 1
    }
  );
  TweenMax.fromTo(
    ".specialShadow",
    1,
    {
      opacity: 0
    },
    {
      delay: 9,
      opacity: 0.4
    }
  );
  TweenMax.to(".cls-2", 3, {
    // opacity: 0,
    delay: 1,
    x: -1000.22
  });

  TweenLite.from(".cls-3", 2, {
    delay: 8,
    y: "-=519",
    ease: Elastic.easeOut.config(0.5, 0.3)
  });
  TweenLite.from(".cls-4", 2, {
    delay: 8,
    y: "-=519",
    ease: Elastic.easeOut.config(0.5, 0.3)
  });
  TweenLite.from(".cls-14", 2, {
    delay: 8,
    y: "-=519",
    ease: Elastic.easeOut.config(0.5, 0.3)
  });
  TweenLite.to(".cls-3", { y: "-=0" });
  TweenLite.to(".cls-4", { y: "-=0" });
  TweenLite.to(".cls-14", { y: "-=0" });
  let animateArray = document.querySelectorAll(".animCircle");
  let animateArrayGroup = document.querySelectorAll(".animCircleGroup");
  let animatePlaceholder = document.querySelectorAll(".svgplaceholder");

  animatePlaceholder.forEach(myFunct);
  animateArrayGroup.forEach(myFunct);

  function myFunct(elm, i) {
    elm.addEventListener("mouseover", () => {
      console.log(i);
      let elm = animateArray[i];
      let elmGroup = animateArrayGroup[i];

      console.log(animateArrayGroup[i].getBoundingClientRect().top);

      let differ = animatePlaceholder[i].getBoundingClientRect().top;
      animatePlaceholder[i].addEventListener("click", () => {
        console.log("click");
        TweenMax.to(elmGroup, 3, {
          rotation: -360,
          // repeat: -1 /* Aka infinite amount of repeats */,
          stroke: "#6c8f80",
          strokeWidth: "1px",
          strokeDasharray: "6",
          strokeDashoffset: "3",
          ease: Linear.easeNone,
          // transform: "translate(100,100)"
          y: -differ + differ / 2
          // y: -differ / 2
        });
      });

      console.log("hehe");
      TweenMax.fromTo(
        elm,
        3,
        {
          transformOrigin: "50% 50%",
          rotation: 360,
          stroke: "#6c8f80",
          strokeWidth: "1px",
          strokeDasharray: "6",
          strokeDashoffset: "3"
        },
        {
          rotation: -360,
          // repeat: -1 /* Aka infinite amount of repeats */,
          stroke: "#6c8f80",
          strokeWidth: "1px",
          strokeDasharray: "6",
          strokeDashoffset: "3",
          ease: Linear.easeNone
          // transform: "translate(100,100)"
          // y: -differ + 100
          // y: -differ / 2
        }
      );
    });
    elm.addEventListener("mouseout", () => {
      console.log(i);
      let elm = animateArray[i];

      console.log("hehe");
      TweenMax.to(
        elm,
        1,

        {
          rotation: -360,
          stroke: "none"
        }
      );
    });
  }

  console.log(animateArray);
  let i;
  for (let i = 0; i < animateArray.length; i++) {
    let element = animateArray[i];
    TweenMax.to(element, 1, { delay: i / 1.6, opacity: 1 });
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
  // console.log(svgId);
  // console.log(htmlElement);
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

  htmlElement.style.left = rect.x - headerWidth + headerWidth / 5 + "px";
  htmlElement.style.top = rect.y + "px";

  htmlElement.style.width = rect.width + "px";
  htmlElement.style.height = rect.height + "px";
}

function loadJSON() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => showJSONdata(data));
}

loadJSON();

function showJSONdata(data) {
  console.log(data);

  template = document.querySelector("template");
  data.forEach(element => {
    let clone = template.cloneNode(true).content;
    clone.querySelector("h1").textContent = element.time;
    // clone.querySelector("img").src =
    //   "svg_plus_json/" + element.image + ".jpg";
    // clone.querySelector("[data-field='year']").textContent = element.year;
    // clone.querySelector("[data-field='director']").textContent =
    //   element.director;
    console.log(element.id);

    document
      .querySelector("[data-svgplaceholder='date_" + element.id + "']")
      .appendChild(clone);
  });
}
