document.addEventListener("DOMContentLoaded", function () {
  const PORT = 4000;
  const BASEURL = `http://localhost:${PORT}/api/`;

  // background image transition
  const images = [
    "./background1.JPG",
    "./background2.JPG",
    "./background3.JPG",
    "./background4.JPG",
    "./background5.JPG",
    "./background6.JPG",
    "./background7.JPG",
    "./background8.JPG",
  ];
  let counter = 0;

  setInterval(function () {
    background1.style.backgroundImage = `url(${images[counter]})`;
    counter++;
    if (counter === images.length) counter = 0;
    background2.style.backgroundImage = `url(${images[counter]})`;
    background2.style.opacity = "1";

    setTimeout(function () {
      background1.style.backgroundImage = `url(${images[counter]})`;
      background2.style.opacity = "0";
    }, 7100); // transition duration
  }, 9800); // change image every 5000 milliseconds (5 seconds)

  const submitBtn = document.getElementById("submitButton");
  const numerologyBtn = document.getElementById("whatIsNumerology");
  const lifePathBtn = document.getElementById("whatIsALifePath");
  const dayNumBtn = document.getElementById("whatIsADayNumber");
  const dayInput = document.getElementById("dayInput");

  const describeLifePath = () => {
    axios.get(`${BASEURL}compliment/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  const describeDayNumber = () => {
    axios.get(`${BASEURL}fortune/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  const describeNumerology = () => {
    axios.get(`${BASEURL}aurelius/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  const dateInput = () => {
    const number = document.getElementById("dayInput").value;
    axios.get(`${BASEURL}numerology/${number}`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  const getLifePath = () => {
    const number = document.getElementById("dayInput").value;
    axios.get(`${BASEURL}numerology/${number}`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  lifePathBtn.addEventListener("click", describeLifePath);
  dayNumBtn.addEventListener("click", describeDayNumber);
  numerologyBtn.addEventListener("click", describeNumerology);
  submitBtn.addEventListener("click", getLifePath);

  // backspace to delete dashes
  dayInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      dateInput();
    }

    if (event.key === "Backspace") {
      const cursorPosition = this.selectionStart;
      if (this.value[cursorPosition - 1] === "-") {
        event.preventDefault();
        this.value = this.value.slice(0, cursorPosition - 2) + this.value.slice(cursorPosition);
      }
    }
  });

  // inserting dashes
  dayInput.addEventListener("input", function () {
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
  dayInput.addEventListener("keypress", function (event) {
    if (!event.key.match(/[0-9]/)) {
      event.preventDefault();
    }
  });

  // placeholder after focus changed
  dayInput.addEventListener("focus", function () {
    this.placeholder = "";
  });
  dayInput.addEventListener("blur", function () {
    if (this.value === "") {
      this.placeholder = "MM-DD-YYYY";
    }
  });
});
