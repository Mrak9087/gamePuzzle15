import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shuffle } from '../../store/gameStore';
import { AppDispatch, RootState } from '../../store/store';
import CellView from '../CellView';

import './boardView.css';

const BoardView = () => {
    const store = useSelector((state:RootState)=>state)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <div 
                className='board'
                style={{
                    '--size':store.size
                } as React.CSSProperties}
            >
                {
                    store.cells.map((item)=>{
                        return <CellView cell={item} key={item.value}/>
                    })
                }
            </div>
            <button onClick={()=> dispatch(shuffle())}>Перемешать</button>
        </>
    );
}

export default BoardView;