import * as fs from 'fs';
import * as readline from 'readline';
import { SubmarineCommand, SubmarineDirection } from './types/command';
export const processLineByLine = async () => {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  const arrayInput: SubmarineCommand[] = [];
  for await (const line of rl) {
    const [direction, length] = line.split(' ');
    arrayInput.push({ 
      direction: direction as SubmarineDirection,
      length: Number(length)
    });
  }
  return arrayInput;
}
