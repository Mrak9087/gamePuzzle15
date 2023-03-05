import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shuffle } from '../../store/gameStore';
import { AppDispatch, RootState } from '../../store/store';
import ButtonShuffle from '../ButtonShuffle';
import CellView from '../CellView';

import './boardView.css';

const BoardView = () => {
    const store = useSelector((state:RootState)=>state)
    const dispatch = useDispatch<AppDispatch>()
    const ref = useRef<HTMLDivElement|null>(null);

    useEffect(()=>{
        console.log(ref.current?.getClientRects());
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
            {/* <button onClick={()=> dispatch(shuffle())}>Перемешать</button> */}
            <ButtonShuffle />
        </>
    );
}

export default BoardView;