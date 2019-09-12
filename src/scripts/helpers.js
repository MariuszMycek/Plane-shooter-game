import { parameters, components } from './index';
import { PHASES } from './constants';

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
  components.gameOver.posY = -50;
  components.endGameInfo.posY = 650;
  components.heroPlane.posX = 285;
  components.heroPlane.posY = 650;
}

export function addPlayerPoint(value) {
  parameters.playerPoints += value;
}

export function subtractThePlayerHealth() {
  parameters.playerHealth--;
}

export function changePhase(phase) {
  parameters.gamePhase = phase;
  parameters.phaseCounter = 0;
}

// steering
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

  switch (parameters.gamePhase) {
    case PHASES.menu: {
      // up
      if (key === 38) {
        if (parameters.activeMenuItemIndex === 0) {
          parameters.activeMenuItemIndex = components.menu.length - 1;
        } else {
          parameters.activeMenuItemIndex--;
        }
        components.menu[parameters.activeMenuItemIndex].animationCounter = 0;
      } else if (key === 40) {
        if (parameters.activeMenuItemIndex === components.menu.length - 1) {
          parameters.activeMenuItemIndex = 0;
        } else {
          parameters.activeMenuItemIndex++;
        }
        components.menu[parameters.activeMenuItemIndex].animationCounter = 0;
      } else if (key === 32) {
        switch (parameters.activeMenuItemIndex) {
          case 0: {
            parameters.gamePhase = PHASES.start;
            break;
          }
        }
      }

      break;
    }

    case PHASES.running: {
      // hero plane movment
      if (key === 37) {
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
      break;
    }

    case PHASES.end: {
      if (key === 32) {
        parameters.gamePhase = PHASES.menu;
      }
      break;
    }
  }
}
