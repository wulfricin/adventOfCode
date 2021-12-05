export class BingoBoard {
  private horizontalLines: number[][];
  private verticalLines: number[][];
  constructor () {
    this.horizontalLines = [];
  }
  public addLine = (line: string) => {
    const numbers = line.split(' ').map(Number).filter(val => val);
    this.horizontalLines.push(numbers);
  } 
  public generateVerticals = () => {
    this.verticalLines = Array.apply(null, Array(this.horizontalLines.length)).map(() => Array.apply(null, Array(this.horizontalLines[0].length)).map(() => 0));
    this.horizontalLines.forEach((line, indexY)=>  line.forEach((value, indexX) => this.verticalLines[indexX][indexY] = value))
  }
  public checkVerticalFinalValue = (drawnNumber: number) => {
      const leftOverValues = this.verticalLines.reduce((sum, line)=> {
        line.forEach(val => {
          sum+= val;
        });
        return sum;
      }, 0);
      console.log('VerticalLines',drawnNumber, this.verticalLines, drawnNumber * leftOverValues);
      process.exit();
  }
  public checkHorizontalFinalValue = (drawnNumber: number) => {
      const leftOverValues = this.horizontalLines.reduce((sum, line)=> {
        line.forEach(val => {
          sum+= val;
        });
        return sum;
      }, 0);
      console.log('HorizontalLines', this.horizontalLines, drawnNumber * leftOverValues);
      process.exit();
  }
  public checkNumber = (drawnNumber: number) => {
    this.verticalLines.forEach(line => line.forEach((value, index) => { 
      if (value === drawnNumber) {
        line[index] = 0;
        if (line.every(val => val === 0)) {
          this.checkVerticalFinalValue(drawnNumber);
        }
      }
    }));
    this.horizontalLines.forEach(line => line.forEach((value, index) => { 
      if (value === drawnNumber) {
        line[index] = 0;
        if (line.every(val => val === 0)) {
          this.checkHorizontalFinalValue(drawnNumber);
        }
      }
    }));
  }
}
