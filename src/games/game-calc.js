import {
  greetsUser,
  checkingAnswer,
  randomNumber,
  entersAnswer,
  winningStreak,
  choosesRandomOperator,
} from '../index.js';

const gameCalc = () => {
  const name = greetsUser();
  console.log('What is the result of the expression?');

  for (let i = 1; i <= winningStreak; i += 1) {
    const a = randomNumber(0, 100);
    const b = randomNumber(0, 100);
    const operator = choosesRandomOperator(['+', '-', '*']);
    let result;
    console.log(`Question: ${a} ${operator} ${b}`);

    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      default:
        result = undefined;
    }

    const answer = Number(entersAnswer());
    checkingAnswer(result, answer, name);
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameCalc;
