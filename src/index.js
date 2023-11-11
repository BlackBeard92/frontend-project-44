import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const checkingAnswer = (result, answer, name) => {
  let userResponse = answer;
  if (typeof result === 'number') {
    userResponse = Number(userResponse);
  }
  if (result === userResponse) {
    console.log('Correct!');
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${name}!`);
    return;
  }
};

export const generateRound = ([question, correctAnswer], name) => {
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  checkingAnswer(correctAnswer, answer, name);
};

export const runEngine = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);

  for (let i = 1; i <= roundsCount; i += 1) {
    generateRound(getQuestionAndAnswer(), name);
  }
  console.log(`Congratulations, ${name}!`);
};
