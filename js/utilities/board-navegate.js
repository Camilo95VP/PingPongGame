/**
 * Clase encargada de crear el tabledo del juego 
 * @class
 */
 export class BoardNavegate {

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
    this.playing = false;
  }

  get elementsBoard() {
    const elements = this.bars.map((e) => e);
    elements.push(this.ball);
    return elements;
  }
}