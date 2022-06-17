import { name, score } from './definition.js';

const User = () => {
    
  const userName = name.value;
  const userScore = score.value;
  const userInput = {
    user: userName,

    score: userScore,
  };
  return userInput;

};

export default User;
