import { Window } from 'happy-dom';

const { document } = new Window();

document.write(atob(process.env.BASE64_ENCODED_HTML!));

const htmlTables = document.body.querySelectorAll('table');

// Tables data
export const tables = htmlTables.map(htmlTable => {
  const name = htmlTable.previousElementSibling.innerHTML.toLowerCase();

  const tableRows = htmlTable.querySelectorAll('tbody > tr');

  const rows = Array.from(tableRows).map(tableRow => {
    const [qty, price] = tableRow.getElementsByTagName('td');

    return {
      qty: Number(qty.innerHTML),
      price: Number(price.innerHTML)
    };
  });

  return { name, rows };
});

// Helper function
export const collectTablePrices = (tableName: string) => {
  const table = tables.find(table => table.name === tableName);

  if (!table) {
    throw new Error(`Table '${tableName}' does not exist`);
  }

  return table.rows.map(row => row.price);
};
