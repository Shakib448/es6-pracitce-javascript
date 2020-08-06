// function doubleIt(num){
//     return num * 2 ;
// }


// const doubleIt = function myFuc(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const add = (x, y) => x + y;

const wideFuc = (x, y) => {
    const sum = x + y;
    const diff = x - y ;
    const result = sum * diff;
    return result;
}

const result = wideFuc(7 , 5);
console.log(result);