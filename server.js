const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const {
  describeLifePath,
  describeDayNumber,
  describeNumerology,
  getNumerologyProfile,
  getLifePath,
} = require("./controller");

app.get(`/api/descLifePath`, describeLifePath);
app.get(`/api/descDayNum`, describeDayNumber);
app.get(`/api/descNumerology`, describeNumerology);
app.get(`/api/numerology/:number`, getNumerologyProfile);
app.get(`/api/numerology/:number`, getLifePath);

const PORT = 4000;
app.listen(4000, () => console.log(`Server running on ${PORT}`));
