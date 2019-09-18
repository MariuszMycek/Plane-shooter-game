import {
  parameters,
  components,
  sounds,
  myGameArea,
  updateGameArea,
} from './index';
import { PHASES } from './constants';
import { saveTopScores, getTopScores } from './firebase';
import { topScores } from './components/topScores';
import { changePhase } from './helpers';

// steering
export function keyUpHandler(event) {
  event.preventDefault();
  let key = event.keyCode;

  // hero plane movment
  if (key === 37) {
    parameters.leftPressed = false;
    components.heroPlane.speedX = 0;
    if (parameters.rightPressed) {
      components.heroPlane.speedX = 2;
    }
  } else if (key === 39) {
    parameters.rightPressed = false;
    components.heroPlane.speedX = 0;
    if (parameters.leftPressed) {
      components.heroPlane.speedX = -2;
    }
  }
  // hero plane shots
  else if (key === 32) {
    parameters.spacePressed = false;
  }
}

export function keyDownHandler(event) {
  event.preventDefault();
  let key = event.keyCode;

  // game pause
  if (key === 80) {
    if (!myGameArea.interval) {
      myGameArea.interval = setInterval(updateGameArea, 10);
    } else {
      clearInterval(myGameArea.interval);
      myGameArea.interval = null;
    }
  }

  switch (parameters.gamePhase) {
    case PHASES.menu: {
      // up
      if (key === 38) {
        sounds.click.play();
        if (parameters.activeMenuItemIndex === 0) {
          parameters.activeMenuItemIndex = components.menu.length - 1;
        } else {
          parameters.activeMenuItemIndex--;
        }
        components.menu[parameters.activeMenuItemIndex].animationCounter = 0;
      } else if (key === 40) {
        sounds.click.play();
        if (parameters.activeMenuItemIndex === components.menu.length - 1) {
          parameters.activeMenuItemIndex = 0;
        } else {
          parameters.activeMenuItemIndex++;
        }
        components.menu[parameters.activeMenuItemIndex].animationCounter = 0;
      } else if (key === 32 || key === 13) {
        sounds.menuSelect.play();
        switch (parameters.activeMenuItemIndex) {
          case 0: {
            changePhase(PHASES.start);
            break;
          }

          case 1: {
            changePhase(PHASES.topScores);
            break;
          }
        }
      }

      break;
    }

    case PHASES.running: {
      // hero plane movment
      if (key === 37) {
        parameters.leftPressed = true;
        components.heroPlane.speedX = -2;
      } else if (key == 39) {
        parameters.rightPressed = true;
        components.heroPlane.speedX = 2;
      }
      // hero plane shots
      else if (key === 32) {
        parameters.spacePressed = true;
      }
      break;
    }

    case PHASES.end: {
      if (key === 32) {
        changePhase(PHASES.menu);
        sounds.menuSelect.play();
      }
      break;
    }

    case PHASES.topScores: {
      if (key === 32 || key === 13) {
        changePhase(PHASES.menu);
        sounds.menuSelect.play();
      }
      break;
    }

    case PHASES.resultSaving: {
      if (key === 8) {
        sounds.click.play();
        const str = parameters.inputText;
        parameters.inputText = str.slice(0, str.length - 1);
      } else if (
        parameters.inputText.length < 13 &&
        ((key >= 48 && key <= 57) || (key >= 65 && key <= 90) || key === 32)
      ) {
        sounds.click.play();
        parameters.inputText += String.fromCharCode(key);
      } else if (key === 13) {
        sounds.menuSelect.play();
        const record = {
          name: parameters.inputText,
          score: parameters.playerPoints,
        };
        saveTopScores(record)
          .then(getTopScores())
          .then(() => {
            components.topScores = [...topScores()];
            changePhase(PHASES.topScores);
          });
      }
    }
  }
}
