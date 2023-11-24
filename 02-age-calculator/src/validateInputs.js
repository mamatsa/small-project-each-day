const validateInputs = () => {
  // Number of valid inputs
  let validInputs = 0;

  // Input field elements
  const dayFieldEl = document.getElementById("day-input");
  const monthFieldEl = document.getElementById("month-input");
  const yearFieldEl = document.getElementById("year-input");
  // Input Field container elements
  const dayFieldContainerEl = document.getElementById("day-input-container");
  const monthFieldContainerEl = document.getElementById(
    "month-input-container"
  );
  const yearFieldContainerEl = document.getElementById("year-input-container");

  // Day input validations
  if (!dayFieldEl.value) {
    dayFieldContainerEl.classList.add("error");
    dayFieldContainerEl.querySelector(".error-message").innerText =
      "This field is required";
  } else if (
    isNaN(dayFieldEl.value) ||
    +dayFieldEl.value < 1 ||
    +dayFieldEl.value > 31
  ) {
    dayFieldContainerEl.classList.add("error");
    dayFieldContainerEl.querySelector(".error-message").innerText =
      "Must be a valid day";
  } else {
    dayFieldContainerEl.classList.remove("error");
    dayFieldContainerEl.querySelector(".error-message").innerText = "";
    validInputs++;
  }

  // Month input field validatoins
  if (!monthFieldEl.value) {
    monthFieldContainerEl.classList.add("error");
    monthFieldContainerEl.querySelector(".error-message").innerText =
      "This field is required";
  } else if (
    isNaN(monthFieldEl.value) ||
    +monthFieldEl.value < 1 ||
    +monthFieldEl.value > 12
  ) {
    monthFieldContainerEl.classList.add("error");
    monthFieldContainerEl.querySelector(".error-message").innerText =
      "Must be a valid month";
  } else {
    monthFieldContainerEl.classList.remove("error");
    monthFieldContainerEl.querySelector(".error-message").innerText = "";
    validInputs++;
  }

  // Year input field validations
  if (!yearFieldEl.value) {
    yearFieldContainerEl.classList.add("error");
    yearFieldContainerEl.querySelector(".error-message").innerText =
      "This field is required";
  } else if (isNaN(yearFieldEl.value)) {
    yearFieldContainerEl.classList.add("error");
    yearFieldContainerEl.querySelector(".error-message").innerText =
      "Must be a valid year";
  } else if (+yearFieldEl.value > new Date().getFullYear()) {
    yearFieldContainerEl.classList.add("error");
    yearFieldContainerEl.querySelector(".error-message").innerText =
      "Must be in the past";
  } else {
    yearFieldContainerEl.classList.remove("error");
    yearFieldContainerEl.querySelector(".error-message").innerText = "";
    validInputs++;
  }
  return validInputs === 3;
};

export default validateInputs;
