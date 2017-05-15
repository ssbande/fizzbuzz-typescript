import * as inversify from 'inversify';
import { IFizzBuzzResult as IFB } from './factory/IFizzBuzzResult';
import { Fizz as F } from './services/Fizz';
import { Buzz as B } from './services/Buzz';
import { FizzBuzz as FB } from './services/FizzBuzz';

const container = new inversify.Container();
container.bind<IFB>('IFB').to(F);
container.bind<IFB>('IFB').to(B);
container.bind<IFB>('IFB').to(FB);

export { container };