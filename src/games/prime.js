import { runEngine } from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswerGamePrime = () => {
  const number = getRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runEngine(rule, getQuestionAndAnswerGamePrime);
