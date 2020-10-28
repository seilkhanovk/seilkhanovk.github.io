import { CountUp } from './countUp.min.js';

const displayCountUp = (userInput=-1) => {
  const values = userInput === -1 ? getRandomValues(userInput) : getCalculatedValues(userInput);

  for (let index=0; index<3; index++) {
    const elementID = 'number'+index;
    const countUp = new CountUp(elementID, values[index]);
    countUp.start();
  }
}

const getCalculatedValues = (base) => {
  base = parseInt(base);
  const adEarned = base*60*2.23325062;
  const adTracked = base*60*9.925558313;
  const adClicked = base*60*23.573200993;

  return [adEarned, adTracked, adClicked];
}

const getRandomValues = (base) => {
  base = parseInt(base);
  const adEarned = { "MIN": Math.floor(900), "MAX": Math.floor(999) };
  const adTracked = { "MIN": Math.floor(4000), "MAX": Math.floor(4500) };
  const adClicked = { "MIN": Math.floor(9500), "MAX": Math.floor(9999) };

  return [getRandomInt(adEarned.MIN, adEarned.MAX), getRandomInt(adTracked.MIN, adTracked.MAX), getRandomInt(adClicked.MIN, adClicked.MAX)];
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

const updateValues = (event) => {
  event.preventDefault();

  const userInput = document.getElementById('numberInputBox').value;
  const NUM_REGEX = /^\d+$/;

  if (NUM_REGEX.test(userInput)) {
    const userNumber = parseInt(userInput);
    if (userNumber >= 0 && userNumber <= 24) displayCountUp(parseInt(userInput));
    else alert('Please enter an an amount between 0 and 24.');
  }
  else alert('Please enter a round number.');
}

window.onload = () => displayCountUp();

document.getElementById('numberInputSubmit').addEventListener("click", updateValues);
