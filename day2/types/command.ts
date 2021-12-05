export interface SubmarineCommand {
  direction: SubmarineDirection,
  length: number
}

export enum SubmarineDirection {
  Forward= 'forward',
  Down = 'down',
  Up = 'up',
}
