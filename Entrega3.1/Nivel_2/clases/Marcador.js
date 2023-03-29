// Definir la clase Marcador usando el patrón Singleton
export class Marcador {
  static instance;
  constructor() {
    if (!!Marcador.instance) {
      return Marcador.instance;
    }
    Marcador.instance = this;
  }
  // Método para actualizar el marcador
  actualizarMarcador(jugadores) {
    let maxPuntos = 0;
    let ganador = null;
  
    for (const jugador of jugadores) {
      if (jugador.puntos > maxPuntos) {
        maxPuntos = jugador.puntos;
        ganador = jugador.nombre;
      }
    }

    return `Ganador: ${ganador} con ${maxPuntos} puntos`;
  }
}

