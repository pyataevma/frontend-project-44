import getPositiveRandomInteger from '../src/utils.js';
import playGame from '../src/index.js';

const MAX_RANDOM_NUMBER = 20;

const getSignSymbol = () => {
  const signIndex = getPositiveRandomInteger(3);
  switch (signIndex) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      console.log('Internal error occured');
  }
  return 'Internal error occured';
};

const getAnswer = (firstNumber, secondNumber, signSymbol) => {
  let result;
  switch (signSymbol) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      console.log('Internal error occured');
  }
  return `${result}`;
};

const showGuide = () => {
  console.log('What is the result of the expression?');
};

const getQuiz = () => {
  const firstNumber = getPositiveRandomInteger(MAX_RANDOM_NUMBER);
  const secondNumber = getPositiveRandomInteger(MAX_RANDOM_NUMBER);
  const signSymbol = getSignSymbol();
  const question = `${firstNumber} ${signSymbol} ${secondNumber}`;
  const answer = getAnswer(firstNumber, secondNumber, signSymbol);
  return [question, answer];
};

const playGameCalc = () => {
  playGame(showGuide, getQuiz);
};

export default playGameCalc;
