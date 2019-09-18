import { components, parameters } from './index';

export function renderLoadingScreen() {
  components.loadingScreen.update();
}

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

export function renderMenu() {
  components.menu.forEach(item => {
    item.update();
  });
}

export function renderResultSaving() {
  components.resultSaving[0].update();
  components.resultSaving[1].updateText();
  components.resultSaving[1].update();
}

export function renderTopScores() {
  components.topScores.forEach(item => {
    item.update();
  });
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

export function renderExplosions() {
  components.explosions.forEach(explosion => {
    explosion.update();
    explosion.newPos();
  });
}

export function renderEnemyPlanes() {
  components.enemyPlanes.forEach(enemyPlane => {
    enemyPlane.update();
    enemyPlane.newPos();
    enemyPlane.checkTheGoal();
  });
}

export function renderBonusCrates() {
  components.bonusCrates.forEach(crate => {
    crate.newPos();
    crate.update();
    crate.checkCollision();
  });
}
export function renderOutro() {
  components.gameOver.update();
  components.gameOver.newPos();
  components.endGameInfo.update();
  components.endGameInfo.newPos();
}

export function renderScore() {
  components.scoreText.update();
  components.scoreText.setText('SCORE: ' + parameters.playerPoints);
}

export function renderLives() {
  components.livesText.update();
  components.livesText.setText('LIVES: ' + parameters.playerHealth);
}
