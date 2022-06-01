function getRandomBetween(min, max, decimal) {
  return (Math.random() * (max - min) + min).toFixed(decimal);
}

function updateCloudProperties(cloud) {
  const duration = getRandomBetween(30, 120);
  cloud.style.setProperty('--opacity-cloud', getRandomBetween(0.4, 0.9, 1));
  cloud.style.setProperty('--scale-cloud', getRandomBetween(0.2, 0.9, 1));
  cloud.style.setProperty('--duration-animation-cloud', duration + 's');
}


export function generateRandomBackground(domElem) {
  const clouds = {
    cloud1: domElem.querySelector('.cloud-1'),
    cloud2: domElem.querySelector('.cloud-2'),
    cloud3: domElem.querySelector('.cloud-3'),
    cloud4: domElem.querySelector('.cloud-4'),
    cloud5: domElem.querySelector('.cloud-5'),
  };
  // changeProperties();

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
}
