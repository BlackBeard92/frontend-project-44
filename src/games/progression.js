import { runEngine } from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

const generateRound = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 10);
  const length = 10;
  const progression = createProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const progressionStr = progression.join(' ');
  return [progressionStr, answer];
};

export default () => runEngine(rule, generateRound);
