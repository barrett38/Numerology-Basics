document.addEventListener("DOMContentLoaded", function () {
  const PORT = 4000;
  const BASEURL = `http://localhost:${PORT}/api/`;

  // background image transition
  const images = [
    "./backgrounds/background1.JPG",
    "./backgrounds/background2.JPG",
    "./backgrounds/background3.JPG",
    "./backgrounds/background4.JPG",
    "./backgrounds/background5.JPG",
    "./backgrounds/background6.JPG",
    "./backgrounds/background7.JPG",
    "./backgrounds/background8.JPG",
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
    }, 9800);
  }, 17000);

  const submitBtn = document.getElementById("submitButton");
  const numerologyBtn = document.getElementById("whatIsNumerology");
  const lifePathBtn = document.getElementById("whatIsALifePath");
  const dayNumBtn = document.getElementById("whatIsADayNumber");

  // Disable the buttons initially
  submitBtn.disabled = true;
  numerologyBtn.disabled = true;
  lifePathBtn.disabled = true;
  dayNumBtn.disabled = true;

  // Enable the buttons after the transition duration
  setTimeout(function () {
    submitBtn.disabled = false;
    numerologyBtn.disabled = false;
    lifePathBtn.disabled = false;
    dayNumBtn.disabled = false;
  }, 5300);

  const describeLifePath = () => {
    axios.get(`${BASEURL}descLifePath`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  const describeDayNumber = () => {
    axios.get(`${BASEURL}descDayNum`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  const describeNumerology = () => {
    axios.get(`${BASEURL}descNumerology`).then(res => {
      const data = res.data;
      alert(data);
    });
  };

  const getLifePath = () => {
    const number = document.getElementById("dayInput").value;
    axios.get(`${BASEURL}numerology/${number}`).then(res => {
      const data = res.data;
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "dataPage.html";
    });
  };

  lifePathBtn.addEventListener("click", describeLifePath);
  dayNumBtn.addEventListener("click", describeDayNumber);
  numerologyBtn.addEventListener("click", describeNumerology);
  submitBtn.addEventListener("click", getLifePath);

  // removing dashes
  dayInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      getLifePath();
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
      this.placeholder = "Enter Birthdate";
    }
  });
});
