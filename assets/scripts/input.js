let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  console.log("e: ", e);
  switch (e.key) {
    case "ArrowDown":
      // if last input was on the y-axis ignore move
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowUp":
      // if last input was on the y-axis ignore move
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowLeft":
      // if last input was on the x-axis ignore move
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      // if last input was on the x-axis ignore move
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
    default:
      break;
  }
});
export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
