import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const runEngine = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    let userResponse = answer;
    if (typeof correctAnswer === 'number') {
      userResponse = Number(userResponse);
    }
    if (correctAnswer !== userResponse) {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
