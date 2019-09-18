import { config } from '../config';
import { myGameArea, parameters } from '../index';

export default class ProgressBar {
  constructor(posX, posY, width, height, color) {
    this.posX = posX || (config.canvasWidth - width) / 2;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  update() {
    const progress = (parameters.loadCounter / 100) * this.width;
    const ctx = myGameArea.context;
    ctx.strokeStyle = this.color;
    ctx.strokeRect(this.posX, this.posY, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, progress, this.height);
  }
}
