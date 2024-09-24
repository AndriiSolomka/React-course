"use strict";

const stopBubbling = (event, callback) => {
  event.preventDefault();
  event.stopPropagation();
  callback();
};

export { stopBubbling };
