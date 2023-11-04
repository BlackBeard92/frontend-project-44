import {
  game,
  isEven,
  entersAnswer,
  checkingAnswer,
} from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswerGameEven = (name) => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  const answer = entersAnswer();
  const result = isEven(number) ? 'yes' : 'no';
  checkingAnswer(result, answer, name);
};

export default () => game(rule, getQuestionAndAnswerGameEven);
