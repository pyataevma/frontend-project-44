import readlineSync from 'readline-sync';
import greeting from './cli.js';

const MAX_RANDOM_NUMBER = 50;
const NUMBER_OF_ROUNDS = 3;

const getRandomInteger = () => Math.floor(Math.random() * MAX_RANDOM_NUMBER + 1);

const isNumberEven = (number) => (number % 2 === 0);

const improveAnswer = (answer) => answer.trim().toLowerCase();

const getCorretAnswer = (number) => (isNumberEven(number) ? 'yes' : 'no');

const startRound = () => {
  const randomNumber = getRandomInteger();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const improvedAnswer = improveAnswer(userAnswer);
  const correctAnswer = getCorretAnswer(randomNumber);
  if (improvedAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const playGameEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= NUMBER_OF_ROUNDS; i += 1) {
    const isWinningRound = startRound();
    if (!isWinningRound) {
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playGameEven;
