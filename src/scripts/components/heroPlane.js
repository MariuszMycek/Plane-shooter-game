import heroPlaneSrc from 'public/assets/images/heroPlane.png';
import Bullet from './bullet';
import { myGameArea, parameters, components, sounds } from '../index';
import { WEAPON_TYPE } from '../constants';

export default class HeroPlane {
  constructor() {
    this.image = new Image();
    this.image.src = heroPlaneSrc;
    this.width = 48;
    this.height = 48;
    this.speedX = 0;
    this.posX = 285;
    this.posY = 650;
  }
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }
  newPos() {
    if (this.posY > 550) {
      this.posY--;
    }
    // limitation that the main aircraft does not fly out of the screen
    this.posX = Math.max(Math.min(this.posX + this.speedX, 572), -2);
  }

  shootSingleBullet() {
    components.bullets.push(new Bullet(this.posX + 24, this.posY));
    parameters.bulletsDistance = 0;
  }

  shootDoubleBullet() {
    components.bullets.push(new Bullet(this.posX + 11, this.posY + 25));
    components.bullets.push(new Bullet(this.posX + 37, this.posY + 25));
    parameters.bulletsDistance = 0;
  }
}
