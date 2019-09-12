import { components, parameters } from './index';
import EnemyPlane from './components/enemyPlane';
import HeroPlane from './components/heroPlane';
import TextComponent from './components/textComponent';
import Tilte from './components/tilte';
import GameOver from './components/gameOver';
import Background from './components/background';
import MenuItem from './components/menuItem';
import EndGameInfo from './components/endGameInfo';

export function initializeObjects() {
  components.heroPlane = new HeroPlane();
  components.tilte = new Tilte(null, 300);
  components.gameOver = new GameOver(null, -50);
  components.endGameInfo = new EndGameInfo(null, 650);
  components.scoreText = new TextComponent(15, 30);
  components.livesText = new TextComponent(470, 30);
  components.background = [new Background(0), new Background(-822)];
  components.menu = [
    new MenuItem(203, 400, 'NEW GAME', 0),
    new MenuItem(203, 450, 'RECORDS', 1),
  ];
}

export function generateHeroBullet() {
  if (
    parameters.spacePressed &&
    parameters.bulletsDistance > 50 &&
    components.bullets.length <= 15
  ) {
    components.heroPlane.shootTheBullet();
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
