export interface ICell {
    x:number;
    y:number;
    value:number;
}

export function initMap(size:number):ICell[][]{
    const result:ICell[][] = [];
    for (let i = 0; i < size; i++) {
        const row: ICell[] = []
        for (let j = 0; j < size; j++) {
            const val = (i * size) + (j+1); 
            const cell: ICell = {
                y:i,
                x:j,
                value: val
            }
            row.push(cell)
        }
        result.push(row)
    }
    result[size-1][size-1].value = 0;
    return result;
}

export function indexToCoord(index:number, size:number){
    if (index < 0) index = 0;
    if (index > size-1) index = size-1;
    const x = index % size;
    const y = Math.floor(index / size);
    return {x,y};
}