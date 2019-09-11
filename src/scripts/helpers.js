import { parameters, components } from './index';

export function AABBIntersect(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx + bw && bx < ax + aw && ay < by + bh && by < ay + ah;
}

export function resetParams() {
  components.enemyPlanes = [];
  components.bullets = [];
  parameters.playerHealth = 6;
  parameters.playerPoints = 0;
  parameters.bulletsDistance = 0;
  parameters.enemyGenerationCounter = 0;
}

export function addPlayerPoint(value) {
  parameters.playerPoints += value;
}

export function subtractThePlayerHealth() {
  parameters.playerHealth--;
}

export function keyUpHandler(event) {
  event.preventDefault();
  let key = event.keyCode;

  // hero plane movment
  if (key === 37) {
    parameters.leftPressed = false;
    components.heroPlane.speedX = 0;
    if (parameters.rightPressed) {
      components.heroPlane.speedX = 2;
    }
  } else if (key === 39) {
    parameters.rightPressed = false;
    components.heroPlane.speedX = 0;
    if (parameters.leftPressed) {
      components.heroPlane.speedX = -2;
    }
  }
  // hero plane shots
  else if (key === 32) {
    parameters.spacePressed = false;
  }
}

export function keyDownHandler(event) {
  event.preventDefault();
  let key = event.keyCode;

  // hero plane movment
  if (key == 37) {
    parameters.leftPressed = true;
    components.heroPlane.speedX = -2;
  } else if (key == 39) {
    parameters.rightPressed = true;
    components.heroPlane.speedX = 2;
  }
  // hero plane shots
  else if (key === 32) {
    parameters.spacePressed = true;
  }
}
