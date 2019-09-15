import TextComponent from './textComponent';
import { parameters } from '../index';
import { config } from '../config';

const viewConfig = {
  baseLeftPosX: 120,
  baseRightPosX: config.canvasWidth - 120,
  baseTopPosY: 150,
};

export function topScores() {
  const { baseLeftPosX, baseRightPosX, baseTopPosY } = viewConfig;

  const title = new TextComponent(baseLeftPosX, baseTopPosY, ' TOP SCORES:');

  const view = [title];

  parameters.topScores.forEach((item, index) => {
    if (index === 9) {
      view.push(
        new TextComponent(
          baseLeftPosX,
          title.posY + (index + 1) * 30,
          `${index + 1}. ${item.name}`
        )
      );
    } else if (index < 9) {
      view.push(
        new TextComponent(
          baseLeftPosX,
          title.posY + (index + 1) * 30,
          ` ${index + 1}. ${item.name}`
        )
      );
    }

    view.push(
      new TextComponent(
        baseRightPosX,
        title.posY + (index + 1) * 30,
        `${item.score}`,
        'right'
      )
    );
  });

  return view;
}
