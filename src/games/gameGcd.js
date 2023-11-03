import {
  greetsUser,
  checkingAnswer,
  entersAnswer,
  winCount,
  findGcd,
} from '../index.js';

import getRandomNumber from '../utils.js';

const gameGcd = () => {
  const name = greetsUser();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= winCount; i += 1) {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);

    console.log(`Question: ${a} ${b}`);
    const result = findGcd(a, b);
    const answer = Number(entersAnswer());
    checkingAnswer(result, answer, name);
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameGcd;
