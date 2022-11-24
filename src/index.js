import readlineSync from 'readline-sync';
import greeting from './cli.js';

const NUMBER_OF_ROUNDS = 3;

const improveUserAnswer = (answer) => answer.trim().toLowerCase();

const startRound = (getQuiz) => {
  const [question, answer] = getQuiz();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const improvedAnswer = improveUserAnswer(userAnswer);
  if (improvedAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

const playGame = (showGuide, getQuiz) => {
  const userName = greeting();
  showGuide();
  for (let i = 1; i <= NUMBER_OF_ROUNDS; i += 1) {
    const isWinningRound = startRound(getQuiz);
    if (!isWinningRound) {
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playGame;
