import style from './css/global.scss';
import Velocity from 'velocity-animate';

const animOrder = [
  'pixelme',
  'header',
  'description',
  'social',
];
const BASE_FADE_IN_TIME = 1500;
const FADE_IN_STEP = 500;

function main() {
  if (document.readyState === 'interactive') {

    animOrder.forEach((item, i) => {
      const elem = document.getElementById(item);

      Velocity(elem, 'fadeIn', {
        duration: BASE_FADE_IN_TIME + i * FADE_IN_STEP,
      });
    });

  }
}

document.addEventListener('readystatechange', main);