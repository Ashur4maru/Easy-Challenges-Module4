import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question('Met welke getal beginnen we? '));
let end = parseFloat(await userInput.question('Met welke getal eindigen we? '));

let deler1 = parseFloat(await userInput.question('Geef een eerste deler in: '));
let deler2 = parseFloat(await userInput.question('Geef een tweede deler in: '));

for (let i = start; i <= end; i++) {
  if (i % deler1 === 0 && i % deler2 === 0) {
    console.log(i);
  }
}

process.exit();