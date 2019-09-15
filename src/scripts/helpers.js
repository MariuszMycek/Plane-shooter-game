import { parameters, components } from './index';
import { PHASES, WEAPON_TYPE } from './constants';

import { saveTopScores, getTopScores } from './firebase';
import { topScores } from './components/topScores';

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
  components.bonusCrates = [];
}

export function changeWeapon() {
  // random number 0-99
  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber > 0 && randomNumber <= 29) {
    parameters.weaponType = WEAPON_TYPE.doubleBullet;
  } else if (randomNumber > 29 && randomNumber <= 99) {
    parameters.weaponType = WEAPON_TYPE.piercingBullet;
  }
}

export function addPlayerPoint(value) {
  parameters.playerPoints += value;
}

export function subtractThePlayerHealth() {
  parameters.playerHealth--;
  parameters.weaponType = WEAPON_TYPE.singleBullet;
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
      } else if (key === 32 || key === 13) {
        switch (parameters.activeMenuItemIndex) {
          case 0: {
            changePhase(PHASES.start);
            break;
          }

          case 1: {
            changePhase(PHASES.topScores);
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
        changePhase(PHASES.menu);
      }
      break;
    }

    case PHASES.topScores: {
      if (key === 32 || key === 13) {
        changePhase(PHASES.menu);
      }
      break;
    }

    case PHASES.resultSaving: {
      if (key === 8) {
        const str = parameters.inputText;
        parameters.inputText = str.slice(0, str.length - 1);
      } else if (
        parameters.inputText.length < 13 &&
        ((key >= 48 && key <= 57) || (key >= 65 && key <= 90) || key === 32)
      ) {
        parameters.inputText += String.fromCharCode(key);
      } else if (key === 13) {
        const record = {
          name: parameters.inputText,
          score: parameters.playerPoints,
        };
        saveTopScores(record)
          .then(getTopScores())
          .then(() => {
            components.topScores = [...topScores()];
            changePhase(PHASES.topScores);
          });
      }
    }
  }
}
