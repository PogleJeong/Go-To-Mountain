export const range = (index:number) => {
    let arr = [];
    for(let i=0; i < index+1; i++) {
        arr.push(i);
    }
    return arr;
}