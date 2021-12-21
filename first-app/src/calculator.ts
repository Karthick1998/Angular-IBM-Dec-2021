export function add(x : number, y : number) : number {
    return x + y;
}

export function subtract(x : number, y : number) : number {
    return x - y;
}

/* the above two functions as assembled in a 'module' object and the module is exported */

//There can be ONE (and ONLY ONE) default export per module

const utils = {
    isOdd(n: number) : boolean{
        return n % 2 === 1;
    }
}

export default utils;