const scoreContainer = document.querySelector(".score-points");
const scoreForm = document.getElementById("add-scores");
const name = document.getElementById("name");
const score = document.getElementById("score");
const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jqgggRLgcyN3tLOS8kNn/scores/'
const refresh = document.getElementById("refresher")

export {
    scoreContainer, scoreForm, name, score, gameURL, refresh
};