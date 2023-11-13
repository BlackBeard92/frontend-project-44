import { runEngine } from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswerGameEven = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runEngine(rule, getQuestionAndAnswerGameEven);
