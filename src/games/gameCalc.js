import {
  greetsUser,
  checkingAnswer,
  entersAnswer,
  winCount,
  choosesRandomOperator,
  createExpression,
} from '../index.js';

import getRandomNumber from '../utils.js';

const gameCalc = () => {
  const name = greetsUser();
  console.log('What is the result of the expression?');

  for (let i = 1; i <= winCount; i += 1) {
    const a = getRandomNumber(0, 100);
    const b = getRandomNumber(0, 100);
    const operator = choosesRandomOperator(['+', '-', '*']);
    console.log(`Question: ${a} ${operator} ${b}`);
    const result = createExpression(a, b, operator);
    const answer = Number(entersAnswer());
    checkingAnswer(result, answer, name);
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameCalc;
