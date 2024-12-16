// RGB Colors

//vars
let previewBtnEl = document.getElementById("preview-btn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");

// Event Listeners
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

// Event Function
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  //validate colors (constrain colors)
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  // Process: build rgb string rbg(___, ___, ___)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the color preview
  rgbStringOutEl = rgbString;
  displayEl.style.background = rgbString;
}

//size change vars
let widthChange = document.getElementById("width-inpt");
let heightChange = document.getElementById("height-inpt");

widthChange.addEventListener("change", changeSize);
heightChange.addEventListener("change", changeSize);

function changeSize() {
  displayEl.style.width = widthChange.value + "px";
  displayEl.style.height = heightChange.value + "px";

  if (widthChange > 400) {
    widthChange = 400;
    widthChange.value = 400;
  } else if (widthChange < 50) {
    widthChange = 50;
    widthChange.value = 50;
  }

  if (heightChange > 200) {
    heightChange = 200;
    heightChange.value = 200;
  } else if (heightChange < 50) {
    heightChange = 50;
    heightChange.value = 50;
  }
}

let blackInpt = document.getElementById("blackIn");
let whiteInpt = document.getElementById("whiteIn");
let whiteString = "rgb(0, 0, 0)";
let blackString = "rgb(255, 255, 255)";

blackInpt.addEventListener("click", blackChange);
whiteInpt.addEventListener("click", whiteChange);

function blackChange() {
  displayEl.style.background = whiteString;
}

function whiteChange() {
  displayEl.style.background = blackString;
}
