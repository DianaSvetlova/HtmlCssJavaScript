// task 1a

// const arr = [258,456,0,75,135,-89,87,-13,0,7896,0,-3219]
// console.log(arr);

// const arrEven = arr.filter(el => el%2===0)
// console.log(arrEven);

// const sum = arrEven.reduce((acc,el) => (acc+el), 0)

// const arithmeticMean = sum/arrEven.length
// console.log(arithmeticMean);


// task 1b

// const arrPositive = arr.filter(el => el>0)
// console.log(arrPositive);


// task 1c

// variant1
// const arrThree = arr.filter(el => el%3===0)
// console.log(arrThree);

// const sum = arrThree.reduce((acc,el) => acc+el, 0)
// console.log(sum);


// variant2
// const sum = arr.filter(el => el%3===0).reduce((acc,el) => acc+el, 0)
// console.log(sum);

// task 2

// const arr = [258,456,0,75,135,-89,87,-13,0,7896,0,-3219]
// console.log(arr);

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

//это точно можно как-то проще записать, но я пока не понимаю, как) по действия проще)


// task 3

// const arr =[21,0,25,0,-5,36,0,98]

// const firstZero = arr.indexOf(0)
// const lastZero = arr.lastIndexOf(0)

// const sum = arr.reduce(function (acc, el, i) {
//     if (i>firstZero && i<lastZero) {
//         acc += el
//     }
//     return acc
// }, 0)

// console.log(sum);


// task 4

// const arr = [21,0,25,0,-5,36,0,98]


// function move (n) {

// for (i=0; i<n; i++) {
    
//     arr.unshift(arr.pop());
// }
// console.log(arr);
// }

// move (4)


// task 5

// let arr = [1, 3, 4, 1, 1, 1, 1, 1, 3, 4, 5];
// let count = {};

// for (let elem of arr) {
//     if (count[elem] === undefined) {
//     count[elem] = 1;
//     } else {
//     count[elem]++;
//     }
// }
// console.log(count);

// const arrCount = Object.values(count)
// console.log(arrCount);

// let maxCount = arrCount[1]

// for (i=0; i<arrCount.length; i++) {
//     if(arrCount[i]>maxCount) {
//         maxCount = arrCount[i]
//     }
// }

// console.log(maxCount);