import {
  greetsUser,
  checkingAnswer,
  entersAnswer,
  winCount,
  isPrime,
} from '../index.js';

import getRandomNumber from '../utils.js';

const gamePrime = () => {
  const name = greetsUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= winCount; i += 1) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = entersAnswer();
    const result = isPrime(number) ? 'yes' : 'no';
    checkingAnswer(result, answer, name);
    console.log(`Congratulations, ${name}!`);
  }
};

export default gamePrime;
