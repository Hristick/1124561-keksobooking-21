'use strict';

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
window.renderPins = {
  renderPins
}
