import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkWin, ICell, initMap, shuffleCells } from "../helpers/helpers";


const initialState = {
    cells: initMap(4),
    isWin: false,
    isPlay: false,
    size: 4,
}



export const gameStore = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        moveCell(state,payload:PayloadAction<ICell>){
            if (state.isWin || !state.isPlay) return
            const {x,y,value} = payload.payload;
            const emptyCell = state.cells[state.cells.length-1]
            if (Math.abs(x-emptyCell.x) + Math.abs(y-emptyCell.y) != 1) return;

            const emptyX = emptyCell.x;
            const emptyY = emptyCell.y;
        
            const cell = state.cells[value-1];
            cell.x = emptyX;
            cell.y = emptyY;

            emptyCell.x = x;
            emptyCell.y = y;
            
            state.isWin = checkWin(state.cells,state.size);
            state.isPlay = !state.isWin;
        },
        shuffle(state){
            state.isWin = false;
            state.isPlay = true;
            shuffleCells(state.cells);
        },
        setSize(state,payload:PayloadAction<number>){
            state.size = payload.payload;
            state.cells = initMap(state.size)
        }
    } 
})

export const {moveCell, shuffle, setSize} = gameStore.actions;

export default gameStore.reducer