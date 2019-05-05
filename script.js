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
  }
  // TweenMax.to('.box', 3, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
}

// var array = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 1 }, { a: 2 }],
//   amount = array.length;
