import {
  entersUsername,
  randomNumber,
  entersAnswer,
  winningStreak,
  isEven,
} from '../index.js';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = entersUsername();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= winningStreak; i += 1) {
    const number = randomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = entersAnswer();
    const even = isEven(number);
    if (even && answer === 'yes') {
      console.log('Correct!');
    } else if (!even && answer === 'no') {
      console.log('Correct!');
    } else {
      const correctAnswer = even ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
