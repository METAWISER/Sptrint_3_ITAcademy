type MiddleType<T> = (params: T, next: () => void) => void;

export class Middleware<T> {
  public calculatorFn: MiddleType<T>[] = [];

  public addMiddleware(middleware: MiddleType<T>): void {
    this.calculatorFn.push(middleware);
  }

  public execute(operands: T): T {
    const clonedParams = { ...operands };

    const executeMiddleware = (index: number): void => {
      if (index < this.calculatorFn.length) {
        const middleware = this.calculatorFn[index];
        middleware(clonedParams, () => executeMiddleware(index + 1));
      }
    };

    executeMiddleware(0);

    return clonedParams;
  }
}