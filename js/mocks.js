'use strict';

(function () {
    const {getRandomValue, getRandomNumbers} = window.utils;
  const getData = function(mockOfferData) {
    const mocks = [];
    for (let i = 0; i <countOfOffer; i++) {
        const author = {
          avatar: getRandomValue(avatarData)
        };
        const offer = mockOfferData[i];
        const location = {
          x: getRandomNumbers(0, map.clientWidth),
          y: getRandomNumbers(130, 630),
        };
        mocks.push({author, offer, location})
    }
    return mocks;
  }

  const getOffer =  function (titleData, adressData, priceHousing, typeOfHousing,
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
    window.mocks = {
      getData,
      getOffer,
    };
})();
