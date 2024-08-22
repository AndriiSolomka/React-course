"use strict";

const makeNumArr = (animals) => {
  const arr = [];

  for (let i = 0; i < animals.length; i++) {
    arr.push(i);
  }
  return arr;
};

const generateNumber = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomEl = arr[randomIndex];
  arr.splice(randomIndex, 1);
  return randomEl;
};

export { generateNumber, makeNumArr };
