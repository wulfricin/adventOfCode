import * as fs from 'fs';
import * as readline from 'readline';
export const processLineByLine = async () => {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  const arrayInput: number[] = [];
  for await (const line of rl) {
    arrayInput.push(Number(line));
  }
  return arrayInput;
}
