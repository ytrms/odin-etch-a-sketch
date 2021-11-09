//@ts-check
let initialSideLength = 16;
const container = document.getElementsByClassName('container')[0];
const body = document.querySelector('body');

/**
 * @param {number} sideLength
 */
function createGrid(sideLength) {
  // delete existing grid
  container.innerHTML = "";

  // create rows
  for (let i = 0; i < sideLength; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }

  // in each row, create cells
  let rows = document.getElementsByClassName('row');

  for (let i = 0; i < sideLength; i++) {
    for (let n = 0; n < sideLength; n++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      rows[i].appendChild(cell);
    }
  }
  // change background color when mouseover
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', (e) => {
      e.target['classList'].add('hovered');
    });
  }
}

createGrid(initialSideLength);

// add button to reset
const buttonRow = document.createElement('div');
buttonRow.classList.add('buttonRow');
body.appendChild(buttonRow);

const resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.textContent = "Reset";
buttonRow.appendChild(resetButton);

const resizeButton = document.createElement('button');
resizeButton.classList.add('resize');
resizeButton.textContent = "Resize Grid";
buttonRow.appendChild(resizeButton);

// add functionality to reset button
resetButton.addEventListener('click', () => {
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.classList.remove('hovered');
  }
})

resizeButton.addEventListener('click', () => {
  const newSize = Number(window.prompt("New side size:"));
  if (isNaN(newSize)) {
    alert("That's not really a number")
  } else if (newSize > 100) {
    alert("Nope. Don't go over 100. That would be bad.")
  } else {
    createGrid(newSize);
  }
})