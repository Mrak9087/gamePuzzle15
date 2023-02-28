import { createSlice } from "@reduxjs/toolkit";
import { ICell } from "../helpers/helpers";


const initialState = {
    cells: [] as ICell[],
    isWin: false,
    size: 4,
}

export const gameStore = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {

    } 
})

export const {} = gameStore.actions;

export default gameStore.reducer