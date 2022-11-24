import getPositiveRandomInteger from '../src/utils.js';
import playGame from '../src/index.js';

const MAX_RANDOM_NUMBER = 50;

const showGuide = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (number) => {
  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getQuiz = () => {
  const randomNumber = getPositiveRandomInteger(MAX_RANDOM_NUMBER) + 1;
  const question = `${randomNumber}`;
  const answer = getAnswer(randomNumber);
  return [question, answer];
};

const playGamePrime = () => {
  playGame(showGuide, getQuiz);
};

export default playGamePrime;
