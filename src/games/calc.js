import { runEngine } from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';

const createExpression = (a, b, operator) => {
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
  const operator = getRandomNumber(0, operators.length - 1);
  const question = `Question: ${a} ${operators[operator]} ${b}`;
  const correctAnswer = createExpression(a, b, operators[operator]);
  return [question, correctAnswer];
};

export default () => runEngine(rule, getQuestionAndAnswerGameCalc);
