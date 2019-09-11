import TextComponent from './TextComponent';
import { components, parameters } from './index';
import { resetParams } from './helpers';

export default class StartView extends TextComponent {
  constructor(posX, posY, size, font, counter) {
    super(posX, posY, size, font, counter);
    this.speedX = 2;
    this.color = 'red';
    this.text = 'PLANE SHOOTER';
  }

  newPos() {
    super.count();
    if (this.posX < 203) {
      this.moveRigth();
      return;
    }

    if (this.counter > 560) {
      this.moveRigth();
    }

    if (this.counter === 1120) {
      resetParams();
      parameters.gameStatus = 'running';
      super.resetCounter();
      this.posX = -400;
      return;
    }
  }

  moveRigth() {
    this.posX += this.speedX;
  }
}
