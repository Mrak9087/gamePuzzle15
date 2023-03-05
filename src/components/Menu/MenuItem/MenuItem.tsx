
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setSize } from '../../../store/gameStore';

import './menuItem.css';

interface IMenuItem {
    text: string;
    size: number;
}

const MenuItem:FC<IMenuItem> = ({text,size}) => {
    const store = useSelector((state:RootState)=>state);
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(setSize(size))
    }

    return (
        <div
            onClick={handleClick}
            className='menuItem'
        >
            {text}
        </div>
    );
}

export default MenuItem;