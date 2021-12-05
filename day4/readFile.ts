import * as fs from 'fs';
import * as readline from 'readline';
import { BingoBoard } from './BingoBoard';
export const processLineByLine = async () => {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let bingoDrawing: number[] = [];
  let bingoBoards: BingoBoard[] = []; 
  let currentBoard: BingoBoard;
  for await (const line of rl) {
    if (!bingoDrawing.length) {
      bingoDrawing = line.split(',').map(Number);
      continue;
    }
    if (line.length === 0 ) {
      if (currentBoard!) {
        currentBoard.generateVerticals();
        bingoBoards.push(currentBoard);
      }
      currentBoard = new BingoBoard();
      continue;
    }
    currentBoard!.addLine(line);
  }
  return { bingoDrawing, bingoBoards};
}
