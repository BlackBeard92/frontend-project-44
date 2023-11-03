import {
  greetsUser,
  checkingAnswer,
  entersAnswer,
  winCount,
  isEven,
} from '../index.js';

import getRandomNumber from '../utils.js';

const gameEven = () => {
  const name = greetsUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= winCount; i += 1) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = entersAnswer();
    const result = isEven(number) ? 'yes' : 'no';
    checkingAnswer(result, answer, name);
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
