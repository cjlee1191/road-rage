/*eslint-disable*/


const car = document.createElement('div');
const coin = document.createElement('div');
const blueCar = document.createElement('div')
const greenCar = document.createElement('div')


let carLocation = { x: 600, y: 500, height: '100px', width: '100px' };
let coinLocation = { x: 0, y: 0, height: '100px', width: '100px' };
let blueCarLocation = { x: 0, y: 0, height: '150px', width: '100px' };
let greenCarLocation = { x: 0, y: 0, height: '150px', width: '100px' };

const runGame = function() {
  const createCar = function () {
  car.style.position = 'absolute';
  car.style.left = '600px';
  car.style.top = '500px';
  car.style.width = '100px';
  car.style.height = '100px';
  car.style.backgroundImage = "url('images/car.png')";
  car.style.backgroundSize = '100%';
  car.style.backgroundColor= "black";
  document.body.querySelector('.game-board').appendChild(car);
};

createCar();

const documentHeight = document.documentElement.clientHeight;
const documentWidth = document.documentElement.clientWidth;



window.setInterval(() => {
  blueCar.style.position = 'absolute';
  blueCar.style.width = '100px';
  blueCar.style.height = '150px';
  blueCar.style.backgroundImage = "url('images/bluecar.png')"
  blueCar.classList.add('enemy')
  blueCar.style.backgroundSize = '100%';
  blueCar.style.backgroundColor= "black";
  document.body.querySelector('.game-board').appendChild(blueCar);
  blueCarLocation.x = Math.floor(Math.random() * documentWidth) + 1;
  blueCarLocation.y = Math.floor(Math.random() * documentHeight) + 1;
  blueCar.style.top = blueCarLocation.y + "px";
  blueCar.style.left = blueCarLocation.x + "px";
}, 2000)


window.setInterval(() => {
  greenCar.style.position = 'absolute';
  greenCar.style.width = '100px';
  greenCar.style.height = '175px';
  greenCar.style.backgroundImage = "url('images/greencar.png')"
  greenCar.classList.add('enemy2')
  greenCar.style.backgroundSize = '100%';
  greenCar.style.backgroundColor= "black";
  document.body.querySelector('.game-board').appendChild(greenCar);
  greenCarLocation.x = Math.floor(Math.random() * documentWidth) + 1;
  greenCarLocation.y = Math.floor(Math.random() * documentHeight) + 1;
  greenCar.style.top = greenCarLocation.y + "px";
  greenCar.style.left = greenCarLocation.x + "px";
}, 2000)




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
  if (carLocation.y <= 0) {
    carLocation.y -= 30;
  }
}
let timeLeft = 60;
const countDown = setInterval(() => {
  document.querySelector('.timer').textContent = `${timeLeft} seconds left`;
  timeLeft -= 1;
  if (timeLeft === 0) {
    window.location.replace("#")
  }
}, 1000);

  const blueCarCrash = function () {
  if (carLocation.x < blueCarLocation.x + parseInt(blueCarLocation.width) &&
    carLocation.x + parseInt(carLocation.width) > blueCarLocation.x &&
    carLocation.y < blueCarLocation.y + parseInt(blueCarLocation.height) &&
    carLocation.y + parseInt(carLocation.height) > blueCarLocation.y) {
    console.log('blue car crash')
   }
  };

  const greenCarCrash = function() {
  if (carLocation.x < greenCarLocation.x + parseInt(greenCarLocation.width) &&
    carLocation.x + parseInt(carLocation.width) > greenCarLocation.x &&
    carLocation.y < coinLocation.y + parseInt(greenCarLocation.height) &&
    carLocation.y + parseInt(carLocation.height) > greenCarLocation.y) {
    console.log('green car crash')
  }
};


let currentScore = 0;
   const collectCoin = function () {
  if (carLocation.x < coinLocation.x + parseInt(coinLocation.width) &&
    carLocation.x + parseInt(carLocation.width) > coinLocation.x &&
    carLocation.y < coinLocation.y + parseInt(coinLocation.height) &&
    carLocation.y + parseInt(carLocation.height) > coinLocation.y) {
    document.querySelector('.score').textContent = `${currentScore} coins collected`;
    currentScore += 1;
  }
};

window.setInterval(() =>{
  collectCoin();
  greenCarCrash();
  blueCarCrash();
}, 250)


}
runGame();