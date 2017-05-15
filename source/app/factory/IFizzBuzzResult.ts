interface IFizzBuzzResult {
  fetchAppropriateText(num: number): string;
  getResult(num: number): boolean;
}

export {IFizzBuzzResult};