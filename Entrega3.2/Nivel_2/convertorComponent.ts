type ArticuloType = {
  nombre: string,
  precio: number,
  divisa: string
}

interface Exchange {
  convertor(arg:ArticuloType[]):string;
}

class CovertorComponent implements Exchange{
  public convertor(arg:ArticuloType[]): string {
    return `${arg}`
  }
}

export {
  Exchange,
  CovertorComponent
}