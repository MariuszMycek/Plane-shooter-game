import enemyPlaneSrc from '../../public/assets/images/enemyPlane.png';
import { myGameArea, parameters, components } from './index';
import { subtractThePlayerHealth } from './helpers';

export default class EnemyPlane {
  constructor(posX, posY) {
    this.image = new Image();
    this.image.src = enemyPlaneSrc;
    this.width = 32;
    this.height = 32;
    this.speedX = parameters.directionFactor[Math.floor(Math.random() * 3)];
    this.speedY = 1;
    this.posX = posX;
    this.posY = posY;
  }
  newPos() {
    this.posY += this.speedY;
    this.posX += this.speedX;
    if (this.posY > 620) {
      components.enemyPlanes.shift();
    }
    if (this.posX < 1 || this.posX > 587) {
      this.speedX *= -1;
    }
  }
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }

  checkTheGoal() {
    if (this.posY === 590) {
      subtractThePlayerHealth();
    }
  }
}
