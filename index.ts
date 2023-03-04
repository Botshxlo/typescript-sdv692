// Import stylesheets
import './style.css';
import { parse } from 'papaparse';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

fetch('Book1.xlsx')
  .then((response) => response.text())
  .then((csv) => {
    const results = parse(csv, { header: true });
    console.log(results.data); // This will output an array of objects representing the data in the CSV file
  });
