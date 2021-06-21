import React from 'react';
import Tile from './tile';

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='board'>
                {this.props.board.grid.map((row, i) => {
                    return (
                        <div key={i}>
                        {row.map((tile, j) => {
                            return(
                                <Tile
                                tile={tile}
                                updateGame={this.props.updateGame}
                                key={[i, j]}
                                />
                            )
                        })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Board;
