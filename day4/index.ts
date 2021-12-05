import { processLineByLine } from './readFile';

const main = async () => {
  const { bingoBoards, bingoDrawing } = await processLineByLine();

  for(const drawnNumber of bingoDrawing) {
    bingoBoards.forEach((board) => board.checkNumber(drawnNumber))
  }
};

main();
