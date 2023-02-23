/* eslint-disable no-unused-vars */

import {getRandomArbitrary, getRandomArbitraryQaString, getRandomArrayElement} from './generation-random-values.js';

//Выполненное задание по сгенерированию десяти рендомных объектов по заданым условиям + сложить в массив

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];
const TITLES = ['Дом 100 кв.м', 'Квартира 23 кв.м', 'Гараж'];
const TYPES = ['palace', 'flat', 'house', 'hyngalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wift','wishaser','parking','washer','elevator','conditioner'];
const DESCRIPTIONS = ['Все четко','Хорошая квартира не дорого','Огромный дом для тусы'];
const PHOTOS = ['Ссылка1', 'Ссылка2', 'Ссылка3'];
const LOCATION = {x: [35.555, 36.666], y: [105.555, 106.666]};



const createRandomOffers = (length) => {
  const offers = [];

  for (let i = 0; i < length; i++) {
  
    offers.push({

      author: {
        avatar: getRandomArrayElement(AVATARS),
      },

      offer: {
        title: getRandomArrayElement(TITLES),
        address: '{{location.x}}, {{location.y}}',
        price: getRandomArbitrary(10, 1000),
        type: getRandomArrayElement(TYPES),
        rows: getRandomArbitrary(1, 10),
        quest: getRandomArbitrary(20, 50),
        checkin: getRandomArrayElement(CHECKINS),
        checkout: getRandomArrayElement(CHECKOUTS),
        features: getRandomArrayElement(FEATURES),
        description: getRandomArrayElement(DESCRIPTIONS),
        photos: getRandomArrayElement(PHOTOS),
      },

      location: {
        x: getRandomArbitraryQaString(35.65000, 35.70000, 8),
        y: getRandomArbitraryQaString(139.7000, 139.8000, 8),
      },

    });
  }
  return offers;
};

const offers = createRandomOffers(10);
// eslint-disable-next-line no-console
console.log(offers);

export {createRandomOffers, offers};