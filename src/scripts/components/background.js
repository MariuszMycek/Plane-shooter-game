import bgImage from 'public/assets/images/gameBG.png';
import { myGameArea, parameters, components } from '../index';
import { PHASES } from '../constants';

export default class Background {
  constructor(posY) {
    this.image = new Image();
    this.image.src = bgImage;
    this.width = 618;
    this.height = 824;
    this.speedY = 0.5;
    this.posX = 0;
    this.posY = posY;
  }
  newPos() {
    if (parameters.gamePhase === PHASES.running) {
      this.posY += this.speedY;
      if (this.posY === 822) {
        this.posY = -822;
      }
    }
  }
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }
}
