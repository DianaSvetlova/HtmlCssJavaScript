// task 1a

// function arithmeticMean (arr) {

// const arrEven = arr.filter(el => el%2===0)
// console.log(arrEven);

// const sum = arrEven.reduce((acc,el) => (acc+el), 0)

// const arithmeticMean = sum/arrEven.length
// console.log(arithmeticMean);
// }

// arithmeticMean ([258,456,0,75,135,-89,87,-13,0,7896,0,-3219])


// task 1b

// function sr (arr) {
//     const arrPositive = arr.filter(el => el>0)
//     console.log(arrPositive);
// }
// sr ([258,456,0,75,135,-89,87,-13,0,7896,0,-3219])



// task 1c

// function summa3 (arr) {
//     const sum = arr.filter(el => el%3===0).reduce((acc,el) => acc+el, 0)
//     console.log(sum);
// }
// summa3 ([258,456,0,75,135,-89,87,-13,0,7896,0,-3219])


// task 2

// function nearMiddle (arr) {
    
// const sum = arr.reduce((acc,el) => (acc+el), 0)

// const arithmeticMean = sum/arr.length
// console.log(arithmeticMean);

// arr.push(arithmeticMean)

// arr.sort((a,b) => (a-b))
// console.log(arr);

// const iArithmeticMean = arr.findIndex(el => el===arithmeticMean) 

// console.log(iArithmeticMean);

// if ((arr[iArithmeticMean+1]-arr[iArithmeticMean])<=(arr[iArithmeticMean]-arr[iArithmeticMean-1])) {
//         console.log(arr[iArithmeticMean+1]);} else {
//         console.log(arr[iArithmeticMean-1]);
//     }
// }

// nearMiddle ([258,456,0,75,135,-89,87,-13,0,7896,0,-3219])


// task 3

// function sumMiddle (arr) {

// const firstZero = arr.indexOf(0)
// const lastZero = arr.lastIndexOf(0)

// const sum = arr.reduce(function (acc, el, i) {
//     if (i>firstZero && i<lastZero) {
//         acc += el
//     }
//     return acc
// }, 0)

// console.log(sum);

// }
// sumMiddle ([21,0,25,0,-5,36,0,98])


// task 4

// function move (arr) {

// function toRight (n) {

//     for (let i=0; i<n; i++) {        
//         arr.unshift('empty');
//     }
//     console.log(arr);
//     }    
//     toRight (3)
// }
// move ([21,0,25,0,-5,36,0,98])


// task 5

// let maxSame = function (arr) {

// let count = {};

// for (let el of arr) {
//     if (count[el] === undefined) {
//     count[el] = 1;
//     } else {
//     count[el]++;
//     }
// }
// // console.log(count);

// const arrCount = Object.values(count)
// // console.log(arrCount);

// let maxCount = arrCount[1]

// for (i=0; i<arrCount.length; i++) {
//     if(arrCount[i]>maxCount) {
//         maxCount = arrCount[i]
//     }
// }
// console.log(maxCount);
// }

// maxSame([1, 3, 4, 1, 1, 1, 1, 1, 3, 4, 5])