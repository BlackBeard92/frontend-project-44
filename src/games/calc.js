import { runEngine } from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAndAnswerGameCalc = () => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(a, b, operator));
  return [question, answer];
};

export default () => runEngine(rule, getQuestionAndAnswerGameCalc);
