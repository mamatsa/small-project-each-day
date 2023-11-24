const colorPickButton = document.getElementById("color-pick-btn");
const chosenColor = document.getElementById("chosen-color");
const main = document.getElementById("main");
const appModeSimple = document.getElementById("nav-app-mode-simple");
const appModeHex = document.getElementById("nav-app-mode-hex");

let pickSimpleColors = false;

appModeSimple.addEventListener("click", () => {
  pickSimpleColors = true;
  appModeSimple.style.color = "black";
  appModeHex.style.color = "#00000080";
});

appModeHex.addEventListener("click", () => {
  pickSimpleColors = false;
  appModeHex.style.color = "black";
  appModeSimple.style.color = "#00000080";
});

const simpleColors = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "white",
  "yellow",
];
const colorCodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

colorPickButton.addEventListener("click", (e) => {
  let randomColor = "";
  if (pickSimpleColors) {
    randomColor += simpleColors[Math.floor(Math.random() * 15)];
  } else {
    randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += colorCodes[Math.floor(Math.random() * 15)];
    }
  }
  main.style.backgroundColor = randomColor;
  chosenColor.innerText = randomColor;
});
