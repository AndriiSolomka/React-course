"use strict";

const API = "https://api.github.com/users";
const STARS_INFO = "/repos?per_page=100";
const DEFAULT_PLAYER_1_INPUT = "Player 1";
const DEFAULT_PLAYER_2_INPUT = "Player 2";
const battlePlayerInfo = {
  followers: "",
  starsCount: "",
};

const FIRST_PLAYER = "first";
const SECOND_PLAYER = "second";

export {
  API,
  STARS_INFO,
  DEFAULT_PLAYER_1_INPUT,
  DEFAULT_PLAYER_2_INPUT,
  battlePlayerInfo,
  FIRST_PLAYER,
  SECOND_PLAYER,
};
