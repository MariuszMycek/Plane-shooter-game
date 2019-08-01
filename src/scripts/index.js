import '../styles/index.scss';

import heroPlaneSrc from '../../public/assets/images/heroPlane.png';
import enemyPlaneSrc from '../../public/assets/images/enemyPlane.png';

const auxiliaryParameters = {
  heroPlane: null,
  enemyPlanes: [],
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  directionFactor: [-1, 0, 1],
  enemyGenerationCounter: 0,
  bullets: [],
  bulletsDistance: 0,
};

const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function() {
    this.canvas.width = 618;
    this.canvas.height = 620;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 10);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

document.addEventListener('keydown', keyDownHandler);

document.addEventListener('keyup', keyUpHandler);

document.addEventListener('DOMContentLoaded', function() {
  startGame();
});

function startGame() {
  auxiliaryParameters.heroPlane = new HeroPlane();

  myGameArea.start();
}

class HeroPlane {
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
    this.posX += this.speedX;
  }

  shootTheBullet() {
    auxiliaryParameters.bullets.push(new Bullet(this.posX + 16, this.posY));
    auxiliaryParameters.bulletsDistance = 0;
  }
}

class EnemyPlane {
  constructor(posX, posY) {
    this.image = new Image();
    this.image.src = enemyPlaneSrc;
    this.width = 32;
    this.height = 32;
    this.speedX =
      auxiliaryParameters.directionFactor[Math.floor(Math.random() * 3)];
    this.speedY = 1;
    this.posX = posX;
    this.posY = posY;
  }
  newPos() {
    this.posY += this.speedY;
    this.posX += this.speedX;
    if (this.posY > 620) {
      auxiliaryParameters.enemyPlanes.shift();
    }
    if (this.posX < 1 || this.posX > 587) {
      this.speedX *= -1;
    }
  }
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }
}

class Bullet {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.r = 2;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
  }
  update() {
    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.r, this.startAngle, this.endAngle);
    ctx.fill();
  }
  newPos() {
    this.posY -= 1;
    if (this.posY < 10) {
      auxiliaryParameters.bullets.shift();
    }
  }
}

function generateEnemyPlane() {
  if (
    auxiliaryParameters.enemyGenerationCounter >
    Math.floor(Math.random() * 4000) + 50
  ) {
    auxiliaryParameters.enemyPlanes.push(
      new EnemyPlane(Math.floor(Math.random() * 588), -40)
    );
    auxiliaryParameters.enemyGenerationCounter = 0;
  }
}

function updateGameArea() {
  myGameArea.clear();
  auxiliaryParameters.enemyGenerationCounter += 1;
  generateEnemyPlane();
  auxiliaryParameters.bulletsDistance += 3;

  auxiliaryParameters.heroPlane.newPos();
  auxiliaryParameters.heroPlane.update();

  auxiliaryParameters.bullets.forEach(bullet => {
    bullet.update();
    bullet.newPos();
  });

  if (
    auxiliaryParameters.spacePressed &&
    auxiliaryParameters.bulletsDistance > 50
  ) {
    auxiliaryParameters.heroPlane.shootTheBullet();
  }

  auxiliaryParameters.enemyPlanes.forEach(enemyPlane => {
    enemyPlane.update();
    enemyPlane.newPos();
  });

  // limitation that the main aircraft does not fly out of the screen
  auxiliaryParameters.heroPlane.posX = Math.max(
    Math.min(auxiliaryParameters.heroPlane.posX, 584),
    2
  );
}

function keyUpHandler(event) {
  event.preventDefault();
  let key = event.keyCode;

  // hero plane movment
  if (key === 37) {
    auxiliaryParameters.leftPressed = false;
    auxiliaryParameters.heroPlane.speedX = 0;
    if (auxiliaryParameters.rightPressed) {
      auxiliaryParameters.heroPlane.speedX = 2;
    }
  } else if (key === 39) {
    auxiliaryParameters.rightPressed = false;
    auxiliaryParameters.heroPlane.speedX = 0;
    if (auxiliaryParameters.leftPressed) {
      auxiliaryParameters.heroPlane.speedX = -2;
    }
  }
  // hero plane shots
  else if (key === 32) {
    auxiliaryParameters.spacePressed = false;
  }
}

function keyDownHandler(event) {
  event.preventDefault();
  let key = event.keyCode;

  // hero plane movment
  if (key == 37) {
    auxiliaryParameters.leftPressed = true;
    auxiliaryParameters.heroPlane.speedX = -2;
  } else if (key == 39) {
    auxiliaryParameters.rightPressed = true;
    auxiliaryParameters.heroPlane.speedX = 2;
  }
  // hero plane shots
  else if (key === 32) {
    auxiliaryParameters.spacePressed = true;
  }
}
