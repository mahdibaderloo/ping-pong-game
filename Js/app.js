// Dom Elements //

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// User Class //
class User {
  constructor() {}

  userGamepad() {
    ctx.fillRect(125, canvas.height - 10, 100, 10);
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

// Window //

window.addEventListener("load", () => {
  let user = new User();
  let system = new System();

  user.userGamepad();
  system.systemGamepad();
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, 100);
    system.move();
  }, 30);
});
