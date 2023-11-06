// random food location

import { randomGridPosition } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";

let food = getNewFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    console.log("nom nom");
    expandSnake(EXPANSION_RATE);
    // move food
    food = { x: 15, y: 20 };
    food = getNewFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getNewFoodPosition() {
  let newPosition;
  while (newPosition == null || onSnake(newPosition)) {
    newPosition = randomGridPosition();
  }
  return newPosition;
}
