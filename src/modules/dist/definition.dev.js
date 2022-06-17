"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refresh = exports.gameURL = exports.score = exports.name = exports.scoreForm = exports.scoreContainer = void 0;
var scoreContainer = document.querySelector(".score-points");
exports.scoreContainer = scoreContainer;
var scoreForm = document.getElementById("add-scores");
exports.scoreForm = scoreForm;
var name = document.getElementById("name");
exports.name = name;
var score = document.getElementById("score");
exports.score = score;
var gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jqgggRLgcyN3tLOS8kNn/scores/';
exports.gameURL = gameURL;
var refresh = document.getElementById("refresher");
exports.refresh = refresh;