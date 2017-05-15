import { container as container } from './../ioc';
import { IFizzBuzzResult as IFB } from './IFizzBuzzResult';

class FizzBuzzResult {
  private readonly results: IFB[];

  constructor() {
    this.results = container.getAll<IFB>('IFB');
  }

  public createAppropriateInstance(id: number): IFB {
    const instance = this.results.find((x) => x.getResult(id));
    return instance;
  }
}

export { FizzBuzzResult }