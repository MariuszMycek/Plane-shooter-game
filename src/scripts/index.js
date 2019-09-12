import { keyDownHandler, keyUpHandler, changePhase } from './helpers';
import {
  renderBackground,
  renderTitle,
  renderHeroPlane,
  renderBullets,
  renderEnemyPlanes,
  renderOutro,
  renderScore,
  renderLives,
} from './renders';

import {
  generateHeroBullet,
  generateEnemyPlane,
  initializeObjects,
} from './objectGenerators';
import { PHASES } from './constants';

import '../styles/index.scss';

const startButton = document.querySelector('#startButton');

export const parameters = {
  phaseCounter: 0,
  gamePhase: PHASES.stop,
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
  background: [],
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
  initializeObjects();
  myGameArea.start();
}

function updateGameArea() {
  parameters.phaseCounter++;

  myGameArea.clear();

  renderBackground();

  switch (parameters.gamePhase) {
    case PHASES.start: {
      renderTitle();
      break;
    }

    case PHASES.running: {
      if (parameters.playerHealth > 0) {
        // update parameters
        parameters.enemyGenerationCounter += 1;
        parameters.bulletsDistance += 3;

        // generating objects
        generateEnemyPlane();
        generateHeroBullet();

        // rendering objects
        renderHeroPlane();
        renderBullets();
        renderEnemyPlanes();
      } else {
        changePhase(PHASES.end);
      }
      break;
    }

    case PHASES.end: {
      renderOutro();
      break;
    }
  }

  renderScore();
  renderLives();
}

document.addEventListener('keydown', keyDownHandler);

document.addEventListener('keyup', keyUpHandler);

document.addEventListener('DOMContentLoaded', () => startGame());

startButton.addEventListener('click', () => {
  changePhase(PHASES.start);
});
