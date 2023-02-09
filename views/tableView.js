const Table = require('cli-table');

//function generateView will generate cli table ui

const generateView = (tableConstructor, tableContent, tableTitle) => {
  const mainTable = new Table(tableConstructor);
  tableContent.forEach((item) => {
    mainTable.push(item);
    console.log('');
    console.log(`  ${tableTitle}`);
    console.log(mainTable.toString());
  });
};

module.expoprts = { generateView };
