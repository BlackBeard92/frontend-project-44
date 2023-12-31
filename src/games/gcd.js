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

const generateRound = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const answer = String(findGcd(a, b));
  return [`${a} ${b}`, answer];
};

export default () => runEngine(rule, generateRound);
