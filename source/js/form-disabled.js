/* eslint-disable no-unused-vars */
const form = document.querySelector('.ad-form');
const elementsForm = form.elements;
const formFilter = document.querySelector('.map__filters-container').classList.add('map__filters-container--disabled');
const formDisabled = document.querySelector('.ad-form').classList.add('ad-form--disabled');


function disabledForm() {
  for (let i = 0; i < elementsForm.length; i++) {
    elementsForm[i].disabled = true;
  }
}

export { disabledForm }