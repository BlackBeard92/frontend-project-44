import {
  entersUsername,
  randomNumber,
  entersAnswer,
  winningStreak,
  findsGcd,
} from '../index.js';

const gameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = entersUsername();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= winningStreak; i += 1) {
    const a = randomNumber();
    const b = randomNumber();

    console.log(`Question: ${a} ${b}`);
    const result = findsGcd(a, b);
    const answer = Number(entersAnswer());
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameGcd;
