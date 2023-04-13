import { Exchange } from "../convertorComponent";

 abstract class Wrapper implements Exchange {
  protected exchange: Exchange;
  constructor(exchange: Exchange){
    this.exchange = exchange
  }

  public convertor(arg:[]) :string {
    return this.exchange.convertor(arg)
  }
}

export default Wrapper