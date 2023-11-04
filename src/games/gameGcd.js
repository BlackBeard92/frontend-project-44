import {
  game,
  entersAnswer,
  checkingAnswer,
  findGcd,
} from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswerGameGcd = (name) => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  console.log(`Question: ${a} ${b}`);
  const result = findGcd(a, b);
  const answer = Number(entersAnswer());
  checkingAnswer(result, answer, name);
};

export default () => game(rule, getQuestionAndAnswerGameGcd);
