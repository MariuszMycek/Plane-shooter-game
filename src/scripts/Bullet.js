import { myGameArea, parameters, components } from './index';
import { AABBIntersect, addPlayerPoint } from './helpers';

export default class Bullet {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.r = 2;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
  }
  update() {
    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.r, this.startAngle, this.endAngle);
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
  }
  newPos() {
    this.posY -= 1;
    if (this.posY < 10) {
      components.bullets.shift();
    }
  }

  checkCollision() {
    components.enemyPlanes.forEach((plane, i) => {
      const isCollision = AABBIntersect(
        this.posX,
        this.posY,
        this.r,
        this.r,
        plane.posX,
        plane.posY,
        plane.width,
        plane.height
      );
      if (isCollision) {
        components.enemyPlanes.splice(i, 1);
        components.bullets = components.bullets.filter(
          bullet => bullet.posY !== this.posY
        );
        addPlayerPoint(1);
      }
    });
  }
}
