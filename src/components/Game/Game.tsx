import React from 'react';
import BoardView from '../BoardView';
import ButtonShuffle from '../ButtonShuffle';

import './game.css';

const Game = () => {
    return (
        <div className='game'>
            <BoardView />
            <ButtonShuffle />
        </div>
    );
};

export default Game;