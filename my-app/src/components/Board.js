import React from 'react';
import '../App.css';
import Letter from './Letter';
// import Letter from './Letter';

function Board() {
    return (
        <div className="board">
            <div className="row">
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </div>
            <div className="row">
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </div>
            <div className="row">
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </div>
            <div className="row">
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </div>
            <div className="row">
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </div>

        </div>

    )
}

export default Board