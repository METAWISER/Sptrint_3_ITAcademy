const {crearArchivo} = require('./helpers/multiplicar')

const base = 5;

crearArchivo(base)
  .then( nombreArchivo => console.log(nombreArchivo, "Creado"))
  .catch(error => console.log(error))