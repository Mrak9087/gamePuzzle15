import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICell, initMap, shuffleCells } from "../helpers/helpers";


const initialState = {
    cells: initMap(4),
    isWin: false,
    size: 4,
}



export const gameStore = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        moveCell(state,payload:PayloadAction<ICell>){
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

        },
        shuffle(state){
            shuffleCells(state.cells);
        }
    } 
})

export const {moveCell, shuffle} = gameStore.actions;

export default gameStore.reducer