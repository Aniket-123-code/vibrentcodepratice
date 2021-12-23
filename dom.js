let table = document.body.firstElementChild;
let tableRows = table.rows;

for(let i = 0; i < tableRows.length; ++i) {
  for(let j = 0; j < tableRows[i].cells.length; ++j) {

    // change the HTML
    tableRows[i].cells[j].innerText = `${j + 1}:${i + 1}`;

    if(i == j) {
      tableRows[i].cells[j].style.backgroundColor = 'red';
    }
  }
}