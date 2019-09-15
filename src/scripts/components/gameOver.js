import TextComponent from './textComponent';
import { config } from '../config';

export default class GameOver extends TextComponent {
  constructor() {
    super();
    this.posX = config.canvasWidth / 2;
    this.posY = -50;
    this.align = 'center';
    this.speedY = 2;
    this.color = 'red';
    this.text = 'GAME OVER';
  }

  newPos() {
    if (this.posY < 300) {
      this.posY += this.speedY;
    }
  }
}
