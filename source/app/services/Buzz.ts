import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IFizzBuzzResult as IFB } from './../factory/IFizzBuzzResult';

@injectable()
class Buzz implements IFB {
  public fetchAppropriateText(id: number): string {
    return 'BUZZ';
  }

  public getResult(id: number): boolean {
    return id % 3 !== 0 && id % 5 === 0;
  }
}

export { Buzz };