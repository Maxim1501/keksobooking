import {createRandomOffers} from './generation-similar-offers.js';

const mapCanvas = document.querySelector('.map__canvas');

const popup = document.querySelector('#card').content.querySelector('.popup');

const similarPopups = createRandomOffers();

const mapCanvasFragment = document.createDocumentFragment();


similarPopups.forEach((offer) => { // Функция вызывается ради побочного эффекта
  const popupElement = popup.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = offer.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} Р/ночь`;
  popupElement.querySelector('.popup__type').textContent = offer.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rows} комнат для ${offer.offer.quest} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  popupElement.querySelector('.popup__features').children.textContent = offer.offer.features;
  popupElement.querySelector('.popup__description').textContent = offer.offer.description;
  popupElement.querySelector('.popup__photos').src = offer.offer.photos;
  popupElement.querySelector('.popup__avatar').src = offer.author.avatar;

  mapCanvasFragment.appendChild(popupElement);
});

mapCanvas.appendChild(mapCanvasFragment);

export {similarPopups}
