let numberOfCellsPerSide = 16;
const container = document.getElementsByClassName('container')[0];
let cells = [];

for (let i = 0; i < numberOfCellsPerSide ** 2; i++) {
  cells.push(document.createElement('div').classList.add('cell'));
}

for (const cell in cells) {
  if (Object.hasOwnProperty.call(cells, cell)) {
    container.appendChild(cell);
  }
}