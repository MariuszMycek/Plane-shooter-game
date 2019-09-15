import TextComponent from './textComponent';
import { config } from '../config';
import { parameters } from '../index';

export default class TextInput extends TextComponent {
  constructor(posX, posY, color) {
    super(posX, posY, color);
    this.color = color || 'black';
    this.posX = config.canvasWidth / 2;
    this.align = 'center';
    this.text = '|';
  }
  updateText() {
    this.text = parameters.inputText + '|';
  }
}
