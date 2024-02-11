export function changeBackground(background1, background2, images) {
  let counter = 0;

  const fadeTime = 9800;
  const backgroundTime = 17000;

  setInterval(function () {
    background1.style.backgroundImage = `url(${images[counter]})`;
    counter++;
    if (counter === images.length) counter = 0;
    background2.style.backgroundImage = `url(${images[counter]})`;
    background2.style.opacity = "1";

    setTimeout(function () {
      background1.style.backgroundImage = `url(${images[counter]})`;
      background2.style.opacity = "0";
    }, fadeTime);
  }, backgroundTime);
}

/*
Notes:
- The fadeTime and backgroundTime are in milliseconds
- The backgroundTime must be greater than the fadeTime
- <script type="module" src="./main.js"></script> must be added to the HTML code
- There must be more than 2 images in the array for this to work >
- Current bug: the 2nd background is not fading in >
- A workaround could be that the first background could be black >
- I have not tried this yet

document.addEventListener("DOMContentLoaded", function () {
  const PORT = 8000;
  const BASEURL = `http://localhost:${PORT}/api/`;
  
  // Other code removed for brevity

  const exampleArray = [
    "./backgrounds/background1.JPG",
    "./backgrounds/background2.JPG",
    "./backgrounds/background3.JPG",
  ];

  // Other code removed for brevity
)
*/
