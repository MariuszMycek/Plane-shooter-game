import TextComponent from './textComponent';
import { components, parameters, myGameArea } from '../index';
import { resetParams, changePhase } from '../helpers';
import { PHASES } from '../constants';
import { config } from '../config';

class MenuItem extends TextComponent {
  constructor(posX, posY, text, index) {
    super(posX, posY, text);

    this.align = 'center';
    this.speedX = 2;
    this.color = 'red';
    this.animationCounter = 0;
    this.counterDirection = 'add';
    this.fontSize = 30;
    this.index = index;
    this.color = 'white';
    this.strokeStyle = 'white';

    // this.animationFactor = this.animationCounter /
  }

  update() {
    if (this.animationCounter === 0) this.counterDirection = 'add';
    if (this.animationCounter === 70) this.counterDirection = 'subtract';

    if (this.counterDirection === 'add') this.animationCounter++;

    if (this.counterDirection === 'subtract') this.animationCounter--;

    const fontSize = this.fontSize + this.animationCounter / 50;

    this.count();
    const ctx = myGameArea.context;
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'black';
    if (parameters.activeMenuItemIndex === this.index) {
      ctx.font = fontSize + 'px' + ' ' + this.font;
      ctx.fillStyle = 'blue';
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = this.strokeStyle;
      ctx.fillText(this.text, this.posX, this.posY);
      ctx.strokeText(this.text, this.posX, this.posY);
    } else {
      ctx.font = this.fontSize + 'px' + ' ' + this.font;
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, this.posX, this.posY);
    }
  }

  moveRigth() {
    this.posX += this.speedX;
  }
}

const viewConfig = {
  baseCenterPosX: config.canvasWidth / 2,
  baseTopPosY: 400,
  menuElementsNames: ['NEW GAME', 'TOP SCORES'],
};

export function menu() {
  const { baseCenterPosX, baseTopPosY, menuElementsNames } = viewConfig;

  const view = menuElementsNames.map(
    (elementName, index) =>
      new MenuItem(baseCenterPosX, baseTopPosY + 50 * index, elementName, index)
  );

  return view;
}
