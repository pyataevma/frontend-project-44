import getPositiveRandomInteger from '../src/utils.js';
import playGame from '../src/index.js';

const MAX_RANDOM_NUMBER = 50;

const showGuide = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const isNumberEven = (number) => (number % 2 === 0);

const getAnswer = (number) => (isNumberEven(number) ? 'yes' : 'no');

const getQuiz = () => {
  const randomNumber = getPositiveRandomInteger(MAX_RANDOM_NUMBER);
  const question = `${randomNumber}`;
  const answer = getAnswer(randomNumber);
  return [question, answer];
};

const playGameEven = () => {
  playGame(showGuide, getQuiz);
};

export default playGameEven;
