const {
  animateInElements
} = require("./lib");

const ANIM_ORDER = [
  'pixelme',
  'header',
  'description',
  'social',
];

const els = []

function main() {
  if (document.readyState === 'interactive') {
    ANIM_ORDER.forEach(id => {
      els.push(document.getElementById(id))
    })
    animateInElements(els);
  }
}

document.addEventListener('readystatechange', main);