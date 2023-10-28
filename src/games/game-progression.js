import {
  greetsUser,
  checkingAnswer,
  randomNumber,
  entersAnswer,
  winningStreak,
  createsArithmeticProgression,
} from '../index.js';

const gameProgression = () => {
  const name = greetsUser();
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= winningStreak; i += 1) {
    const progressionArr = createsArithmeticProgression(randomNumber(0, 100));
    const indexNumber = randomNumber(0, 9);
    const result = progressionArr[indexNumber];
    progressionArr[indexNumber] = '..';
    const progressionStr = progressionArr.join(' ');

    console.log(`Question: ${progressionStr}`);
    const answer = Number(entersAnswer());
    checkingAnswer(result, answer, name);
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameProgression;
