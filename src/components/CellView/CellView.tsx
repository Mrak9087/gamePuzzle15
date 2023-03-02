import {FC, useMemo} from 'react'
import { ICell } from '../../helpers/helpers'
import './cellView.css';

interface ICellView {
    cell:ICell
    handleClick:(cell:ICell)=>void;
}

const CellView:FC<ICellView> = ({cell,handleClick})=>{

    const cl = useMemo(()=>{
        return cell.value === 0 ? 'cell empty' : 'cell'
    },[cell.value])

    const tp = useMemo(()=>{
        return cell.y * 50
    },[cell.y])

    const lft = useMemo(()=>{
        return cell.x * 50
    },[cell.x])
    
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