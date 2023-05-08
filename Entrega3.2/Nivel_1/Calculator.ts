import {ICalculator} from './ICalculator';

export class Calculator implements ICalculator{
  constructor(public readonly params: {n1: number, n2: number}) {
  }
  add(): number {
    return this.params.n1 + this.params.n2;
  }
  multiply(): number {
    return this.params.n1 * this.params.n2;
  }
  substract(): number {
    return this.params.n1 - this.params.n2;
  }
  
}
