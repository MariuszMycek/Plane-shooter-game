import TextComponent from './textComponent';
import { components, parameters, myGameArea } from '../index';
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
    if (parameters.gamePhase === PHASES.menu) {
      const ctx = myGameArea.context;
      const textWidth = ctx.measureText(this.text).width;
      this.posX = (myGameArea.canvas.width - textWidth) / 2;
    } else if (parameters.gamePhase === PHASES.start) {
      this.count();
      if (this.counter > 50) {
        this.moveRigth();
      }

      if (this.counter === 320) {
        resetParams();
        changePhase(PHASES.running);
        this.resetCounter();
        this.posX = 203;
        return;
      }
    }
  }

  moveRigth() {
    this.posX += this.speedX;
  }
}
