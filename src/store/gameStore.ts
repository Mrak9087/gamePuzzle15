import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICell, initMap } from "../helpers/helpers";


const initialState = {
    map: initMap(4),
    isWin: false,
    size: 4,
    emptyCell:{
        x:3,
        y:3,
        value:0
    } as ICell,
}



export const gameStore = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        moveCell(state,payload:PayloadAction<ICell>){
            const {x,y,value} = payload.payload;
            if (Math.abs(x-state.emptyCell.x) + Math.abs(y-state.emptyCell.y) != 1) return;
            // console.log(x,y);
            const emptyX = state.emptyCell.x;
            const emptyY = state.emptyCell.y;

            state.map[y][x] = state.emptyCell;
            state.map[y][x].x = x;
            state.map[y][x].y = y;

            state.map[emptyY][emptyX] = {
                ...payload.payload,
                x : emptyX,
                y : emptyY,
            };
            // const tmpMap:ICell[][] = [];
            // state.map.forEach(())
            // console.log('before',state.map)
            state.map = state.map.map((item)=>[...item])
            // console.log('after',state.map)
        },
    } 
})

export const {moveCell} = gameStore.actions;

export default gameStore.reducer