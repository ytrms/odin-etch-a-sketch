//@ts-check
let numberOfCellsPerSide = 16;
const container = document.getElementsByClassName('container')[0];
const body = document.querySelector('body');

// create rows
for (let i = 0; i < numberOfCellsPerSide; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
}

// in each row, create cells
let rows = document.getElementsByClassName('row');

for (let i = 0; i < numberOfCellsPerSide; i++) {
  for (let n = 0; n < numberOfCellsPerSide; n++) {
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

// add button to reset
const buttonRow = document.createElement('div');
buttonRow.classList.add('buttonRow');

const resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.textContent = "Reset";
buttonRow.appendChild(resetButton);

body.appendChild(buttonRow);

// add functionality to reset button
resetButton.addEventListener('click', () => {
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.classList.remove('hovered');
  }
})

