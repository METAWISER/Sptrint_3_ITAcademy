import {Jugador} from './Jugador.js'
import {Marcador} from './Marcador.js'

// Definir la clase Juego
export class Juego {
  constructor() {
    this.jugadores = [];
    this.marcador = new Marcador();
  }

  // Método para añadir un jugador al juego
  addJugador(nombre) {
    const jugador = new Jugador(nombre);
    this.jugadores.push(jugador);
    this.marcador.actualizarMarcador(this.jugadores);
  }

  // Método para añadir puntos a un jugador
  addPuntos(nombre, puntos) {
    const jugador = this.jugadores.find((j) =>  j.nombre === nombre);
    if(jugador.nombre == nombre)
    jugador.puntos += puntos
    return this.marcador.actualizarMarcador(this.jugadores)
  }
  
}

