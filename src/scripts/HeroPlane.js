import heroPlaneSrc from '../../public/assets/images/heroPlane.png';
import Bullet from './Bullet';
import { myGameArea, parameters, components } from './index';

export default class HeroPlane {
  constructor() {
    this.image = new Image();
    this.image.src = heroPlaneSrc;
    this.width = 32;
    this.height = 32;
    this.speedX = 0;
    this.posX = 301;
    this.posY = 550;
  }
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }
  newPos() {
    // limitation that the main aircraft does not fly out of the screen
    this.posX = Math.max(Math.min(this.posX + this.speedX, 584), 2);
  }

  shootTheBullet() {
    components.bullets.push(new Bullet(this.posX + 16, this.posY));
    parameters.bulletsDistance = 0;
  }
}
