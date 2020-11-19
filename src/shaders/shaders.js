import GlslCanvas from "glslCanvas";
import waterShader from "./water.glsl";
import circleShader from "./circle.glsl";
import worleyShader from "./worley.glsl";
import glitchShader from "./glitch.glsl";

const canvasContainers = document.getElementsByClassName("canvas-container");
const shaders = {
  water: waterShader,
  circle: circleShader,
  worley: worleyShader,
  glitch: glitchShader,
};
const canvases = [];
const imgs = [];

for (let i = 0; i < canvasContainers.length; i++) {
  const canvas = canvasContainers[i].querySelector("canvas");
  const img = canvasContainers[i].querySelector("img");

  canvases.push(canvas);
  imgs.push(img);

  const shader = canvas.dataset.shaderName;
  const sandbox = new GlslCanvas(canvas);
  sandbox.load(shaders[shader]);
  sandbox.paused = true;

  function toggleShader() {
    if (img.classList.contains("img-hide")) {
      img.classList.remove("img-hide");
    } else {
      img.classList.add("img-hide");
    }
    sandbox.paused = !sandbox.paused;
  }

  const toggleHandler = throttle(toggleShader, 200);

  canvasContainers[i].addEventListener("click", toggleHandler);
  canvasContainers[i].addEventListener("touchstart", toggleHandler);
}

// util(s)
function throttle(fn, time) {
  let lastTime;
  return function (...args) {
    if (!lastTime || Date.now() > lastTime + time) {
      fn(...args);
      lastTime = Date.now();
    }
  };
}
