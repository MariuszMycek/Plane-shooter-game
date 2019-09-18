import { config } from '../config';
import TextComponent from './textComponent';
import ProgressBar from './progressBar';
import { myGameArea } from '../index';

export default class LoadingScreen {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.width = config.canvasWidth;
    this.height = config.canvasHeight;
    this.color = '#000';
    this.components = {
      loadingText: new TextComponent(
        config.canvasWidth / 2,
        300,
        'Loading...',
        'center'
      ),
      progressBar: new ProgressBar(null, 265, 400, 50, '#c0392b'),
    };
  }

  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);

    this.components.progressBar.update();
    this.components.loadingText.update();
  }
}
