export interface ICell {
    x:number;
    y:number;
    value:number;
}

export function initMap(size:number):ICell[]{
    const result:ICell[]= [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const val = (i * size) + (j+1); 
            const cell: ICell = {
                y:i,
                x:j,
                value: val
            }
            result.push(cell)
        }
    }
    result[result.length-1].value = 0;
    return result;
}

export function shuffleCells(cells:ICell[]){

    const emptyCell = cells.filter(item => item.value === 0)[0]

    const shiftRand = () => {
        let step = randFromTo(0,4);
        let x = emptyCell.x;
        let y = emptyCell.y;
        
        switch(step){
            case 0: x--; break;
            case 1: x++; break;
            case 2: y--; break;
            case 3: y++; break;
        }
        
        const cell = cells.filter(item => item.x === x && item.y === y)[0];
        if (cell) {
            cell.x = emptyCell.x;
            cell.y = emptyCell.y;
            emptyCell.x = x;
            emptyCell.y = y;
        }
    }

    for (let i = 0; i < 1000; i++) {
        shiftRand()
    }
}

export function checkWin(cells:ICell[], size:number):boolean{
    for (let i = 0; i < cells.length-1; i++) {
        const value = (cells[i].y * size) + (cells[i].x + 1)
        if (value !== cells[i].value) {
            return false
        }
    }
    return true
}

function randFromTo(from:number, to:number):number{
    let result = from - 0.5 + Math.random() * (to - from +1);
    return Math.round(result);
}