import { FC, useCallback } from 'react';
import { useEvent } from '../../../helpers/hooks';
import MenuItem from '../MenuItem';

import './menuContent.css'


interface IMenuContent {
    closeMenu: () => void;
}

const MenuContent:FC<IMenuContent> = ({closeMenu}) => {

    
    const clickOutside = useCallback((e:Event) =>{
        if (!(e.target as HTMLElement).closest('.menu')) {
            closeMenu()
        }
    },[])
    

    useEvent('click', clickOutside);

    return (
        <div className='menuContent'>
            <MenuItem text='4 x 4' size={4}/>
            <MenuItem text='5 x 5' size={5}/>
            <MenuItem text='6 x 6' size={6}/>
            <MenuItem text='7 x 7' size={7}/>
        </div>
    );
}

export default MenuContent;