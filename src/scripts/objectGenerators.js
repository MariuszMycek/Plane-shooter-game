import { components, parameters } from './index';
import EnemyPlane from './components/enemyPlane';
import HeroPlane from './components/heroPlane';
import TextComponent from './components/textComponent';
import Tilte from './components/tilte';
import EndView from './components/endView';
import Background from './components/background';

export function initializeObjects() {
  components.heroPlane = new HeroPlane();
  components.tilte = new Tilte(203, 300);
  components.endView = new EndView(236, -50);
  components.scoreText = new TextComponent(15, 30);
  components.livesText = new TextComponent(470, 30);
  components.background = [new Background(0), new Background(-822)];
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
