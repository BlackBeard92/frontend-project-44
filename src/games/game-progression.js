import {
  entersUsername,
  randomNumber,
  entersAnswer,
  winningStreak,
  createsArithmeticProgression,
} from '../index.js';

const gameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = entersUsername();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= winningStreak; i += 1) {
    const progressionArr = createsArithmeticProgression(randomNumber(0, 100));
    const indexNumber = randomNumber(0, 9);
    const result = progressionArr[indexNumber];
    progressionArr[indexNumber] = '..';
    const progressionStr = progressionArr.join(' ');

    console.log(`Question: ${progressionStr}`);
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

export default gameProgression;
