import {
  greetsUser,
  checkingAnswer,
  randomNumber,
  entersAnswer,
  winningStreak,
  isPrimes,
} from '../index.js';

const gamePrime = () => {
  const name = greetsUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= winningStreak; i += 1) {
    const number = randomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = entersAnswer();
    const result = isPrimes(number) ? 'yes' : 'no';
    checkingAnswer(result, answer, name);
    console.log(`Congratulations, ${name}!`);
  }
};

export default gamePrime;
