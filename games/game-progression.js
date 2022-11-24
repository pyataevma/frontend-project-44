import getPositiveRandomInteger from '../src/utils.js';
import playGame from '../src/index.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MAX_FIRST_MEMBER = 20;
const MAX_DIFFERENCE = 10;

const showGuide = () => {
  console.log('What number is missing in the progression?');
};

const getQuiz = () => {
  const progressionLength = MIN_LENGTH + getPositiveRandomInteger(MAX_LENGTH - MIN_LENGTH + 1) - 1;
  const hiddenPosition = getPositiveRandomInteger(progressionLength);
  const firstMember = getPositiveRandomInteger(MAX_FIRST_MEMBER);
  const difference = getPositiveRandomInteger(MAX_DIFFERENCE);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const member = firstMember + difference * i;
    progression[i] = `${member}`;
  }
  const answer = `${progression[hiddenPosition - 1]}`;
  progression[hiddenPosition - 1] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const playGameProgression = () => {
  playGame(showGuide, getQuiz);
};

export default playGameProgression;
