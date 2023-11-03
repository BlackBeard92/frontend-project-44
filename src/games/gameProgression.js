import {
  greetsUser,
  checkingAnswer,
  entersAnswer,
  winCount,
  createProgression,
} from '../index.js';

import getRandomNumber from '../utils.js';

const gameProgression = () => {
  const name = greetsUser();
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= winCount; i += 1) {
    const ProgressionStep = Math.floor(Math.random() * 10) + 1;
    const progressionArr = createProgression(getRandomNumber(0, 100), ProgressionStep);
    const indexNumber = getRandomNumber(0, 9);
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
