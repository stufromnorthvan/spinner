let spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ']

let spin = function(spinArray) {
  let delay = 100;
  let delayIncrement = 200;
  for (let move of spinArray) {
    setTimeout(() => {process.stdout.write(move)}, delay);
    delay += delayIncrement;
  }
  setTimeout(() => {process.stdout.write('\n')}, (spinArray.length * delayIncrement + 50));
};

spin(spinArray);