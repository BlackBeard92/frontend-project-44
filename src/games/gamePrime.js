import {
  game,
  isPrime,
  entersAnswer,
  checkingAnswer,
} from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswerGamePrime = (name) => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  const answer = entersAnswer();
  const result = isPrime(number) ? 'yes' : 'no';
  checkingAnswer(result, answer, name);
};

export default () => game(rule, getQuestionAndAnswerGamePrime);
