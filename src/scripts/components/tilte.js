import TextComponent from './textComponent';
import { components, parameters } from '../index';
import { resetParams, changePhase } from '../helpers';
import { PHASES } from '../constants';

export default class Tilte extends TextComponent {
  constructor(posX, posY, size, font, counter) {
    super(posX, posY, size, font, counter);
    this.speedX = 2;
    this.color = 'red';
    this.text = 'ALIEN SHOOTER';
  }

  newPos() {
    this.count();

    if (this.counter > 280) {
      this.moveRigth();
    }

    if (this.counter === 560) {
      resetParams();
      changePhase(PHASES.running);
      this.resetCounter();
      this.posX = 203;
      return;
    }
  }

  moveRigth() {
    this.posX += this.speedX;
  }
}
