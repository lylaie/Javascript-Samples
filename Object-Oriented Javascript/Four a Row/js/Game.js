class Game {
  constructor(){
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  createPlayers(){
    const player = [];

    let Player1 = new Player('Player 1',1 , "#e15258", active = true);
    player.push(Player1);
    let Player2 = new Player('Player 2', 2, '#e59a13');
    player.push(Player2);

    return player;
    }

    startGame(){
      
    }

  }
