import { runEngine } from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a && b) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a || b;
};

const getQuestionAndAnswerGameGcd = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const question = `Question: ${a} ${b}`;
  const correctAnswer = findGcd(a, b);
  return [question, correctAnswer];
};

export default () => runEngine(rule, getQuestionAndAnswerGameGcd);
