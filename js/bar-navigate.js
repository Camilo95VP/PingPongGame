/**
 * Esta clase pone las barras del juego en el campo de juego
 * @class
 */

export class BarNavegate {
  /**
   * constructor 
   */
  constructor(x, y, width, height, board) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.board = board;
    this.board.bars.push(this);
    this.kind = "rectangle";
    this.speed = 5;
  }
  /**
   * Metodos que mueven la barra hacia abajo y hacia arriba
   */
  down() {
    this.y += this.speed;
  }

  up() {
    this.y -= this.speed;
  }
  toString() {
    return "x: " + this.x + " y: " + this.y;
  }
}