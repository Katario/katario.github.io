function getRandomBetween(min, max, decimal) {
  return (Math.random() * (max - min) + min).toFixed(decimal);
}

function updateCloudProperties(cloud) {
  const duration = getRandomBetween(30, 120);
  cloud.style.setProperty('--opacity-cloud', getRandomBetween(0.4, 0.9, 1));
  cloud.style.setProperty('--scale-cloud', getRandomBetween(0.2, 0.9, 1));
  cloud.style.setProperty('--duration-animation-cloud', duration + 's');
}

function generateStar(x, y) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = x + 'px';
  star.style.top = y + 'px';

  star.style.setProperty('--star-size', getRandomBetween(1, 3) + 'px');
  star.style.setProperty('--twinkle-duration', getRandomBetween(1, 5) + 's');
  star.style.setProperty('--star-delay', getRandomBetween(1, 30) + 's');

  return star;
}

export function generateRandomBackground(domElem) {
  const clouds = {
    cloud1: domElem.querySelector('.cloud-1'),
    cloud2: domElem.querySelector('.cloud-2'),
    cloud3: domElem.querySelector('.cloud-3'),
    cloud4: domElem.querySelector('.cloud-4'),
    cloud5: domElem.querySelector('.cloud-5'),
  };

  Object.values(clouds).forEach((cloud) => {
    cloud.addEventListener(
      'animationstart',
      () => updateCloudProperties(cloud)
    );
    cloud.addEventListener(
      'animationiteration',
      () => updateCloudProperties(cloud)
    )}
  );

  const nightsky = domElem.querySelector('.nightsky');
  for (let index = 0; index < 500; index++) {
    let x = getRandomBetween(1, nightsky.offsetWidth);
    let y = getRandomBetween(1, nightsky.offsetHeight);

    nightsky.append(generateStar(x, y));
  }
}
