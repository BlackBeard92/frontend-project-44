import readlineSync from 'readline-sync';
import getRandomNumber from './utils.js';

export const winCount = 3;

export const rules = [
  'What is the result of the expression?',
  'Answer "yes" if the number is even, otherwise answer "no".',
  'Find the greatest common divisor of given numbers.',
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  'What number is missing in the progression?',
];

export const checkingAnswer = (result, answer, name) => {
  if (result === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${name}!`);
    process.exit();
  }
};

export const entersAnswer = () => readlineSync.question('Your answer: ');

export const isEven = (number) => number % 2 === 0;

export const choosesRandomOperator = (operators) => {
  const operator = Math.floor(Math.random() * operators.length);
  return operators[operator];
};

export const findGcd = (num1, num2) => {
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

export const createProgression = (start, step, length = 10) => {
  const result = [start];
  let temp = start;
  for (let i = 2; i <= length; i += 1) {
    temp += step;
    result.push(temp);
  }
  return result;
};

export const isPrime = (num) => {
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

export const createExpression = (a, b, operator) => {
  let result;
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
  return result;
};

export const getQuestionAndAnswerGamePrime = (name) => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  const answer = entersAnswer();
  const result = isPrime(number) ? 'yes' : 'no';
  checkingAnswer(result, answer, name);
};

export const getQuestionAndAnswerGameProgression = (name) => {
  const ProgressionStep = Math.floor(Math.random() * 10) + 1;
  const progressionArr = createProgression(getRandomNumber(0, 100), ProgressionStep);
  const indexNumber = getRandomNumber(0, 9);
  const result = progressionArr[indexNumber];
  progressionArr[indexNumber] = '..';
  const progressionStr = progressionArr.join(' ');

  console.log(`Question: ${progressionStr}`);
  const answer = Number(entersAnswer());
  checkingAnswer(result, answer, name);
};

export const getQuestionAndAnswerGameGcd = (name) => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  console.log(`Question: ${a} ${b}`);
  const result = findGcd(a, b);
  const answer = Number(entersAnswer());
  checkingAnswer(result, answer, name);
};

export const getQuestionAndAnswerGameEven = (name) => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  const answer = entersAnswer();
  const result = isEven(number) ? 'yes' : 'no';
  checkingAnswer(result, answer, name);
};

export const getQuestionAndAnswerGameCalc = (name) => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const operator = choosesRandomOperator(['+', '-', '*']);
  console.log(`Question: ${a} ${operator} ${b}`);
  const result = createExpression(a, b, operator);
  const answer = Number(entersAnswer());
  checkingAnswer(result, answer, name);
};

export const game = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);

  for (let i = 1; i <= winCount; i += 1) {
    getQuestionAndAnswer(name);
  }
  console.log(`Congratulations, ${name}!`);
};
