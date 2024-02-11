import { changeBackground } from "./components/backgroundChanger.js";
import { controlButton } from "./components/buttonController.js";
import { addToPlacehold } from "./components/inputController.js";

document.addEventListener("DOMContentLoaded", function () {
  const PORT = 8000;
  const BASEURL = `http://localhost:${PORT}/api/`;

  const describeLifePath = () => {
    axios.get(`${BASEURL}descLifePath`).then((res) => {
      const data = res.data;
      alert(data);
    });
  };

  const describeDayNumber = () => {
    axios.get(`${BASEURL}descDayNum`).then((res) => {
      const data = res.data;
      alert(data);
    });
  };

  const describeNumerology = () => {
    axios.get(`${BASEURL}descNumerology`).then((res) => {
      const data = res.data;
      alert(data);
    });
  };

  const getLifePath = () => {
    const number = document.getElementById("dayInput").value;
    axios.get(`${BASEURL}numerology/${number}`).then((res) => {
      const data = res.data;
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "dataPage.html";
    });
  };

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

  const background1 = document.getElementById("background1");
  const background2 = document.getElementById("background2");
  const submitBtn = document.getElementById("submitButton");
  const numerologyBtn = document.getElementById("whatIsNumerology");
  const lifePathBtn = document.getElementById("whatIsALifePath");
  const dayNumBtn = document.getElementById("whatIsADayNumber");
  const dayInput = document.getElementById("dayInput");
  const btnPauseTime = 5300;

  changeBackground(background1, background2, images);
  controlButton(submitBtn, btnPauseTime);
  controlButton(numerologyBtn, btnPauseTime);
  controlButton(lifePathBtn, btnPauseTime);
  controlButton(dayNumBtn, btnPauseTime);
  addToPlacehold(dayInput, getLifePath);

  lifePathBtn.addEventListener("click", describeLifePath);
  dayNumBtn.addEventListener("click", describeDayNumber);
  numerologyBtn.addEventListener("click", describeNumerology);
  submitBtn.addEventListener("click", getLifePath);
});
