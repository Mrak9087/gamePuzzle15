import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { ICell } from '../../helpers/helpers';
// import { init } from '../../store/gameStore';
import { AppDispatch, RootState } from '../../store/store';
import { moveCell } from '../../store/gameStore';
import CellView from '../CellView';

import './boardView.css';

const BoardView = () => {
    const store = useSelector((state:RootState)=>state)
    const [cells, setCells] = useState<ICell[]>([])
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        setCells([...store.map.flat()])
    },[store.map])

    const handleCellClick = (cell:ICell) => {
        dispatch(moveCell(cell));
    }

    return (
        <div 
            className='board'
            style={{
                '--size':store.size
            } as React.CSSProperties}
        >
            {
                cells.map((item)=>{
                    return <CellView cell={item} handleClick={handleCellClick} key={item.value}/>
                })
            }
        </div>
    );
}

export default BoardView;