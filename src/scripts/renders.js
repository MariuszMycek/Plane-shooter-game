import { components, parameters } from './index';

export function renderBackground() {
  components.background.forEach(bgElement => {
    bgElement.newPos();
    bgElement.update();
  });
}

export function renderTitle() {
  components.tilte.update();
  components.tilte.newPos();
}

export function renderHeroPlane() {
  components.heroPlane.newPos();
  components.heroPlane.update();
}

export function renderBullets() {
  components.bullets.forEach(bullet => {
    bullet.update();
    bullet.newPos();
    bullet.checkCollision();
  });
}

export function renderEnemyPlanes() {
  components.enemyPlanes.forEach(enemyPlane => {
    enemyPlane.update();
    enemyPlane.newPos();
    enemyPlane.checkTheGoal();
  });
}

export function renderOutro() {
  components.endView.update();
  components.endView.newPos();
}

export function renderScore() {
  components.scoreText.update();
  components.scoreText.setText('SCORE: ' + parameters.playerPoints);
}

export function renderLives() {
  components.livesText.update();
  components.livesText.setText('LIVES: ' + parameters.playerHealth);
}