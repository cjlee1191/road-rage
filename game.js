/*eslint-disable*/
const car = document.createElement('div');
const coin = document.createElement('div');
let carLocation = { x: 600, y: 500, height: '100px', width: '100px' };
let coinLocation = {x: 0, y: 0, height: '100px', width: '100px'};

const createCar = function () {
  car.style.position = 'absolute';
  car.style.left = '600px';
  car.style.top = '500px';
  car.style.width = '100px';
  car.style.height = '100px';
  car.style.backgroundImage = "url('images/car.png')";
  car.style.backgroundSize = '100%';
  document.body.querySelector('.game-board').appendChild(car);
};

createCar();

const documentHeight = document.documentElement.clientHeight;
const documentWidth = document.documentElement.clientWidth;

window.setInterval(() => {
  coin.style.position = 'absolute';
  coin.style.width = '50px';
  coin.style.height = '50px';
  coin.style.backgroundImage = "url('images/coin.png')";
  coin.classList.add('.coin')
  coin.style.backgroundSize = '100%';
  document.body.querySelector('.game-board').appendChild(coin);
  coinLocation.x = Math.floor(Math.random() * documentWidth) + 1;
  coinLocation.y = Math.floor(Math.random() * documentHeight) + 1;
  coin.style.top = coinLocation.y + "px";
  coin.style.left = coinLocation.x + "px";
 }, 3000);

 function isCollide(a, b) {
  return !(
      ((a.y + a.height) < (b.y)) ||
      (a.y > (b.y + b.height)) ||
      ((a.x + a.width) < b.x) ||
      (a.x > (b.x + b.width))
    );
  }
isCollide(carLocation, coinLocation);

let scoreBoard = 0;
function scoreCounter() {
  document.querySelector('.coin').textContent = `${scoreBoard}`
  if(coinTop === carLocation.y && coinLeft === carLocation.x) {
    scoreBoard ++;
    console.log(scoreBoard)
  }
}



document.body.addEventListener('keydown', (event) => {
  const {keyCode} = event;
  if (keyCode === 37) {
    moveLeft();
  }
  if (keyCode === 38) {
    moveUp();
  }
  if (keyCode === 39) {
    moveRight();
  }
  if (keyCode === 40) {
    moveDown();
  }
});

function moveLeft() {
  carLocation.x -= 30;
  car.style.left = `${carLocation.x  }px`;
  if (carLocation.x <= 25) {
    carLocation.x += 30;
  }
}
function moveUp() {
  carLocation.y -= 30;
  car.style.top = `${carLocation.y  }px`;
  if (carLocation.y <= 25) {
    carLocation.y += 30;
  }
}
function moveRight() {
  carLocation.x += 30;
  car.style.left = `${carLocation.x  }px`;
  if (carLocation.x >= 1150) {
    carLocation.x -= 30;
  }
}
function moveDown() {
  carLocation.y += 30;
  car.style.top = `${carLocation.y  }px`;
  if (carLocation.y <= 800) {
    carLocation.y -= 30;
  }
}

let timeLeft = 60;
const countDown = setInterval(() => {
  document.querySelector('.timer').textContent = `TIME LEFT: ${timeLeft} seconds`;
  timeLeft -= 1;
  if(timeLeft <= 0){
    clearInterval(countDown);
    document.querySelector('.timer').textContent = `Game Over`
  }
}, 1000);
countDown();


function gameOver() {
  if (timeLeft === 0) {
    window.location.href = 'gameover.html';
  }
}
gameOver();
