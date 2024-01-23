import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = join(dirname(fileURLToPath(import.meta.url)), '../uhyo.txt');
const fileContent = readFileSync(filePath, 'utf-8');

console.log(fileContent);