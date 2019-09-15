import TextComponent from './textComponent';
import { config } from '../config';

export default class EndGameInfo extends TextComponent {
  constructor() {
    super();
    this.posX = config.canvasWidth / 2;
    this.posY = 650;
    this.align = 'center';
    this.speedY = 2;
    this.color = 'yellow';
    this.text = 'PRESS SPACE TO CONTINUE';
  }

  newPos() {
    if (this.posY > 350) {
      this.posY -= this.speedY;
    }
  }
}
