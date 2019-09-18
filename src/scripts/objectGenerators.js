import { components, parameters, sounds } from './index';
import EnemyPlane from './components/enemyPlane';
import { WEAPON_TYPE } from './constants';
import BonusCrate from './components/bonusCrate';

export function generateHeroBullet(weaponType) {
  if (parameters.spacePressed) {
    switch (weaponType) {
      case WEAPON_TYPE.singleBullet: {
        if (
          parameters.bulletsDistance > 50 &&
          components.bullets.length <= 15
        ) {
          components.heroPlane.shootSingleBullet();
          sounds.singleBullet.play();
        }
        break;
      }

      case WEAPON_TYPE.doubleBullet: {
        if (
          parameters.bulletsDistance > 50 &&
          components.bullets.length <= 24
        ) {
          components.heroPlane.shootDoubleBullet();
          sounds.doubleBullet.play();
        }
        break;
      }

      case WEAPON_TYPE.piercingBullet: {
        if (
          parameters.bulletsDistance > 50 &&
          components.bullets.length <= 16
        ) {
          components.heroPlane.shootSingleBullet();
          sounds.piercingBullet.play();
        }
        break;
      }
    }
  }
}

export function generateEnemyPlane() {
  if (
    parameters.enemyGenerationCounter >
    Math.floor(Math.random() * 4000) + 50
  ) {
    components.enemyPlanes.push(
      new EnemyPlane(Math.floor(Math.random() * 582 + 2), -40)
    );
    parameters.enemyGenerationCounter = 0;
  }
}

export function generateBonusCrate() {
  if (
    parameters.bonusCrateGenerationCounter >
    // Math.floor(Math.random() * 10000)
    Math.floor(Math.random() * 1000000) + 5000
  ) {
    components.bonusCrates.push(
      new BonusCrate(Math.floor(Math.random() * 582 + 2), -40)
    );
    parameters.bonusCrateGenerationCounter = 0;
  }
}
