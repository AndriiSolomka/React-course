"use strict";

import { API, STARS_INFO } from "../constants/constants";

const imageService = {
  get: async (userName) => {
    try {
      const request = await fetch(API + `/${userName}`),
        response = await request.json();

      if (response.status === "404") {
        return "NOT FOUND";
      } else {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

const starsInfoService = {
  get: async (userName) => {
    try {
      const request = await fetch(API + `/${userName}` + STARS_INFO),
        response = await request.json();

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export { imageService, starsInfoService };
