import TextComponent from './textComponent';
import { components, parameters, myGameArea } from '../index';
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
    // this.shadowColor = 'black';
    // this.strokeStyle = 'red';
    // this.lineWidth = 0;
    this.fontWeight = '600';
    this.shadowColor = 'none';
  }

  // update() {
  //   const ctx = myGameArea.context;
  //   ctx.font = this.size + ' ' + this.font;

  //   ctx.fillStyle = this.color;
  //   ctx.strokeStyle = 'white';
  //   ctx.shadowBlur = 5;
  //   ctx.shadowColor = 'black';
  //   ctx.textAlign = this.align;
  //   ctx.fillText(this.text, this.posX, this.posY);
  //   ctx.shadowBlur = 0;
  //   ctx.shadowColor = 'none';
  // }

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
