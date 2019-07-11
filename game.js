/*eslint-disable*/
const car = document.createElement('div');
const coin = document.createElement('div');
const enemyCar = document.createElement('div')
let carLocation = { x: 600, y: 500, height: '100px', width: '100px' };
let coinLocation = { x: 0, y: 0, height: '100px', width: '100px' };
let enemyCarLocation = { x: 0, y: 0, height: '100px', width: '100px' };
enemyCars = [];

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



  const createEnemyCar = function() {
  enemyCar.style.position = 'absolute';
  enemyCar.style.width = '100px';
  enemyCar.style.height = '150px';
  enemyCar.style.backgroundImage = "url('images/bluecar.png')"
  enemyCar.classList.add('enemy')
  enemyCar.style.backgroundSize = '100%';
  document.body.querySelector('.game-board').appendChild(enemyCar);
  enemyCarLocation.x = Math.floor(Math.random() * documentWidth) + 1;
  enemyCar.style.top = enemyCarLocation.y + "px";
  enemyCar.style.left = enemyCarLocation.x + "px";
  }
 for (let i = 0; i < 3; i++){
   createEnemyCar();
   }

window.setInterval(() => {
  coin.style.position = 'absolute';
  coin.style.width = '100px';
  coin.style.height = '100px';
  coin.style.backgroundImage = "url('images/coin.png')";
  coin.classList.add('.coin')
  coin.style.backgroundSize = '100%';
  document.body.querySelector('.game-board').appendChild(coin);
  coinLocation.x = Math.floor(Math.random() * documentWidth) + 1;
  coinLocation.y = Math.floor(Math.random() * documentHeight) + 1;
  coin.style.top = coinLocation.y + "px";
  coin.style.left = coinLocation.x + "px";
}, 3000);

document.body.addEventListener('keydown', (event) => {
  event.preventDefault();
  const { keyCode } = event;
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
  car.style.left = `${carLocation.x}px`;
  if (carLocation.x <= 25) {
    carLocation.x += 30;
  }
}
function moveUp() {
  carLocation.y -= 30;
  car.style.top = `${carLocation.y}px`;
  if (carLocation.y <= 25) {
    carLocation.y += 30;
  }
}
function moveRight() {
  carLocation.x += 30;
  car.style.left = `${carLocation.x}px`;
  if (carLocation.x >= 1150) {
    carLocation.x -= 30;
  }
}
function moveDown() {
  carLocation.y += 30;
  car.style.top = `${carLocation.y}px`;
  if (carLocation.y <= 0){ 
    carLocation.y -= 30;
  }
}

const moveEnemyCar = setInterval(() => {
document.querySelector('.enemy-car')
if (enemyCarLocation.y < 1000) {
enemyCarLocation.y += 50;
}
}, 1000)

let timeLeft = 60;
const countDown = setInterval(() => {
  document.querySelector('.timer').textContent = `TIME LEFT: ${timeLeft} seconds`;
  timeLeft -= 1;
  if (timeLeft <= 0) {
    clearInterval(countDown);
    document.querySelector('.timer').textContent = `Game Over`
  }
}, 1000);

const carCrash = function() {
if (carLocation.x < enemyCarLocation.x + parseInt(enemyCarLocation.width) &&
  carLocation.x + parseInt(carLocation.width) > enemyCarLocation.x &&
  carLocation.y < enemyCarLocation.y + parseInt(enemyCarLocation.height) &&
  carLocation.y + parseInt(carLocation.height) > enemyCarLocation.y) {
   console.log('crash')
}
};
carCrash();

function gameOver() {
  if (timeLeft == 0) {
    alert('Thanks for Playing')
  }
}