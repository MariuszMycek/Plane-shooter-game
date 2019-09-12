import TextComponent from './textComponent';
import { components, parameters } from '../index';

export default class EndView extends TextComponent {
  constructor(posX, posY, size, font, counter) {
    super(posX, posY, size, font, counter);
    this.speedY = 2;
    this.color = 'red';
    this.text = 'GAME OVER';
  }

  newPos() {
    this.counter++;
    if (this.posY < 300) {
      this.posY += this.speedY;
    }
    // if (this.counter === 560) {
    //   parameters.gamePhase = 'stop';
    //   this.counter = 0;
    //   this.posY = -50;
    // }
  }
}
