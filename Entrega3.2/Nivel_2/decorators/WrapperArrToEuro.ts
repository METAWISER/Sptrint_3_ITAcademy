import Wrapper from "./Wrapper";
import rates from "../currency_conversions.json";

type ArticuloType = {
  nombre: string;
  precio: number;
  divisa: string;
};



export class WrapperArrToEuro extends Wrapper {
  public convertor(arg:ArticuloType[]): string {
    
      let result = 0;
      let products ='';
      for (let i = 0; i < arg.length; i++) {
        products += ' '+ arg[i].nombre;
        const rateTypes = (arg[i].divisa + '_EUR') as keyof typeof rates;
        const rateToEuro =  arg[i].precio * rates[rateTypes];
        result += Number(rateToEuro.toFixed(2))

      }
      return `El costo total de los productos${products} es de ${result}`;
    ;
  }
}

