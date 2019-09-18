import { myGameArea, images, components, sounds } from '../index';
import { AABBIntersect, changeWeapon } from '../helpers';

export default class BonusCrate {
  constructor(posX, posY) {
    this.image = images.crate;
    this.width = 32;
    this.height = 32;
    this.speedX = 0;
    this.speedY = 0.5;
    this.posX = posX;
    this.posY = posY;
  }
  newPos() {
    this.posY += this.speedY;
    this.posX += this.speedX;
    if (this.posY > 620) {
      components.bonusCrates.shift();
    }
    if (this.posX < 1 || this.posX > 587) {
      this.speedX *= -1;
    }
  }
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }

  checkCollision() {
    const { heroPlane } = components;
    const isCollision = AABBIntersect(
      this.posX,
      this.posY,
      this.width,
      this.height,
      heroPlane.posX,
      heroPlane.posY + 24,
      heroPlane.width,
      heroPlane.height - 24
    );
    if (isCollision) {
      components.bonusCrates = components.bonusCrates.filter(
        crate => crate.posY !== this.posY
      );
      sounds.bonusAcquire.play();
      changeWeapon();
    }
  }
}
