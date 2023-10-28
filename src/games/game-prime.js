import {
  entersUsername,
  randomNumber,
  entersAnswer,
  winningStreak,
  isPrimes,
} from '../index.js';

const gamePrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = entersUsername();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= winningStreak; i += 1) {
    const number = randomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = entersAnswer();
    const prime = isPrimes(number);
    if (prime && answer === 'yes') {
      console.log('Correct!');
    } else if (!prime && answer === 'no') {
      console.log('Correct!');
    } else {
      const correctAnswer = prime ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gamePrime;
