import { myGameArea, parameters, images } from '../index';
import { PHASES } from '../constants';

class Background {
  constructor(posY) {
    this.image = images.gameBG;
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

const backgroundConfig = {
  basePosY: 0,
};

export function background() {
  const { basePosY } = backgroundConfig;

  return [new Background(basePosY), new Background(basePosY - 822)];
}
