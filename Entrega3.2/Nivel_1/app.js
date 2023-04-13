const fs = require('fs')
const Middlewares = require('./middleware')

const middlewares = new Middlewares()
middlewares.add(operands => operands.map(operand => Math.pow(operand, 2)))
middlewares.add(operands => operands.map(operand => Math.pow(operand, 3)))
middlewares.add(operands => operands.map(operand => operand / 2))



class Calculadora {
  constructor(){
    this.json = []
  }

  jsonArgs(path) {
    let readJson = fs.readFileSync(path)
    readJson = JSON.parse(readJson)   
    this.json = Object.values(readJson)
  }

  add() {
    let total = 0;
    for (let numero of this.json) {
      total += numero;
    }
    return total;
  }
  
  substract () {
    let resultado = [0];
    for (let i= 1; i < this.json.length; i++) {
      resultado -= this.json[i];
    }
    return resultado;
  }
  
  multiply() {
    let total = 1;
    for (let numero of this.json) {
      total *= numero 
    }
    return total
  }
  
  divide() {
    return this.json.reduce((a,b)=> a/b)
  }
    
}

const calculadora = new Calculadora()

calculadora.jsonArgs('./values.json')

const op = middlewares.execute(5)
calculadora.add()
const add = () => {
  let total;
  total = op.reduce((a,b)=> a + b)
  return total;

}
/* console.log(calculadora.add(), calculadora.substract(), calculadora.multiply(), calculadora.divide())
 */