import { gameURL, scoreContainer } from './definition.js';
const data = () => {
    scoreContainer.innerHTML = '';
    fetch(gameURL)
      .then((res) => res.json())
      .then((data) => {
        data.result.forEach((data) => {
          scoreContainer.innerHTML += `
          <li>${data.user}: ${data.score}</li>`;
        });
      });
  };
  
  export default data;
  