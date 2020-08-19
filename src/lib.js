import Velocity from 'velocity-animate';

const BASE_FADE_IN_TIME = 1500;
const FADE_IN_STEP = 500;

export function animateInElements(elems) {
  elems.forEach(animateInElement);
}

function animateInElement(elem, i) {
  Velocity(elem, 'fadeIn', {
    duration: BASE_FADE_IN_TIME + i * FADE_IN_STEP,
  });
}