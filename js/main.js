'use strict';

const countOfOffer = 8;
const avatarData = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
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



const getRandomValue = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

const getRandomNumbers = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
//Функция генерации предложения
const getOfferMock =  function (titleData, adressData, priceHousing, typeOfHousing,
  roomsCount, guestsCount, checkInTime, checkOutTime, featuresData, descriptionData, photosLink) {
    const mockOfferArray = [];
    for (let i = 0; i < countOfOffer; i++) {
      mockOfferArray.push({
        title: getRandomValue(titleData),
        address: getRandomValue(adressData),
        price: getRandomValue(priceHousing),
        type: getRandomValue(typeOfHousing),
        rooms: getRandomValue(roomsCount),
        guests: getRandomValue(guestsCount),
        checkIn: getRandomValue(checkInTime),
        checkOut: getRandomValue(checkOutTime),
        features: getRandomValue(featuresData),
        description: getRandomValue(descriptionData),
        photos: getRandomValue(photosLink)
      });
    }
    return mockOfferArray;
  }

  const mockOfferData = getOfferMock(titleData, adressData, priceHousing, typeOfHousing,
    roomsCount, guestsCount, checkInTime, checkOutTime, featuresData, descriptionData, photosLink);

    // Функция генерации массива с моками
  const getMockData = function(mockOfferData) {
    const mocks = [];
    for (let i = 0; i <countOfOffer; i++) {
        const author = {
          avatar: getRandomValue(avatarData)
        };
        const offer = mockOfferData[i];
        const location = {
          x: getRandomNumbers(0, map.clientWidth),
          y: getRandomNumbers(130, 630)}
        mocks.push({author, offer, location})
    }
    return mocks;
  }
  const mocksData =  getMockData(mockOfferData);

  document.querySelector('.map').classList.remove('map--faded');
  const mocksPin = document.querySelector('#pin').content.querySelector(`.map__pin`);


  const renderPins = function() {
    const fragment = document.createDocumentFragment();
      for (let i = 0; i < countOfOffer; i++) {
        let pinElement = mocksPin.cloneNode(true);
        const img = mocksPin.querySelector('img');
        img.src = mocksData[i].author.avatar;
        img.alt = mocksData[i].offer.title;
        pinElement.style = `left: ${mocksData[i].location.x - img.width / 2}px;
                            top: ${mocksData[i].location.y - img.height}px;}`;
        fragment.append(pinElement);
      }
      return fragment;
  }


mapPins.appendChild(renderPins());
