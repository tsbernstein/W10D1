import React from 'react';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component{
    constructor(props){
        super(props)
        this.state = {explored: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let flagging = false;
        if(e.altKey){
            flagging = !flagging;
        }
        this.props.updateGame(this.props.tile, flagging)
        // this.setState(prevState => {
        //     explored: !prevState.explored;
        // })
    }

    render(){
        const text
        if(this.props.tile.explored){
            if(this.props.tile.bombed){
                text = '&#128163';
            }
        }
        // if(this.props.tile.explored && !this.props.tile.bombed){
        //         return (
        //             <div className="tile revealed">
        //                 {this.props.tile.adjacentBombCount()}
        //             </div>
        //         )
        //         this.props.tile
        // } else if (this.props.tile.bombed && this.props.tile.explored) {
        //     return(
        //         <div className="tile bombed">
        //             &#128163;
        //         </div>
        //     )
        // } else if (this.props.tile.flagged && !this.props.tile.explored) {
        //     return(
        //         <div className="tile flagged" onClick={this.handleClick}>
        //             &#9873;
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div className="tile" onClick={this.handleClick}>
                    
        //         </div>
        //     )
        // }
    }
}

export default Tile;