// task1

// const arr = [12,2589,657,12,958,657,657,12589,12,2]
// let arr2 = []

// const arr3 = arr.sort()


// for (let i = 0; i < arr3.length; i++) {

//     if (arr3[i]!==arr3[i+1]) {
//         arr2 = arr2.concat(arr[i])
//     }
// }
// console.log(arr3);
// console.log(arr2);


// task2
   
    // let fact = 8 
    // let length = 8 
   
    // for (let i=1; i<(length-1); i++) {

    //     fact = fact*(length-i)
    // }
    // console.log(fact);

// task3

// const year = 1988

// if (year%4===0 && year>=0) {
//     console.log('leap year');
// } else {
//     console.log('not a leap year');
// }


// task4

// const arr = [12,18,12,12,36,78,98,98,98,12];
// let count = {};

// for (let el of arr) {
//     if (count[el] === undefined) {
//     count[el] = 1;
//     } else {
//     count[el]++;
//     }
// }
// console.log(count);


// task5

// const person = {
//     name: 'dina',
//     age: 36,
//     gender: 'female',
//     hands: {
//               first: 'left',
//               second: 'right',
//             },
//     }

// const keys = Object.keys(person)
// console.log(keys);
// console.log(keys.length);


// task6

// const party =[    
//     {name:'jenek',
//     age: 37},
//     {name:'yarik',
//     age: 29},
//     {name:'sania',
//     age: 35},
//     {name:'rostik',
//     age: 40},
//     {name:'dasha',
//     age: 18},
// ]

// console.log(party);

// let partyAge =[]

// for (let i = 0; i < party.length; i++) {

//     if (party[i].age>30) {
//         partyAge = partyAge.concat(party[i])
//     }
// }

// console.log(partyAge);


// task7

// let arr =[]
// const needLength = 10

// while 
// (arr.length < needLength) {
//     let i = Math.floor(Math.random() * 101)
//     arr = arr.concat(i)  
// }
//     console.log(arr);

// task8

// variant1

// const str = 'желание'

// let arr = str.split('')

// for (let i=0; i<(arr.length/2); i++) {
//     const temp = arr[i]
//     arr[i] = arr[arr.length-(i+1)]
//     arr[arr.length-(i+1)] = temp
// }

// console.log(arr.join(''));


// variant2

// const str = 'желание'

// let reversedStr = ''

// for (let i = str.length-1; i>=0; i--) {
//     reversedStr = reversedStr + str[i]   
// }

// console.log(reversedStr);