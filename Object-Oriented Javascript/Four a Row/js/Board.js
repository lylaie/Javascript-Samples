class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  createSpaces(){
    const spaces = [];

    for (let i = 0; i < this.columns; i++) {
      const column  = [];
      for (let y = 0; y < this.rows; y++) {
        const space = new Space(i, y);
        column.push(space);
      }

      spaces.push(column);
    }

  }

  drawHTMLBoard(){
    for (let column of this.spaces){
      for (let space of column) {
        space.drawSVGSpace();
      }
    }
  }
}
