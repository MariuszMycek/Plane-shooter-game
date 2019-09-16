import { components, parameters, sounds } from './index';
import EnemyPlane from './components/enemyPlane';
import HeroPlane from './components/heroPlane';
import TextComponent from './components/textComponent';
import Tilte from './components/tilte';
import GameOver from './components/gameOver';
import EndGameInfo from './components/endGameInfo';
import { topScores } from './components/topScores';
import { menu } from './components/menu';
import { background } from './components/background';
import { resultSaving } from './components/resultSaving';
import { WEAPON_TYPE } from './constants';
import BonusCrate from './components/bonusCrate';
import { Howl, Howler } from 'howler';

export function initializeObjects() {
  components.heroPlane = new HeroPlane();
  components.enemyPlanes = [];
  components.bonusCrates = [];
  components.bullets = [];
  components.tilte = new Tilte();
  components.gameOver = new GameOver();
  components.endGameInfo = new EndGameInfo();
  components.scoreText = new TextComponent(15, 30);
  components.livesText = new TextComponent(470, 30);
  components.background = [...background()];
  components.menu = [...menu()];
  components.topScores = [...topScores()];
  components.resultSaving = [...resultSaving()];
}

export function initializeSounds() {
  sounds.singleBullet = new Howl({
    src: ['../../public/assets/audio/Laser_04.m4a'],
    volume: 0.5,
  });
  sounds.piercingBullet = new Howl({
    src: ['../../public/assets/audio/Laser_09.m4a'],
    volume: 0.5,
  });
  sounds.doubleBullet = new Howl({
    src: ['../../public/assets/audio/Laser_05.m4a'],
    volume: 0.5,
  });
  sounds.basicEnemyExplosion = new Howl({
    src: ['../../public/assets/audio/explosion.m4a'],
    volume: 0.5,
  });
  sounds.menuBackground = new Howl({
    src: ['../../public/assets/audio/menuBackground.m4a'],
    volume: 0.5,
    loop: true,
  });
  sounds.shipInterior = new Howl({
    src: ['../../public/assets/audio/shipInterior.m4a'],
    volume: 0.3,
    loop: true,
  });
  sounds.click = new Howl({
    src: ['../../public/assets/audio/click.m4a'],
    volume: 0.5,
  });
  sounds.menuOptionAccept = new Howl({
    src: ['../../public/assets/audio/menuSelect.m4a'],
    volume: 0.5,
  });
  sounds.gameOver = new Howl({
    src: ['../../public/assets/audio/gameOver.m4a'],
    volume: 0.5,
  });
  sounds.bonusAcquire = new Howl({
    src: ['../../public/assets/audio/bonusAcquire.m4a'],
    volume: 0.5,
  });
  sounds.lifeLoose = new Howl({
    src: ['../../public/assets/audio/lifeLoose.m4a'],
    volume: 0.5,
  });
}

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
