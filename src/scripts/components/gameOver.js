import TextComponent from './textComponent';
import { components, parameters, myGameArea } from '../index';

export default class GameOver extends TextComponent {
  constructor(posX, posY, size, font, counter) {
    super(posX, posY, size, font, counter);
    this.speedY = 2;
    this.color = 'red';
    this.text = 'GAME OVER';
  }

  newPos() {
    const ctx = myGameArea.context;
    const textWidth = ctx.measureText(this.text).width;
    this.posX = (myGameArea.canvas.width - textWidth) / 2;
    if (this.posY < 300) {
      this.posY += this.speedY;
    }
  }
}
