// Dom Elements //

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// User Class //
class User {
  constructor() {
    this.x = 125;
  }

  userGamepad() {
    ctx.fillRect(this.x, canvas.height - 10, 100, 10);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= 5;
    }
    this.userGamepad();
  }

  moveRight() {
    if (this.x < canvas.width - 100) {
      this.x += 5;
    }
    this.userGamepad();
  }
}

// System Class //

class System {
  constructor() {
    this.x = 0;
    this.direction = 1;
  }

  systemGamepad() {
    ctx.fillRect(this.x, 0, 100, 10);
  }

  move() {
    this.x = this.x + 5 * this.direction;

    if (this.x >= canvas.width - 100 || this.x <= 0) {
      this.direction *= -1;
    }

    ctx.fillRect(this.x, 0, 100, 10);
  }
}

// Ball Class //

class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "tomato";
    ctx.fill();
    ctx.closePath();
  }
}

// Window //

let user = new User();
let system = new System();
let ball = new Ball();

window.addEventListener("load", () => {
  user.userGamepad();

  system.systemGamepad();
  ball.draw();

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, 10);
    ctx.fillStyle = "black";
    system.move();
  }, 30);
});

window.addEventListener("keydown", (e) => {
  keyPress = e.key.replace("Arrow", "");

  switch (keyPress) {
    case "Left":
      ctx.clearRect(0, canvas.height - 10, canvas.width, 10);
      user.moveLeft();
      break;
    case "Right":
      ctx.clearRect(0, canvas.height - 10, canvas.width, 10);
      user.moveRight();
      break;
  }

  system.systemGamepad();
});
