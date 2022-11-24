import getPositiveRandomInteger from '../src/utils.js';
import playGame from '../src/index.js';

const MAX_RANDOM_NUMBER = 100;

const showGuide = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getAnswer = (firstNumber, secondNumber) => {
  const smallerNumber = (firstNumber < secondNumber) ? firstNumber : secondNumber;
  for (let i = smallerNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return `${i}`;
    }
  }
  return 'Internal error with GCD';
};

const getQuiz = () => {
  const firstNumber = getPositiveRandomInteger(MAX_RANDOM_NUMBER);
  const secondNumber = getPositiveRandomInteger(MAX_RANDOM_NUMBER);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getAnswer(firstNumber, secondNumber);
  return [question, answer];
};

const playGameGcd = () => {
  playGame(showGuide, getQuiz);
};

export default playGameGcd;
