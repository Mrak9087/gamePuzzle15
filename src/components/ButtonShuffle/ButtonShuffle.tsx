import { useDispatch } from 'react-redux';
import { shuffle } from '../../store/gameStore';
import { AppDispatch } from '../../store/store';

import './buttonShuffle.css';

const ButtonShuffle = () => {
    const dispatch = useDispatch<AppDispatch>()

    const handleClick = () => {
        dispatch(shuffle())
    }

    return (
        <button className='btnShuffle' onClick={handleClick}>
            Перемешать
        </button>
    );
}

export default ButtonShuffle;