import { GamePingPong } from "./utilities/initGame.js";
import { Dot } from "./utilities/dot.js";
import { BarNavegate } from "./utilities/bar-navigate.js";
import { BoardNavegate } from "./utilities/board-navegate.js";

/**
 * en este apartado de crean las diferentes instancias 
 * para los componentes del juego comentario al spiner kjhsdyrn
 */
const board = new BoardNavegate(800, 430);
const leftBar = new BarNavegate(2, 100, 20, 130, board);
const rightBar = new BarNavegate(777, 100, 20, 130, board);
const dot = new Dot(350, 100, 10, board);
const canvas = document.getElementById("canvas");
const gamePingPong = new GamePingPong(canvas, board);
/**
 * eventos para capturar el movimiento de las teclas
 */
document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 38:
      event.preventDefault(); //previente que la pagina se recargue
      if (rightBar.y > 0) {
        rightBar.up();
      }
      break;
    case 40:
      event.preventDefault();
      if (rightBar.y < 300) {
        rightBar.down();
      }
      break;
    case 87:
      event.preventDefault();
      leftBar.y > 0 && leftBar.up();

      break;

    case 32:
      event.preventDefault();
      board.playing = !board.playing;
      break;
    case 83:
      leftBar.y < 300 && leftBar.down();
      break;
  }

});
/**
 * funcion encargada de pintar lapelota
 */
gamePingPong.draw();

window.requestAnimationFrame(controller);
function controller() {
  if (gamePingPong.finish) {
    alert("PERDISTE :( INTENTALO DE NUEVO");
    location.reload()
    return;
  }
  gamePingPong.play();
  // animacion
  requestAnimationFrame(controller);
}

