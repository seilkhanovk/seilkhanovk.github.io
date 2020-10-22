import { CountUp } from './countUp.min.js';

const displayCountUp = (userInput=-1) => {
  const values = userInput === -1 ? [958, 2778, 5684] : getRandomValues(userInput);

  for (let index=0; index<3; index++) {
    const elementID = 'number'+index;
    const countUp = new CountUp(elementID, values[index]);
    countUp.start();
  }
}

const getRandomValues = (base) => {
  base = parseInt(base)
  const adEarned = { "MIN": Math.floor(base*900/24), "MAX": Math.floor(base*999/24) }
  const adTracked = { "MIN": Math.floor(base*4000/24), "MAX": Math.floor(base*4500/24) }
  const adClicked = { "MIN": Math.floor(base*9500/24), "MAX": Math.floor(base*9999/24) }

  return [(getRandomInt(adEarned.MIN, adEarned.MAX)/403*60), (getRandomInt(adTracked.MIN, adTracked.MAX)/403*60), (getRandomInt(adClicked.MIN, adClicked.MAX)/403*60)]
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
  else alert('Please enter a number');
}

window.onload = () => displayCountUp();

document.getElementById('numberInputSubmit').addEventListener("click", updateValues);
