import React from 'react';
import * as Minesweeper from '../minesweeper';
// import Board from './board';


class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9)
    }
    // this.updateGame = this.updateGame.bind(this)
  }

  // updateGame(){

  // }

  render(){
    return (
      <h1>hi</h1>
      // <Board board={this.state.board} />
    )
  }

}

export default Game;