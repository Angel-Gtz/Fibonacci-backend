export default (num: number):number => {
    let x = 0;
    let y = 1;
    let n = 0;

    if(num === 1){
        return 1
    }
    
    for(let i = 0; i < num - 1; i++){
        n = x + y;
        x = y
        y = n
    }
    return n
}