const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const BASEURL = `/api/`;
const {
  describeLifePath,
  describeDayNumber,
  describeNumerology,
  getNumerologyProfile,
  getLifePath,
} = require("./controller");

app.get(`${BASEURL}compliment`, describeLifePath);
app.get(`${BASEURL}fortune`, describeDayNumber);
app.get(`${BASEURL}aurelius`, describeNumerology);
app.get(`${BASEURL}numerology/:number`, getNumerologyProfile);
app.get(`${BASEURL}numerology/:number`, getLifePath);

const PORT = 4000;
app.listen(4000, () => console.log(`Server running on ${PORT}`));
