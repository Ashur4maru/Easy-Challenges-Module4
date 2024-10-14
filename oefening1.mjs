import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let zijde1 = parseFloat(await userInput.question('Geef zijde1 van een rechthoek: '));
let zijde2 = parseFloat(await userInput.question('Geef zijde2 van een rechthoek: '));

let oppervlakteRechthoek = zijde1 * zijde2;

console.log('Uw oppervlakte is ' + oppervlakteRechthoek + 'm². ');

process.exit();