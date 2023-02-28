import {FC} from 'react'
import { ICell } from '../../helpers/helpers'

import './cellView.css';

interface ICellView {
    cell:ICell
}

const CellView:FC<ICellView> = ({cell})=>{
    return (
        <div>
            {cell.value}
        </div>
    )
}

export default CellView;