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
  renderMenu,
  renderTopScores,
  renderResultSaving,
  renderBonusCrates,
} from './renders';

import {
  generateHeroBullet,
  generateEnemyPlane,
  initializeObjects,
  generateBonusCrate,
  initializeSounds,
} from './objectGenerators';

import { PHASES, WEAPON_TYPE } from './constants';

import { config } from './config';

import '../styles/index.scss';

import { getTopScores } from './firebase';
import { Howler } from 'howler';

// const startButton = document.querySelector('#startButton');

export const parameters = {
  phaseCounter: 0,
  gamePhase: PHASES.menu,
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  directionFactor: [-1, 0, 1],
  enemyGenerationCounter: 0,
  bonusCrateGenerationCounter: 0,
  bulletsDistance: 0,
  playerPoints: 0,
  playerHealth: 6,
  activeMenuItemIndex: 0,
  topScores: [],
  inputText: '',
  weaponType: WEAPON_TYPE.singleBullet,
};

export const components = {};

export const sounds = {};

export const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function() {
    this.canvas.width = config.canvasWidth;
    this.canvas.height = config.canvasHeight;
    this.context = this.canvas.getContext('2d');
    document
      .querySelector('#myCanvas')
      .appendChild(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 10);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function startGame() {
  initializeObjects();
  initializeSounds();
  Howler.mute(true);
  sounds.menuBackground.play();
  myGameArea.start();
}

function updateGameArea() {
  parameters.phaseCounter++;

  myGameArea.clear();

  renderBackground();

  switch (parameters.gamePhase) {
    case PHASES.menu: {
      renderTitle();
      renderMenu();
      break;
    }

    case PHASES.topScores: {
      renderTopScores();

      break;
    }

    case PHASES.start: {
      renderTitle();
      break;
    }

    case PHASES.running: {
      if (parameters.playerHealth > 0) {
        // update parameters
        parameters.enemyGenerationCounter++;
        parameters.bonusCrateGenerationCounter++;
        parameters.bulletsDistance += 3;

        // generating objects
        generateBonusCrate();
        generateEnemyPlane();
        generateHeroBullet(parameters.weaponType);

        // rendering objects
        renderBonusCrates();
        renderBullets();
        renderHeroPlane();
        renderEnemyPlanes();
      } else {
        const { topScores, playerPoints } = parameters;
        const lastResult = topScores[topScores.length - 1].score;
        if (playerPoints > lastResult) {
          changePhase(PHASES.resultSaving);
        } else {
          changePhase(PHASES.end);
        }
      }
      break;
    }

    case PHASES.resultSaving: {
      renderResultSaving();
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

window.onload = () => {
  getTopScores().then(() => {
    startGame();
  });
};

document.querySelector('#mute').addEventListener('click', e => {
  if (Howler._muted) {
    Howler.mute(false);
    e.target.textContent = 'Sound: unmuted';
  } else {
    Howler.mute(true);
    e.target.textContent = 'Sound: muted';
  }
});
