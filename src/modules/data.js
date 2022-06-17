import { gameURL, scoreContainer } from "./definition.js";

const data = () => {
   scoreContainer.innerHTML = '';
    fetch(gameURL)
      .then((res) => res.json())
      .then((data) => {
        data.result.forEach((data) => {
         scoreContainer.innerHTML += `
        <li>${data.user}: ${data.score}</li>`;
        });
       console.log(data);
      });
  };

  export default data;
  