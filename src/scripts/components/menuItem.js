import TextComponent from './textComponent';
import { components, parameters, myGameArea } from '../index';
import { resetParams, changePhase } from '../helpers';
import { PHASES } from '../constants';

export default class MenuItem extends TextComponent {
  constructor(posX, posY, text, index, size, font, counter) {
    super(posX, posY, size, font, counter, text);
    this.speedX = 2;
    this.color = 'red';
    this.text = text;
    this.animationCounter = 0;
    this.counterDirection = 'add';
    this.fontSize = 30;
    this.index = index;
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
    if (parameters.activeMenuItemIndex === this.index) {
      ctx.font = fontSize + 'px' + ' ' + this.font;
      ctx.fillStyle = 'blue';
    } else {
      ctx.font = this.fontSize + 'px' + ' ' + this.font;
      ctx.fillStyle = this.color;
    }

    

    ctx.shadowColor = 'black';
    ctx.fillText(this.text, this.posX, this.posY);
    ctx.strokeText(this.text, this.posX, this.posY);
  }

  newPos() {
    const ctx = myGameArea.context;
    const textWidth = ctx.measureText(this.text).width;
    this.posX = (myGameArea.canvas.width - textWidth) / 2;
  }

  moveRigth() {
    this.posX += this.speedX;
  }
}
