/**
 * en este apartado de crean las diferentes instancias 
 * para los componentes del juego
 */
const board = new Board(800, 400);
const leftBar = new Bar(20, 100, 40, 100, board);
const rightBar = new Bar(735, 100, 40, 100, board);
const ball = new Ball(350, 100, 10, board);
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
    alert("Lo siento perdiste");
    location.reload()
    return;
  }
  gamePingPong.play();
  // animacion
  requestAnimationFrame(controller);
}
