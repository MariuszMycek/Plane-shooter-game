import { myGameArea } from '../index';

export default class TextComponent {
  constructor(posX, posY, text, align, color, shadowColor) {
    this.size = '30px';
    this.font = 'Consolas';
    this.posX = posX;
    this.posY = posY;
    this.color = color || 'white';
    this.counter = 0;
    this.text = text;
    this.align = align || 'left';
    this.shadowColor = shadowColor || 'black';
    this.fontWeight = 'normal';
  }

  update() {
    const ctx = myGameArea.context;

    ctx.font = this.fontWeight + ' ' + this.size + ' ' + this.font;

    ctx.fillStyle = this.color;

    ctx.shadowBlur = 5;
    ctx.shadowColor = this.shadowColor;
    ctx.textAlign = this.align;

    ctx.fillText(this.text, this.posX, this.posY);
    if (this.strokeStyle) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.strokeText(this.text, this.posX, this.posY);
      ctx.strokeStyle = 'none';
      ctx.lineWidth = 0;
    }
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'none';
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

  centerText() {
    const ctx = myGameArea.context;
    const textWidth = ctx.measureText(this.text).width;
    this.posX = (myGameArea.canvas.width - textWidth) / 2;
  }
}
