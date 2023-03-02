import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import CellView from '../CellView';

import './boardView.css';

const BoardView = () => {
    const store = useSelector((state:RootState)=>state)

    return (
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
    );
}

export default BoardView;