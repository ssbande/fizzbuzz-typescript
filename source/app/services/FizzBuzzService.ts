import { List, Enumerable } from 'linqts';
import { FizzBuzzResult as FizzBuzzResult } from './../factory/FizzBuzzResult';

class FizzBuzzService {
  public generateList(num: number): any {
    try {
      if (!this.validateInput(num)) {
        const error = new Error('Given input is invalid');
        return this.createErrorResponse(num, error);
      }

      const listResult = this.updateListIfWednesday(this.createList(num));
      return this.createResponse(listResult);
    } catch (e) {
      console.log('error occured: ', e);
      return this.createErrorResponse(num, e);
    }
  }

  private validateInput(num: number): boolean {
    return true;
  }

  private createList(num: number): string[] {
    const res = Enumerable.Range(1, num).Select(this.fizzBuzzText).ToArray();
    return res;
  }

  private fizzBuzzText(val: number): string {
    const numVal = (val % 15 === 0 || val % 3 === 0 || val % 5 === 0) ? val : -1;
    if (numVal === -1) {
      return val.toString();
    }

    const fbResult = new FizzBuzzResult();
    const fbInstance = fbResult.createAppropriateInstance(val);
    const valText = fbInstance.fetchAppropriateText(val);

    return valText;
  }

  private updateListIfWednesday(strList: string[]): string[] {
    const d = new Date();
    const dayId = d.getDay();

    if (dayId === 3) {
      strList = new List<string>(strList)
        .Select(x => x.replace('FIZZ', 'WIZZ'))
        .Select(x => x.replace('BUZZ', 'WUZZ'))
        .ToArray();
    }

    return strList;
  }

  private createErrorResponse(num: number, err: Error) {
    return {
      errorCode: 407,
      errorMsg: err.message + ' input was: ' + num
    };
  }

  private createResponse(model: string[]) {
    return model;
  }
}

export { FizzBuzzService }