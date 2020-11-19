import GlslCanvas from "glslCanvas";
import waterShader from "./water.glsl";
import circleShader from "./circle.glsl";
import worleyShader from "./worley.glsl";
import glitchShader from "./glitch.glsl";

const canvasEls = document.getElementsByClassName("glslCanvas");
const shaders = {
  water: waterShader,
  circle: circleShader,
  worley: worleyShader,
  glitch: glitchShader,
};

for (let i = 0; i < canvasEls.length; i++) {
  const canvas = canvasEls[i];
  const shader = canvas.dataset.shaderName;
  const sandbox = new GlslCanvas(canvasEls[i]);
  sandbox.load(shaders[shader]);
}
