import {FC, useMemo} from 'react'
import { useDispatch } from 'react-redux';
import { ICell } from '../../helpers/helpers'
import { moveCell } from '../../store/gameStore';
import { AppDispatch } from '../../store/store';
import './cellView.css';

interface ICellView {
    cell:ICell
}

const CellView:FC<ICellView> = ({cell})=>{

    const dispatch = useDispatch<AppDispatch>()

    const cl = useMemo(()=>{
        return cell.value === 0 ? 'cell empty' : 'cell'
    },[cell.value])

    const tp = useMemo(()=>{
        return cell.y * 100
    },[cell.y])

    const lft = useMemo(()=>{
        return cell.x * 100
    },[cell.x])

    const handleClick = (cell:ICell) => {
        dispatch(moveCell(cell));
    }
    
    return (
        <div 
            className={cl}
            style={{
                left:`${lft}px`,
                top:`${tp}px`,
            } as React.CSSProperties}
            onClick={()=>handleClick(cell)}
        >
            {cell.value}
        </div>
    )
}

export default CellView;