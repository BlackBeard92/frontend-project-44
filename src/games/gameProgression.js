import {
  game,
  entersAnswer,
  checkingAnswer,
  createProgression,
} from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const getQuestionAndAnswerGameProgression = (name) => {
  const ProgressionStep = Math.floor(Math.random() * 10) + 1;
  const progressionArr = createProgression(getRandomNumber(0, 100), ProgressionStep);
  const indexNumber = getRandomNumber(0, 9);
  const result = progressionArr[indexNumber];
  progressionArr[indexNumber] = '..';
  const progressionStr = progressionArr.join(' ');

  console.log(`Question: ${progressionStr}`);
  const answer = Number(entersAnswer());
  checkingAnswer(result, answer, name);
};

export default () => game(rule, getQuestionAndAnswerGameProgression);
