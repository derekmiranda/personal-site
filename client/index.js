import style from './css/global.scss';
import Velocity from 'velocity-animate';

const animOrder = [
  'pixelme',
  'header',
  'description',
  'social',
];
const baseFadeInTime = 1500;
const fadeInStep = 500;

document.addEventListener('readystatechange', function () {
  
  if (document.readyState === 'interactive') {

    animOrder.forEach((item, i) => {
      const elem = document.getElementById(item);

      Velocity(elem, 'fadeIn', {
        duration: baseFadeInTime + i*fadeInStep,
      });
    });

  }

});