import HeroPlane from './HeroPlane';
import EnemyPlane from './EnemyPlane';
import TextComponent from './TextComponent';
import StartView from './StartView';
import EndView from './EndView';
import { keyDownHandler, keyUpHandler } from './helpers';

import '../styles/index.scss';

const startButton = document.querySelector('#startButton');

export const parameters = {
  gameStatus: 'stop',
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  directionFactor: [-1, 0, 1],
  enemyGenerationCounter: 0,
  bulletsDistance: 0,
  playerPoints: 0,
  playerHealth: 6,
};

export const components = {
  heroPlane: null,
  enemyPlanes: [],
  bullets: [],
};

export const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function() {
    this.canvas.width = 618;
    this.canvas.height = 620;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 10);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function startGame() {
  components.heroPlane = new HeroPlane();
  components.startView = new StartView(-400, 300);
  components.endView = new EndView(236, -50);

  components.scoreText = new TextComponent(15, 30);
  components.livesText = new TextComponent(470, 30);

  myGameArea.start();
}

function generateEnemyPlane() {
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

function updateGameArea() {
  myGameArea.clear();

  switch (parameters.gameStatus) {
    case 'start': {
      components.startView.update();
      components.startView.newPos();
      break;
    }

    case 'running': {
      if (parameters.playerHealth > 0) {
        parameters.enemyGenerationCounter += 1;
        generateEnemyPlane();
        parameters.bulletsDistance += 3;

        components.heroPlane.newPos();
        components.heroPlane.update();

        components.bullets.forEach(bullet => {
          bullet.update();
          bullet.newPos();
          bullet.checkCollision();
        });

        if (
          parameters.spacePressed &&
          parameters.bulletsDistance > 50 &&
          components.bullets.length <= 15
        ) {
          components.heroPlane.shootTheBullet();
        }

        components.enemyPlanes.forEach(enemyPlane => {
          enemyPlane.update();
          enemyPlane.newPos();
          enemyPlane.checkTheGoal();
        });
      } else {
        parameters.gameStatus = 'end';
      }
      break;
    }
    case 'end': {
      components.endView.update();
      components.endView.newPos();
      break;
    }
  }
  components.scoreText.update();
  components.scoreText.setText('SCORE: ' + parameters.playerPoints);
  components.livesText.update();
  components.livesText.setText('LIVES: ' + parameters.playerHealth);
}

document.addEventListener('keydown', keyDownHandler);

document.addEventListener('keyup', keyUpHandler);

document.addEventListener('DOMContentLoaded', () => startGame());

startButton.addEventListener('click', () => {
  parameters.gameStatus = 'start';
});
