import {Juego} from './clases/Juego.js'


const listaJugadores = document.getElementById('jugadores')
function showPlayersStatus (jugadores){
  jugadores.sort((a,b)=>b.puntos -a.puntos)
  for(const jugador of jugadores){
    const elementoJugador = document.createElement('li')
    elementoJugador.textContent = `${jugador.nombre}: ${jugador.puntos}`
    listaJugadores.appendChild(elementoJugador)
  }
}

function showScoreBoard(scoreBoard) {
  const elementoMarcador = document.createElement("h4");
  const divMarcador = document.getElementById("marcador");
  divMarcador.append(elementoMarcador)
  elementoMarcador.textContent = scoreBoard
}


// Crear un nuevo juego
const juego = new Juego();

// Añadir jugadores al juego
juego.addJugador("Carlos");
juego.addJugador("Genesis");
juego.addJugador("Caleb");
juego.addJugador("Bartholome");
juego.addJugador("Danny");


// Añadir puntos a los jugadores
juego.addPuntos("Carlos", 58);
juego.addPuntos("Carlos", 5);
juego.addPuntos("Carlos", 5);
juego.addPuntos("Carlos", 5);
juego.addPuntos("Carlos", 5);
juego.addPuntos("Genesis", 100);
juego.addPuntos("Caleb", 2);
juego.addPuntos("Caleb", 500);
juego.addPuntos("Bartholome", 1);
let scoreBoard = juego.addPuntos("Danny", 50);
showScoreBoard(scoreBoard)



showPlayersStatus(juego.jugadores)



