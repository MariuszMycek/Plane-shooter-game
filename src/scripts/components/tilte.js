import TextComponent from './textComponent';
import { parameters } from '../index';
import { resetParams, changePhase } from '../helpers';
import { PHASES } from '../constants';
import { config } from '../config';

export default class Tilte extends TextComponent {
  constructor() {
    super();
    this.align = 'center';
    this.posY = 300;
    this.posX = config.canvasWidth / 2;
    this.speedX = 2;
    this.color = 'yellow';
    this.text = 'ALIEN SHOOTER';
    this.fontWeight = '600';
    this.shadowColor = 'none';
  }

  newPos() {
    if (parameters.gamePhase === PHASES.start) {
      this.count();
      if (this.counter > 50) {
        this.moveRigth();
      }

      if (this.counter === 320) {
        resetParams();
        changePhase(PHASES.running);
        this.resetCounter();
        this.posX = config.canvasWidth / 2;
        return;
      }
    }
  }

  moveRigth() {
    this.posX += this.speedX;
  }
}
