import { components, parameters } from './index';
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
// import TextInput from './components/textInput';
// import { gameOverView } from './views/gameOver';

export function initializeObjects() {
  components.heroPlane = new HeroPlane();
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

export function generateHeroBullet(weaponType) {
  if (parameters.spacePressed) {
    switch (weaponType) {
      case WEAPON_TYPE.singleBullet: {
        if (
          parameters.bulletsDistance > 50 &&
          components.bullets.length <= 15
        ) {
          components.heroPlane.shootSingleBullet();
        }
        break;
      }

      case WEAPON_TYPE.doubleBullet: {
        if (
          parameters.bulletsDistance > 50 &&
          components.bullets.length <= 24
        ) {
          components.heroPlane.shootDoubleBullet();
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
      new EnemyPlane(Math.floor(Math.random() * 588), -40)
    );
    parameters.enemyGenerationCounter = 0;
  }
}
