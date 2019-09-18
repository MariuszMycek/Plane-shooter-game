import { PHASES } from './constants';
import { changePhase } from './helpers';
import { images, parameters, sounds, components } from './index';
import HeroPlane from './components/heroPlane';
import TextComponent from './components/textComponent';
import Tilte from './components/tilte';
import GameOver from './components/gameOver';
import EndGameInfo from './components/endGameInfo';
import { topScores } from './components/topScores';
import { menu } from './components/menu';
import { background } from './components/background';
import { resultSaving } from './components/resultSaving';

const imagesPath = 'public/assets/images/';
const spritesPath = 'public/assets/sprites/';
const audiosPath = 'public/assets/audio/';

const spritesToLoad = ['explosions.png'];
const imagesToLoad = [
  'crate.png',
  'enemyPlane.png',
  'gameBG.png',
  'heroPlane.png',
];
const audioToLoad = [
  {
    src: 'singleBullet.m4a',
    volume: 0.5,
  },
  {
    src: 'piercingBullet.m4a',
    volume: 0.5,
  },
  {
    src: 'doubleBullet.m4a',
    volume: 0.5,
  },
  {
    src: 'explosion_1.m4a',
    volume: 1,
  },
  {
    src: 'background.m4a',
    volume: 0.5,
    loop: true,
  },
  {
    src: 'shipInterior.m4a',
    volume: 0.3,
    loop: true,
  },
  {
    src: 'click.m4a',
    volume: 0.5,
  },
  {
    src: 'menuSelect.m4a',
    volume: 0.5,
  },
  {
    src: 'gameOver.m4a',
    volume: 0.5,
  },
  {
    src: 'bonusAcquire.m4a',
    volume: 0.5,
  },
  {
    src: 'lifeLoose.m4a',
    volume: 0.5,
  },
];

let loadCounter = 0;

export function init() {
  initSounds(audiosPath, audioToLoad);
  initImages(spritesPath, spritesToLoad);
  initImages(imagesPath, imagesToLoad);
}

function initImages(filePath, filesToLoad) {
  filesToLoad.forEach(file => {
    const name = file.replace('.png', '');
    images[name] = new Image();
    images[name].src = filePath + file;
    images[name].onload = () => updateCounter();
  });
}

function initSounds(filePath, filesToLoad) {
  filesToLoad.forEach(file => {
    const name = file.src.replace('.m4a', '');
    sounds[name] = new Howl({
      src: [filePath + file.src],
      volume: file.volume,
      loop: file.loop ? file.loop : false,
      onload: updateCounter(),
    });
  });
}

function initComponents() {
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
  components.explosions = [];
}

function updateCounter() {
  const filesCount = [...spritesToLoad, ...imagesToLoad, ...audioToLoad].length;
  loadCounter++;
  parameters.loadCounter = Math.floor((loadCounter / filesCount) * 100);
  if (parameters.loadCounter === 100) {
    initComponents();
    changePhase(PHASES.menu);
  }
}
