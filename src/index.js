import readlineSync from 'readline-sync';

export const winningStreak = 3;

export const entersUsername = () => readlineSync.question('May I have your name? ');

export const randomNumber = () => Math.floor(Math.random() * 101) + 1;

export const entersAnswer = () => readlineSync.question('Your answer: ');

export const isEven = (number) => number % 2 === 0;
