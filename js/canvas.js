const canvas = document.querySelector("body > canvas");
const context = canvas.getContext('2d');

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

const colors = [
  "209, 214, 234",
  "186, 194, 223",
  "165, 175, 210",
  "139, 147, 186",
  "113, 121, 161"
]; //https://www.color-hex.com/color-palette/33750

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height =  height;

    this.xVelocity = 0;
    this.yVelocity = clamp(Math.random() * 25, 15, 25);

    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = Math.floor(Math.random() * 10)
  }
  
  render(context) {
    const {x, y, width, height, xVelocity, yVelocity, style, color, opacity} = this;

    //const xRandom = Math.random() * xVelocity / .6;
    //const yRandom = Math.random() * yVelocity / .6;

    const newX = x + xVelocity //+ xRandom;
    const newY = y + yVelocity //+ yRandom;

    this.x = clamp(newX, 0, canvas.width);
    this.y = clamp(newY, 0, canvas.height);

    if(newX >= canvas.width - width) {
      //this.xVelocity = -Math.abs(xVelocity);
    }
  
    if(newY >= canvas.height + height) {
      //this.yVelocity = -Math.abs(yVelocity);
      this.x = Math.random() * canvas.width;
      this.y = 0;
    }
  
    /*
    if(newX <= 0) {
      this.xVelocity = Math.abs(xVelocity);
    }
  
    if(newY <= 0) {
      this.yVelocity = Math.abs(yVelocity);
    }
    */

    context.fillStyle = `rgba(${color}, .${opacity}`;
    context.fillRect(x, y, width, height);
  }
}

const rects = new Array(2700).fill().map(() => new Rect(Math.random() * canvas.width, Math.random() * canvas.height, 3, 10));

function frame() {
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  context.clearRect(0, 0, canvas.width, canvas.height)

  for(const rect of rects) {
    rect.render(context);
  }

  requestAnimationFrame(frame);
}

frame();