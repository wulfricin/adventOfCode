import { processLineByLine } from './readFile';

const main = async () => {
  const inputs = await processLineByLine();

  let gamma: number[] = Array.apply(null, Array(inputs[0].length)).map(() => 0);
  let epsilon = Array.apply(null, Array(inputs[0].length)).map(() => 0);
  for (const currentReading of inputs) {
     currentReading.forEach((val, index) => val ? gamma[index]++ : gamma[index]--);
     currentReading.forEach((val, index) => val ? epsilon[index]-- : epsilon[index]++);
  }
  const finalGamma = parseInt(gamma.map((val) => val > 0 ? '1' : '0').join(''),2);
  const finalEpsilon = parseInt(epsilon.map((val) => val > 0 ? '1' : '0').join(''),2);

  console.log(`Gamma Rate: ${finalGamma} , Epsilon: ${finalEpsilon}, Power Consumption: ${finalGamma * finalEpsilon}`);
};

main();
