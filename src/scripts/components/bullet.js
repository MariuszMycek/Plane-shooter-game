import { myGameArea, parameters, components, sounds } from '../index';
import { AABBIntersect, addPlayerPoint } from '../helpers';
import { WEAPON_TYPE } from '../constants';

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

    if (parameters.weaponType === WEAPON_TYPE.piercingBullet) {
      ctx.fillStyle = 'blue';
      ctx.strokeStyle = 'white';
    } else {
      ctx.fillStyle = 'yellow';
      ctx.strokeStyle = 'black';
    }
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.r, this.startAngle, this.endAngle);
    ctx.stroke();
    ctx.fill();
  }
  newPos() {
    this.posY -= 1;
    if (this.posY < -3) {
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
        if (parameters.weaponType !== WEAPON_TYPE.piercingBullet) {
          components.bullets = components.bullets.filter(
            bullet => bullet.posY !== this.posY
          );
        }
        sounds.basicEnemyExplosion.play();
        addPlayerPoint(1);
      }
    });
  }
}
