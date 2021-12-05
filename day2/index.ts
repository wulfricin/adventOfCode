import { processLineByLine } from './readFile';
import { SubmarineDirection } from './types/command';


const main = async () => {
  const inputs = await processLineByLine();

  let currentDepth = 0;
  let currentX = 0;
  for (const currentCommand of inputs) {
    const { direction, length } = currentCommand;
    switch(direction) {
      case SubmarineDirection.Down: 
        currentDepth+=length;
        break;
      case SubmarineDirection.Forward:
        currentX+=length;
        break;
      case SubmarineDirection.Up:
        currentDepth-=length;
        break;
    }
  }
  console.log(`Final Depth = ${currentDepth}`,`Final Horizontal = ${currentX}`, `Total Displacement = ${currentX * currentDepth}`);
  return { currentDepth, currentX };
};

main();
