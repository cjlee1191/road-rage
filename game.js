/* eslint-disable func-names */
const car = document.createElement('div');
const carLocation = { x: 600, y: 450 };

const createCar = function () {
  car.style.position = 'absolute';
  car.style.left = '600px';
  car.style.top = '450px';
  car.style.width = '100px';
  car.style.height = '100px';
  car.style.backgroundImage = "url('images/car.png')";
  car.style.backgroundSize = '100%';
  document.body.querySelector('.game-board').appendChild(car);
};

createCar();

document.body.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode
      if (keyCode === 37){
      moveLeft();
    } 
      if (keyCode === 38){
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
  car.style.left = carLocation.x + 'px';
}

function moveUp() {
  carLocation.y -= 30;
  car.style.top = carLocation.y + 'px';
}

function moveRight() {
  carLocation.x += 30;
  car.style.left = carLocation.x + 'px';
}

function moveDown() {
  carLocation.y += 30;
  car.style.top = carLocation.y + 'px';
}
