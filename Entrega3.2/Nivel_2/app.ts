import { CovertorComponent} from "./convertorComponent";
import {WrapperArrToEuro} from './decorators/WrapperArrToEuro';
 


class Articulo {
  /**
   * @param nombre 
   * @param precio 
   * @param divisa 
   */
  constructor(public nombre: string, public precio: number,  public divisa: string) {}
}


type ArticuloType = {
  nombre: string,
  precio: number,
  divisa: string
}

const articulos: ArticuloType[] = []


const convertor = new CovertorComponent()
const decoratorB = new WrapperArrToEuro(convertor)
const articulo1 = new Articulo('Camisa_Node.js', 20, 'USD')
const articulo2 = new Articulo('Camisa_Typescript', 25, 'GBP')
const articulo3 = new Articulo('Camisa_JavaScript', 30, 'CAD')


articulos.push(articulo1,articulo2,articulo3)


console.log(decoratorB.convertor(articulos));


