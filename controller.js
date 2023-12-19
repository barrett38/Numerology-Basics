const number1 =
  "The Number 1 represents Male Energy. Peoeple who are 1 Life Paths or who are born on a 1 day are natural born leaders. They are independent, courageous, and have a pioneering spirit. They are creative, original, and have a strong desire to be 'number one.' In a bad frame of mind 1's can be self-centered, arrogant, and stubborn.";
const number2 =
  "The Number 2 represents Feminine energy. People who are born on a 2 day are sensitive, intuitive, and diplomatic. They are cooperative, adaptable, and have a strong desire to be liked. In a bad frame of mind 2's can be passive-aggressive, manipulative, and have a hard time making decisions. There is no Life Path Number 2.";
const number3 =
  "The Number 3 represents the Trinity. People who are Life Path 3's or who are born on a 3 day are creative, expressive, and have a strong desire to be seen. They are optimistic, fun-loving, and have a youthful spirit. In a bad frame of mind 3's can be vain, egotistical, and have a hard time following through.";
const number4 =
  "The Number 4 represents the four directions. 4 also represents protection, safety, justice, and right and wrong. People who are Life Path 4's or who are born on a 4 day are hard-working, practical, and have a strong desire to be productive. They are loyal, trustworthy, and have a strong sense of responsibility. In a bad frame of mind 4's can be stubborn, rigid, and have a hard time relaxing.";
const number5 =
  "The Number 5 represents the 5 senses. 5 also represents beauty, freedom, change, and adventure. People who are Life Path 5's or who are born on a 5 day are curious, adventurous, and have a strong desire to be free. They are adaptable, versatile, and have a youthful spirit. In a bad frame of mind 5's can be restless, impulsive, and have a hard time committing.";
const number6 =
  "The Number 6 represents love, family, and community. People who are Life Path 6's or who are born on a 6 day are nurturing, compassionate, and have a strong desire to be of service. They are responsible, generous, and have a strong sense of justice. In a bad frame of mind 6's can be self-righteous, critical, and have a hard time letting go of close family and friends.";
const number7 =
  "The Number 7 represents the 7 days of the week. 7 also represents spirituality, intuition, and introspection. People who are Life Path 7's or who are born on a 7 day are analytical, thoughtful, and have a strong desire to be alone. They are studious, wise, and have a strong sense of spirituality. In a bad frame of mind 7's can be cynical, sarcastic, and have a hard time trusting others. 7 is believed to be an unlucky number. People born on 7 days may have difficult births.";
const number8 =
  "The Number 8 represents infinity. 8 also represents power, money, and abundance. People who are Life Path 8's or who are born on a 8 day are ambitious, goal-oriented, and have a strong desire to be successful. They are confident, efficient, and have a strong sense of justice. In a bad frame of mind 8's can be greedy, materialistic, and have a hard time delegating.";
const number9 =
  "The Number 9 represents the end of a cycle. 9 also represents compassion, generosity, and humanitarianism. People who are Life Path 9's or who are born on a 9 day are compassionate, generous, and have a strong desire to be of service. In a bad frame of mind 9's can be very lazy. They will 'go with the flow' and let others do the work if they do not want to address the issue.";
const number11 =
  "The Number 11 is a Master Number. 11 is the most intuitive of all numbers. People who are Life Path 11's or who are born on a 11 day are intuitive, sensitive, and have a strong desire to help others. They are inspirational, visionary, and have a strong sense of spirituality. In a bad frame of mind 11's can be anxious, nervous, and have a hard time trusting others. If a birthday reduces to 2 they are an 11 Life Path.";
const number22 =
  "The Number 22 is a Master Number. 22 is the most powerful of all numbers. People who are Life Path 22's or who are born on a 22 day are visionary, practical, and have a strong desire to build. They are ambitious, hard-working, and have a strong sense of justice. In a bad frame of mind 22's can be stubborn, rigid, and have a hard time relaxing.";
const number33 =
  "The Number 33 is a Master Number. 33 is the most influential of all numbers. People who are Life Path 33's are compassionate, generous, and have a strong desire to help others. They are inspirational, visionary, and have a strong sense of spirituality. In a bad frame of mind 33's can be anxious, nervous, and have a hard time trusting others.";
const getRandom = co => co[Math.floor(Math.random() * co.length)];

function getNumerologyProfile(number0) {
  let number_1 = number0.replace(/[^0-9/]/g, "");
  number = number0.replace(/[^0-9/]/g, "").substring(2, 4);
  forLifePath = number.replace(/[^0-9/]/g, "");
  number = parseInt(number);
  let dayNum = 0;
  let numerologyQuote;
  if (number === 1 || number === 10 || number === 19 || number === 28 || number === 37 || number === 46) {
    numerologyQuote = `${number1}`;
    dayNum = 1;
  } else if (number === 2 || number === 20) {
    numerologyQuote = `${number2}`;
    dayNum = 2;
  } else if (number === 3 || number === 12 || number === 21 || number === 30) {
    numerologyQuote = `${number3}`;
    dayNum = 3;
  } else if (number === 4 || number === 13 || number === 31) {
    numerologyQuote = `${number4}`;
    dayNum = 4;
  } else if (number === 5 || number === 14 || number === 23) {
    numerologyQuote = `${number5}`;
    dayNum = 5;
  } else if (number === 6 || number === 15 || number === 24) {
    numerologyQuote = `${number6}`;
    dayNum = 6;
  } else if (number === 7 || number === 16 || number === 25) {
    numerologyQuote = `${number7}`;
    dayNum = 7;
  } else if (number === 8 || number === 17 || number === 26) {
    numerologyQuote = `${number8}`;
    dayNum = 8;
  } else if (number === 9 || number === 18 || number === 27) {
    numerologyQuote = `${number9}`;
    dayNum = 9;
  } else if (number === 11 || number === 29) {
    numerologyQuote = `${number11}`;
    dayNum = 11;
  } else if (number === 22) {
    numerologyQuote = `${number22}`;
    dayNum = 22;
  } else if (number === 33) {
    numerologyQuote = `${number33}`;
    dayNum = 33;
  } else {
    numerologyQuote = "Please enter a valid numerology number between 1 and 31.";
  }

  number_1 = number_1.split("").map(Number);
  let sum = number_1.reduce((a, b) => a + b, 0);
  let lifePath;
  if (
    sum === 10 ||
    sum === 19 ||
    sum === 28 ||
    sum === 37 ||
    sum === 46 ||
    sum === 55 ||
    sum === 64 ||
    sum === 73 ||
    sum === 82 ||
    sum === 91
  ) {
    lifePathQuote = `${number1}`;
    lifePath = 1;
  } else if (
    sum === 11 ||
    sum === 20 ||
    sum === 29 ||
    sum === 38 ||
    sum === 47 ||
    sum === 56 ||
    sum === 65 ||
    sum === 74 ||
    sum === 83 ||
    sum === 92
  ) {
    lifePathQuote = `${number11}`;
    lifePath = 11;
  } else if (
    sum === 3 ||
    sum === 12 ||
    sum === 21 ||
    sum === 30 ||
    sum === 39 ||
    sum === 48 ||
    sum === 57 ||
    sum === 66 ||
    sum === 75 ||
    sum === 84 ||
    sum === 93
  ) {
    lifePathQuote = `${number3}`;
    lifePath = 3;
  } else if (
    sum === 4 ||
    sum === 13 ||
    sum === 31 ||
    sum === 40 ||
    sum === 49 ||
    sum === 58 ||
    sum === 67 ||
    sum === 76 ||
    sum === 85 ||
    sum === 94
  ) {
    lifePathQuote = `${number4}`;
    lifePath = 4;
  } else if (
    sum === 5 ||
    sum === 14 ||
    sum === 23 ||
    sum === 32 ||
    sum === 41 ||
    sum === 50 ||
    sum === 59 ||
    sum === 68 ||
    sum === 77 ||
    sum === 86 ||
    sum === 95
  ) {
    lifePathQuote = `${number5}`;
    lifePath = 5;
  } else if (
    sum === 6 ||
    sum === 15 ||
    sum === 24 ||
    sum === 42 ||
    sum === 51 ||
    sum === 60 ||
    sum === 69 ||
    sum === 78 ||
    sum === 87 ||
    sum === 96
  ) {
    lifePathQuote = `${number6}`;
    lifePath = 6;
  } else if (
    sum === 5 ||
    sum === 16 ||
    sum === 25 ||
    sum === 34 ||
    sum === 43 ||
    sum === 52 ||
    sum === 61 ||
    sum === 70 ||
    sum === 79 ||
    sum === 88 ||
    sum === 97
  ) {
    lifePathQuote = `${number7}`;
    lifePath = 7;
  } else if (
    sum === 8 ||
    sum === 17 ||
    sum === 26 ||
    sum === 35 ||
    sum === 44 ||
    sum === 53 ||
    sum === 62 ||
    sum === 71 ||
    sum === 80 ||
    sum === 89 ||
    sum === 98
  ) {
    lifePathQuote = `${number8}`;
    lifePath = 8;
  } else if (
    sum === 18 ||
    sum === 27 ||
    sum === 36 ||
    sum === 45 ||
    sum === 54 ||
    sum === 63 ||
    sum === 72 ||
    sum === 81 ||
    sum === 90 ||
    sum === 99
  ) {
    lifePathQuote = `${number9}`;
    lifePath = 9;
  } else if (sum === 22) {
    lifePathQuote = `${number22}`;
  } else if (sum === 33) {
    lifePathQuote = `${number33}`;
  } else {
    lifePathQuote = "Please enter a valid date.";
  }
  if (lifePath === dayNum) {
    numerologyQuote = `In your case, your Day Number and Life Path Number are the same.`;
  }

  const finalQuote = `Your Life Path Number is ${lifePath}. ${lifePathQuote} Your Day Number is ${dayNum}. ${numerologyQuote}`;
  return finalQuote;
}

module.exports = {
  describeLifePath: (req, res) => {
    const describeLifePath = [
      `Your Life Path Number is what determines your potential and  who you are capable of being. In some ways this number represents who you are meant to be. Not everyone lives up to their Life Paths and not everyone is meant to.`,
    ];
    res.status(200).send(describeLifePath);
  },
  describeDayNumber: (req, res) => {
    const dayNum = [
      `The Day Number is the number of the day you were born on. It is where you default to. The Day Number determines your skills, morals, and opinions that you were born with. Many people will live in their Day Number until they are ready to live up to their Life Path Number.`,
    ];
    res.status(200).send(dayNum);
  },
  describeNumerology(req, res) {
    const numerology = [
      `Numerology is the study of numbers and their meanings. It is believed that numbers have a direct correlation with all nature and divinity. Numbers have meanings because we place meaning behind numbers. Numerology is a tool that helps us understand our lives and the world around us better. Numerology is above Astrology.`,
    ];
    res.status(200).send(getRandom(numerology));
  },
  getNumerologyProfile: (req, res) => {
    const { number } = req.params;
    const numerologyQuote = getNumerologyProfile(number);
    res.status(200).send(numerologyQuote);
  },
  getLifePath: (req, res) => {
    const { date } = req.params;
    const lifePathQuote = getLifePath(date);
    res.status(200).send(lifePathQuote);
  },
};
