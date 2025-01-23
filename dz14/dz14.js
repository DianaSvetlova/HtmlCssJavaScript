// task1

// function isPrime (n) {
//     for (let i = 2; i<n; i++) {
//         if (n%i===0) {
//             return false
            
//         } else {
//             return true;
//         } 
//     }
// }

// console.log(isPrime (89) ); // почему-то не работает с 1 и 2(((


// task2

// function isPalindrome(str) {
//     const arr = str.split('')
//     console.log(arr);
//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i]===arr[arr.length-1]){
//             return true
//         } else {
//             return false
//         }

//     }
// }

// console.log(isPalindrome('довод'));



//task3

// function uniqueValues (arr) {
//     arr=arr.sort()
//     console.log(arr);
//     let arrUniqueValues =[]
//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i]!==arr[i+1] && arr[i]!==arr[i-1]) {
//             arrUniqueValues = arrUniqueValues.concat(arr[i])
//         }
//     }
//     return arrUniqueValues
// }

// console.log((uniqueValues([12,78,12,89,56,89,12,98])));


// task4

// function sumRange(start, end) {

//     let arr =[]
//     let sum =0
//     for (let i = start; i<=end; i++) {        
//         arr = arr.concat(i)                
//     }

//     console.log(arr); 
//     for (let i = 0; i<arr.length; i++) {
//     sum = sum + arr[i]
//     }
//     return sum
//     }   

// console.log(sumRange(3, 6));
