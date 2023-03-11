
import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setSize } from '../../../store/gameStore';

import './menuItem.css';

interface IMenuItem {
    text: string;
    size: number;
}

const CELL_SIZE = 70;
const BORDER = 20;

const MenuItem:FC<IMenuItem> = ({text,size}) => {
    const store = useSelector((state:RootState)=>state);
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(setSize(size))
    }

    const clActive = useMemo(()=>{
        return store.size === size ? 'activeItem' : ''
    },[size, store.size])

    const clNone = useMemo(()=>{
        const docWidth = Math.floor(document.body.getBoundingClientRect().width);
        const gameWidth = size * CELL_SIZE + BORDER;
        return gameWidth > docWidth ? 'itemNone' : ''
    },[size])

    return (
        <div
            onClick={handleClick}
            className={`menuItem ${clActive} ${clNone}` }
        >
            {text}
        </div>
    );
}

export default MenuItem;