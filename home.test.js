import { showSlides, resetSlides } from "./Home.js";

// const { showSlides, resetSlides, currentSlide, plusSlides } = require("./Home");

describe("Slider functionality", () => {
  let slides;
  let thumbnails;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <div className="mySlides" style="display:none"> </div>
        <div className="mySlides" style="display:none"> </div>
        <div className="mySlides" style="display:none"> </div>
      </div>
      <div>
        <span class="demo"></span>
        <span class="demo"></span>
        <span class="demo"></span>
      </div>
    `;

    slides = document.getElementsByClassName("mySlides");
    thumbnails = document.getElementsByClassName("demo");
  });
  afterEach(() => {
    resetSlides();
  });

  test("show the slide that have display block", () => {
    showSlides();
    execpt(slide[0].style.display).toBe("block");
    execpt(slide[1].style.display).toBe("none");
    execpt(slide[2].style.display).toBe("none");
  });
});

// test av dynmiska sliden
//- action: onclick av plusSlides(-1)
//- expect to increament slide Number
