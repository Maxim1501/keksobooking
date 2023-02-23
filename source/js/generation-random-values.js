/* eslint-disable no-unused-vars */

//Функция возврата случайного числа

const getRandomArbitrary = function (min, max) { // возвращает любое число в диопазоне
  return Math.floor(Math.random() * (max - min) + min);  
};

//Функция на максимальную длину строки

const checkMaxLengthString = function (string, maxLength) {
  if (string.length > maxLength) {
    return;
  }

  return string.length;
};


//Функция число с плавающей точкой из диапазона от.до с указанным количеством знаков после запятой

const getRandomArbitraryQaString = function (min, max, qualityNumber) {
  const randomValue = Math.random() * (max - min) + min;

  if (min > max || min <= 0 || min == max) {
    return;
  }

  return randomValue.toFixed(qualityNumber);
};

const getRandomArrayElement = function (array) { // возвражает случайное значение в массиве 
  const randomIndex = getRandomArbitrary(0, array.length-1);
  return array[randomIndex];
};

export {getRandomArbitrary, getRandomArbitraryQaString, getRandomArrayElement}; 