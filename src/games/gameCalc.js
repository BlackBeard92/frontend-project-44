import {
  game,
  entersAnswer,
  checkingAnswer,
  choosesRandomOperator,
  createExpression,
} from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';

const getQuestionAndAnswerGameCalc = (name) => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const operator = choosesRandomOperator(['+', '-', '*']);
  console.log(`Question: ${a} ${operator} ${b}`);
  const result = createExpression(a, b, operator);
  const answer = Number(entersAnswer());
  checkingAnswer(result, answer, name);
};

export default () => game(rule, getQuestionAndAnswerGameCalc);
