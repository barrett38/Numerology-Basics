const express = require("express");
const app = express();

const PORT = 8000;
const cors = require("cors");
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

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
