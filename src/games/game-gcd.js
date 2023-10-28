import {
  greetsUser,
  checkingAnswer,
  randomNumber,
  entersAnswer,
  winningStreak,
  findsGcd,
} from '../index.js';

const gameGcd = () => {
  const name = greetsUser();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= winningStreak; i += 1) {
    const a = randomNumber(1, 100);
    const b = randomNumber(1, 100);

    console.log(`Question: ${a} ${b}`);
    const result = findsGcd(a, b);
    const answer = Number(entersAnswer());
    checkingAnswer(result, answer, name);
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameGcd;
