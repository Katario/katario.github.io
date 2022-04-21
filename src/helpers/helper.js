let clouds = {};

function getRandomBetween(min, max, decimal) {
  return (Math.random() * (max - min) + min).toFixed(decimal);
}

function changeProperties() {
  Object.values(clouds).forEach((cloud) => {
    cloud.style.setProperty('--opacity-cloud', getRandomBetween(0.4, 0.9, 1));
    cloud.style.setProperty('--scale-cloud', getRandomBetween(0.2, 0.7, 1));
  });
}

export function generateRandomBackground(domElem) {
  clouds = {
    cloud1: domElem.querySelector('.cloud-1'),
    cloud2: domElem.querySelector('.cloud-2'),
    cloud3: domElem.querySelector('.cloud-3'),
    cloud4: domElem.querySelector('.cloud-4'),
    cloud5: domElem.querySelector('.cloud-5'),
  };
  changeProperties();
}

export function goingNuts() {
  console.log('hello');
}
