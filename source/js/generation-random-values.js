/* eslint-disable no-unused-vars */

//Функция возвращает случайное число

const getRandomArbitrary = function (min, max) { 
  return Math.floor(Math.random() * (max - min) + min);  
};

//Функция возвращает максимальную длину строки

const checkMaxLengthString = function (string, maxLength) {
  if (string.length > maxLength) {
    return;
  }

  return string.length;
};


//Функция возвращает число с плавающей точкой из диапазона от.до с указанным количеством знаков после запятой

const getRandomArbitraryQaString = function (min, max, qualityNumber) {
  const randomValue = Math.random() * (max - min) + min;

  if (min > max || min <= 0 || min == max) {
    return;
  }

  return randomValue.toFixed(qualityNumber);
};

// Функция возвращает случайное значение в массиве

const getRandomArrayElement = function (array) {  
  const randomIndex = getRandomArbitrary(0, array.length-1);
  return array[randomIndex];
};

export {getRandomArbitrary, getRandomArbitraryQaString, getRandomArrayElement}; 