import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
      <!-- Input fields -->
      <form action="">
        <div id="day-input-container" class="input-container">
          <input id="day-input" type="number" name="day" placeholder="DD" />
        </div>
        <div id="month-input-container" class="input-container">
          <input id="month-input" type="number" name="month" placeholder="MM" />
        </div>
        <div id="year-input-container" class="input-container">
          <input id="year-input" type="number" name="year" placeholder="YYYY" />
        </div>
      </form>

      <!-- Calculate Button -->
      <div id="button-container">
        <hr />
        <button id="calculate-button" type="button">calc</button>
      </div>

      <!-- Calculated age -->
      <ul id="calculated-age">
        <li id="calculated-years">-- years</li>
        <li id="calculated-months">-- months</li>
        <li id="calculated-days">-- days</li>
      </ul>
  </div>
`;
