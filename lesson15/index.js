// const arr = [545,87,653,965,45,8,5,874]

// let max = arr[0]
// let min = arr[0]

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]>max) {
//         max=arr[i]
//     }
//     if (arr[i]<min) {
//         min=arr[i]
//     }
    
// }

// console.log(max);
// console.log(min);


// function hello (name) {
//     console.log(`hi, ${name}`);
    

// }

// function input (f) {
//     const name = prompt('enter')
//     f(name)
// }

// input (hello)

// function AtoB (callback) {
//     const trans = 'bus'
//     const friend = 'sania'
//     callback(trans,friend)
    

// }

// function BtoC (trans, friend) {
   
//     console.log(`trav on ${trans} with ${friend}`);    

// }

// AtoB (BtoC)



// let trans1  
// let friend1 

// function AtoB1 () {
//     trans1 = 'bus'
//     friend1 = 'sania'
//     // callback(trans1,friend1)

// }

// function BtoC1 () {
   
//     console.log(`trav on ${trans} with ${friend}`);    

// }
// AtoB1 ()
// AtoB1 ()


// const createPlayer = (initialScore) => {

//     let score = initialScore; // Приватная переменная**    
//     return {    
//     getScore: function() {    
//     return score;    
//     },    
//     addScore: function(amount) {    
//     score += amount;    
//     }    
//     };    
//     } 

    
//     const player1 = createPlayer(100); 
//     console.log(player1);
       
//     console.log(player1.getScore()); // 100    
//     player1.addScore(50);  
//     player1.addScore(50);   
//     console.log(player1.getScore()); // 150

    

//     const player2 = createPlayer(200); 
//     console.log(player2);
       
//     console.log(player2.getScore()); // 100    
//     player2.addScore(300);    
//     console.log(player2.getScore()); // 150



// const arr = [31,54,8,73,4,74,38,54,83,37]

// const resultSome = arr.some(el => el%3===0)
// console.log(resultSome);


// const resultSome2 = arr.some(f)

// function f(el) {
//     return el%3 ===0
// }    

// console.log(resultSome2);

// let res=false

// for (let i=0; i<arr.length; i++) {
//     const isTrue = f(arr[i])
//     if(f(isTrue===true)){
//         res=true
//         break
//     }

// }

// function f(element) {
//     // return element % 3 ===0
//     if(element % 3 ===0){
//         return true

//     } else {
//         return false
//     }
// }

// console.log(res);


// const arrowF = el => true


// const arr = [31,813,8,73,4,74,38,54,83,37]

// const resultEvery = arr.every(el=>el>0)
// console.log(resultEvery);

// const resultFilter = arr.filter(el=> el%3 ===0)
// console.log(resultFilter);

// const resultSort = arr.sort((a,b)=>a-b)
// console.log(resultSort);
// console.log(arr);

// const resultSort = arr.toSorted((a,b)=>a-b)
// console.log(resultSort);
// console.log(arr);


// const toflatArr = [[1,[5,6],2,3],[5,6],7]
// const flatArr = toflatArr.flat()
// console.log(flatArr);

// const arr = [31,813,8,73,4,74,38,54,83,37]

// const arr = [31,813,8]

// arr.forEach((el,i,arr) =>{
//     console.log(el);
//     console.log(i);
//     console.log(arr);
    
// })
// arr.map((el,i,arr) =>{
//     console.log(el);
//     console.log(i);
//     console.log(arr);
    
// })

// arr.forEach(el => {
//     console.log(el*2);
    
// })
// console.log(arr);

// const resultMap = arr.map(el => el*2)
// console.log(resultMap);

// const flatMapArr = [[2,3], [3], [4]]

// const resFlatMap = flatMapArr.flatMap(el=>el*3)
// console.log(resFlatMap);


const arr = [31,813,8,73,4,74,38,54,83,37]

// const resultFind = arr.find(el => el === 8)
// console.log(resultFind);

// const resultFindIndex = arr.findIndex(el => el === 8)
// console.log(resultFindIndex);

const sum = arr.reduce((acc,el) => acc+el, 0)
console.log(sum);




