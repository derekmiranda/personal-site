import style from './css/global.scss';
import Velocity from 'velocity-animate';

document.addEventListener('readystatechange', function () {
  
  if (document.readyState === 'interactive') {
    const main = document.getElementById('main');

    Velocity(main, 'fadeIn', {
      duration: 2000,
    });
  }

});