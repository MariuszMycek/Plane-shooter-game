import TextComponent from './textComponent';
import { components, parameters, myGameArea } from '../index';

export default class EndGameInfo extends TextComponent {
  constructor(posX, posY, size, font, counter) {
    super(posX, posY, size, font, counter);
    this.speedY = 2;
    this.color = 'red';
    this.text = 'PRESS SPACE TO CONTINUE';
  }

  newPos() {
    const ctx = myGameArea.context;
    const textWidth = ctx.measureText(this.text).width;
    this.posX = (myGameArea.canvas.width - textWidth) / 2;
    if (this.posY > 350) {
      this.posY -= this.speedY;
    }
  }
}
