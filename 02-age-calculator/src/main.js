import validateInputs from "./validateInputs";

// Age calculate button element
const calculateButtonEl = document.getElementById("calculate-button");
// Input field elements
const dayFieldEl = document.getElementById("day-input");
const monthFieldEl = document.getElementById("month-input");
const yearFieldEl = document.getElementById("year-input");
// Result text elements
const ageYearsEl = document.getElementById("age-years");
const ageMonthsEl = document.getElementById("age-months");
const ageDaysEl = document.getElementById("age-days");

// Calculate user age
calculateButtonEl.addEventListener("click", () => {
  if (validateInputs()) {
    // Get birth date input values
    const birthDay = dayFieldEl.value;
    const birthMonth = monthFieldEl.value;
    const birthYear = yearFieldEl.value;

    const currentDate = new Date();

    // Calculation of year, monoths and days
    let ageYears = currentDate.getFullYear() - birthYear;
    let ageMonths = currentDate.getMonth() - birthMonth;
    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }
    let ageDays = 30 - birthDay + currentDate.getDate();
    if (ageDays > 31) {
      ageMonths += 1;
      ageDays -= 31;
    }

    // Set calculated values
    ageYearsEl.innerText = ageYears;
    ageMonthsEl.innerText = ageMonths;
    ageDaysEl.innerText = ageDays;
  }
});
