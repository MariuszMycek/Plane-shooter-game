import spriteData from 'public/assets/sprites/explosions.json';
import { myGameArea, components, images } from '../index';

const { frames } = spriteData;

export default class Explosion {
  constructor(posX, posY, name, animationSpeed) {
    this.posX = posX;
    this.posY = posY;
    this.speedY = 0.5;
    this.image = images.explosions;
    this.frames = [];
    this.counter = 0;
    this.animationSpeed = animationSpeed || 5;
    this.frameNumber = 0;
    Object.keys(frames).forEach(frame => {
      if (frame.includes(name)) {
        this.frames.push(frames[frame]);
      }
    });
  }

  update() {
    const ctx = myGameArea.context;
    this.count();
    this.changeFrame();
    if (this.frameNumber < this.frames.length) {
      const frame = this.frames[this.frameNumber].frame;
      const { x, y, w, h } = frame;
      ctx.drawImage(this.image, x, y, w, h, this.posX, this.posY, w, h);
    } else {
      components.explosions = components.explosions.filter(
        explosion =>
          explosion.posX !== this.posX && explosion.posY !== this.posY
      );
    }
  }

  count() {
    this.counter++;
  }

  changeFrame() {
    if (this.counter > this.animationSpeed) {
      this.frameNumber++;
      this.counter = 0;
    }
  }

  newPos() {
    this.posY += this.speedY;
  }
}
