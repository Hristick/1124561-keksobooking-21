'use strict';

const countOfOffer = 8;

const avatarData = [`img/avatars/user01.png`, `img/avatars/user02.png`, `img/avatars/user03.png`, 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
const titleData = ['Однушка в Бутово', 'Сарай на Черемушках', 'Гамак под зонтиком', 'Палатка с удобствами', 'Пентхаус', 'Частный домик'];
const adressData = ['300, 500'];
const priceHousing = ['880', '3320', '1800', '4240', '9800', '34500'];
const typeOfHousing = ['palace', 'flat', 'house', 'bungalow'];
const roomsCount = ['1', '2', '3', '4', '5'];
const guestsCount = ['1', '2', '3', '4', '32']
const checkInTime = ['12:00', '13:00', '14:00'];
const checkOutTime = ['12:00', '13:00', '14:00'];
const featuresData = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptionData = ['Превосходное жилье', 'Чудесная лоджия', 'Тихие соседи'];
const photosLink = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const map = document.querySelector('.map');
const mapPins = document.querySelector('.map__pins');
const mapPinMain = document.querySelector('.map__pin--main');
const mocksPin = document.querySelector('#pin').content.querySelector('.map__pin');
const addForm = document.querySelector('.ad-form');
const pinCordinate = document.querySelector('#address');
const addFormElem = addForm.querySelectorAll('.ad-form__element');
const mapFilters = map.querySelectorAll('.map__filter');
const pointerHeigth = 22;
const roomsNumberCount = addForm.querySelector('#room_number');
const guestCountFormValue = addForm.querySelector('#capacity');
//Функция генерации предложения


const mockOfferData = window.mocks.getOffer(titleData, adressData, priceHousing, typeOfHousing,
  roomsCount, guestsCount, checkInTime, checkOutTime, featuresData, descriptionData, photosLink);

  const mocksData = window.mocks.getData(mockOfferData);

// Задание 4
/**
 * @param formElements {HTMLElememt[]}
 * @param isDisabled {boolean}
 */
function setFormDisabled(formElements, isDisabled) {
  formElements.forEach(element => {
    element.disabled = isDisabled;
  });
}

const deactivateForms = function (){
  addForm.classList.add('ad-form--disabled');
  setFormDisabled(addFormElem, true);
  setFormDisabled(mapFilters, true);
}
deactivateForms();

const activateForms = function activateForms(){
  addForm.classList.remove('ad-form--disabled');
  setFormDisabled(addFormElem, false);
  setFormDisabled(mapFilters, false);
  map.classList.remove('map--faded');
  mapPins.appendChild(renderPins());
}

const mapPin = document.querySelector('.map__pin');

const getMapPinUnactiveCordinate = function () {
  const x = +(mapPin.style.left.replace(/px/g, '')) + +(Math.round(mapPin.clientWidth / 2));
  const y = +(mapPin.style.top.replace(/px/g, '')) + +(Math.round(mapPin.clientHeight / 2));;
  pinCordinate.value = (x + ', ' + y);
}
getMapPinUnactiveCordinate();

const getMapPinActiveCordinate = function () {
  const x = +(mapPin.style.left.replace(/px/g, '')) + +(Math.round(mapPin.clientWidth / 2));
  const y = +(mapPin.style.top.replace(/px/g, '')) + +(Math.round(mapPin.clientHeight) + pointerHeigth);
  pinCordinate.value = (x + ', ' + y);
}



const isFormValidityGuestCount = function () {
  const guestValue = guestCountFormValue.value;
  const roomsValue = roomsNumberCount.value;
  if (roomsValue < guestValue) {
    roomsNumberCount.setCustomValidity('Вас слишком много выберите номер побольше!');
  }
  else {roomsNumberCount.setCustomValidity(``);}
  guestCountFormValue.reportValidity();
}
roomsNumberCount.addEventListener(`change`, isFormValidityGuestCount);
guestCountFormValue.addEventListener(`change`, isFormValidityGuestCount);


const onMainPinKeyPress = function (evt) {
  if(evt.which === 13){
    activateForms();
    getMapPinActiveCordinate();
  }
}
const onMainPinMouseDown = function (evt) {
  if(evt.button === 0){
    activateForms();
    getMapPinActiveCordinate();
  }
}

  mapPinMain.addEventListener('keydown', onMainPinKeyPress);
  mapPinMain.addEventListener('mousedown', onMainPinMouseDown);
