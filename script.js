const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount, character) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count, character));
  } else {
    rows.push(padRow(i, count, character));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

function generatePyramid() {
  const count = form.count.value;
  const character = form.character.value;
  const inverted = form.inverted.checked;
  const rows = [];

  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count, character));
    } else {
      rows.push(padRow(i, count, character));
    }
  }

  let result = ""

  for (const row of rows) {
    result = result + "\n" + row;
  }

  return result;
}

form.onchange = form.oninput = form.onsubmit = () => pre.innerText = generatePyramid();
