import { processLineByLine } from './readFile';


const main = async () => {
  const inputs = await processLineByLine();

  let result = 0;
  let previousValue = inputs[0];
  for (const currentValue of inputs) {
    if(currentValue > previousValue) {
      result++;
    }
    previousValue = currentValue;
  }
  console.log(result);
  return result;
};

main();
