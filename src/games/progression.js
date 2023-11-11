import { runEngine } from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const result = [start];
  let temp = start;
  for (let i = 2; i <= length; i += 1) {
    temp += step;
    result.push(temp);
  }
  return result;
};

const getQuestionAndAnswerGameProgression = () => {
  const progressionArr = createProgression(getRandomNumber(0, 100), getRandomNumber(1, 10));
  const hiddenIndex = getRandomNumber(0, progressionArr.length - 1);
  const correctAnswer = progressionArr[hiddenIndex];
  progressionArr[hiddenIndex] = '..';
  const progressionStr = progressionArr.join(' ');

  const question = `Question: ${progressionStr}`;
  return [question, correctAnswer];
};

export default () => runEngine(rule, getQuestionAndAnswerGameProgression);
