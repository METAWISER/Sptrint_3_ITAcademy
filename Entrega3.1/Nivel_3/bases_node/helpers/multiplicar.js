const fs = require('fs');

const crearArchivo = async (n) => {
  console.clear();
  console.log("================");
  await console.log(`Tabla del: ${n}`);
  console.log("================\n");

  try {
    let salida = "";
  for (i = 1; i <= 10; i++) {
    salida += await `${n} x ${i} = ${n * i}\n`;
  }
  console.log(salida);
  fs.writeFileSync(`tabla-${n}.txt`, salida);
  const nombreArchivo = `tabla-${n}.txt`
  return nombreArchivo
    
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo
}
