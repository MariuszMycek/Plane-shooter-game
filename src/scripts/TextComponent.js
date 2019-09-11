import { myGameArea } from './index';

export default class TextComponent {
  constructor(posX, posY, text) {
    this.size = '30px';
    this.font = 'Consolas';
    this.posX = posX;
    this.posY = posY;
    this.color = 'black';
    this.counter = 0;
    this.text = text;
  }
  update() {
    const ctx = myGameArea.context;
    ctx.font = this.size + ' ' + this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.posX, this.posY);
  }

  setText(text) {
    this.text = text;
  }

  count() {
    this.counter++;
  }

  resetCounter() {
    this.counter = 0;
  }
}
