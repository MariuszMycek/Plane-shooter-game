import TextInput from './textInput';
import TextComponent from './textComponent';
import { config } from '../config';

const viewConfig = {
  baseCenterPosX: config.canvasWidth / 2,
  baseTopPosY: 300,
  textInfo: 'PLEASE ENTER YOUR NAME',
};

export function resultSaving() {
  const { baseCenterPosX, baseTopPosY, textInfo } = viewConfig;
  return [
    new TextComponent(baseCenterPosX, baseTopPosY, textInfo, 'center', 'yellow'),
    new TextInput(baseCenterPosX, baseTopPosY + 50, 'yellow'),
  ];
}
