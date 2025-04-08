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
  }

  systemGamepad() {
    ctx.fillRect(this.x, 0, 100, 10);
  }

  moveRight() {
    for (let i = 0; i < canvas.width - 100; i++) {
      ctx.fillRect(this.x, 0, 100, 0);
    }
    this.x += 5;
    ctx.fillRect(this.x, 0, 100, 10);
  }

  moveLeft() {
    for (let i = canvas.width - 100; i <= 0; i--) {
      ctx.fillRect(this.x, 0, 100, 0);
    }
    this.x -= 5;
    ctx.fillRect(this.x, 0, 100, 10);
  }
}

// Window //

window.addEventListener("load", () => {
  let user = new User();
  let system = new System();

  user.userGamepad();
  system.systemGamepad();
});
