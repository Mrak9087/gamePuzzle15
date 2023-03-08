import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CellView from '../CellView';

import './boardView.css';

const BoardView = () => {
    const store = useSelector((state:RootState)=>state)
    const ref = useRef<HTMLDivElement|null>(null);

    useEffect(()=>{
        console.log(document.body.getBoundingClientRect());
    },[])

    return (
        <>
            <div ref={ref} className='board'>
                <div 
                    className='board-wrap'
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
                {
                    store.isWin && <div className='message'> Победа! </div>
                }
            </div>
        </>
    );
}

export default BoardView;