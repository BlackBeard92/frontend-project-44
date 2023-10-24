import readlineSync from 'readline-sync';

export const winningStreak = 3;

export const entersUsername = () => readlineSync.question('May I have your name? ');

export const randomNumber = () => Math.floor(Math.random() * 101) + 1;

export const entersAnswer = () => readlineSync.question('Your answer: ');

export const isEven = (number) => number % 2 === 0;

export const choosesRandomOperator = (operators) => {
  const operator = Math.floor(Math.random() * operators.length);
  return operators[operator];
};

export const findsGcd = (num1, num2) => {
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
