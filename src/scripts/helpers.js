import { parameters, components, sounds } from './index';
import { PHASES, WEAPON_TYPE } from './constants';

// chcecking collision of two objects
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

export function enemyAchievesTheGoal() {
  parameters.playerHealth--;
  parameters.weaponType = WEAPON_TYPE.singleBullet;
  sounds.lifeLoose.play();
}

export function changePhase(phase) {
  parameters.gamePhase = phase;
  parameters.phaseCounter = 0;
  changePhaseSounds(phase);
}

export function changePhaseSounds(phase) {
  switch (phase) {
    case PHASES.menu: {
      if (!sounds.background.playing()) {
        sounds.background.play();
      }
      break;
    }

    case PHASES.start: {
      sounds.background.fade(0.5, 0.2, 500);
      sounds.shipInterior.play();
      sounds.shipInterior.fade(0, 0.3, 2000);
      break;
    }

    case PHASES.resultSaving:

    case PHASES.end: {
      sounds.shipInterior.fade(0.3, 0, 500);
      sounds.gameOver.play();
      sounds.background.fade(0.2, 0.5, 2000);
      break;
    }
  }
}
