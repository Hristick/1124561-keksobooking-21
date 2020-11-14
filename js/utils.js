'use strict';
(function () {
  const getRandomValue = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };

  const getRandomNumbers = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  window.utils = {
    getRandomValue,
    getRandomNumbers
  }
})();
