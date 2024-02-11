export function addToPlacehold(listenFor, getLifePath) {
  // Validate date
  function validateDate(date) {
    const datePattern =
      /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-((19|20)\d\d)$/;
    if (!datePattern.test(date)) {
      alert("Please use MM-DD-YYYY and enter a date after 1900.");
      return false;
    }

    const year = parseInt(date.slice(6, 10), 10);
    if (year < 1900 || year > 2100) {
      alert("Invalid year. Please enter a year between 1900 and 2100.");
      return false;
    }

    return true;
  }

  // removing entry on backspace
  listenFor.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (validateDate(this.value)) {
        getLifePath();
      }
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      this.value = "";
    }
  });

  // inserting dashes
  listenFor.addEventListener("input", function () {
    if (
      (this.value.length === 2 || this.value.length === 5) &&
      this.oldValue &&
      this.oldValue.length < this.value.length
    ) {
      this.value += "-";
    }

    if (this.value.length === 2 || this.value.length === 5) {
      this.value += "-";
    }

    this.oldValue = this.value;
  });

  // preventing non-numbers
  listenFor.addEventListener("keypress", function (event) {
    if (!event.key.match(/[0-9]/)) {
      event.preventDefault();
    }
  });

  // placeholder after focus changed
  listenFor.addEventListener("focus", function () {
    this.placeholder = "";
  });
  listenFor.addEventListener("blur", function () {
    if (this.value === "") {
      this.placeholder = "Enter Birthdate";
    }
  });
}

/*

Example usage:

import { changeBackground } from "./components/backgroundChanger.js";
import { controlButton } from "./components/buttonController.js";
import { addToPlacehold } from "./components/inputController.js";

document.addEventListener("DOMContentLoaded", function () {
  const PORT = 8000;
  const BASEURL = `http://localhost:${PORT}/api/`;

  // Other code removed for brevity

  const getLifePath = () => {
    const number = document.getElementById("dayInput").value;
    axios.get(`${BASEURL}numerology/${number}`).then((res) => {
      const data = res.data;
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "dataPage.html";
    });
  };

  // Other code removed for brevity

  addToPlacehold(dayInput, getLifePath);
  
  // Other code removed for brevity

});

*/
