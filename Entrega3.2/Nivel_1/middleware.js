class Middlewares {
  constructor(){
    this.middlewares = []
  }

  add(fn){
    this.middlewares.push(fn)
  }

  execute(operands){
    this.middlewares.forEach(fn => {
      operands = fn(operands)
    });
    return operands
  }

}

module.exports = Middlewares;