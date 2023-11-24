const buttonEl = document.getElementById("generate-button");
const quoteEl = document.getElementById("quote");
const numerationEl = document.getElementById("numeration");

const fetchAdvice = async function () {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  quoteEl.innerText = data.slip.advice;
  numerationEl.innerText = data.slip.id;
};

fetchAdvice();

buttonEl.addEventListener("click", () => {
  const advice = fetchAdvice();
});
