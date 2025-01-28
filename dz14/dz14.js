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

// task 5

// function oneOfaKind (str) {

//     let arr = str.toLowerCase().split('')

//     // console.log(arr);    
    
//        for (let i=0; i<arr.length; i++) {

//         for (let j=i+1; j<arr.length; j++) {

//             if (arr[i] === arr[j]) {               
                
//                 arr.splice(j,1)
                
//                 arr.splice(i,1," ")

//             }                        
            
//             }     
                      
//         }    
//         const arr2 = arr.join('').trim().split('')            
//         console.log(arr2);
//     }      

// oneOfaKind ('шалаш')


// task6

// function massive (n) {
//     let arr =[]
//     while (arr.length < n) {
//         let i = Math.floor(Math.random() * 101)
//         arr = arr.concat(i) 
//     }

//     console.log(arr);

//     let max = arr[0]
//     for (let i=0; i<n; i++) {
//         if (max < arr[i]) {
//             max=arr[i]
//         }
//     } 
//     console.log('max=',max);

//     let min = arr[0]
//     for (let i=0; i<n; i++) {
//         if (min > arr[i]) {
//             min=arr[i]
//         }
//     } 
//     console.log('min=',min);

//     let sum = 0
//     for (let i=0; i<n; i++) {
//         sum += arr[i]
//     }
//     console.log('sum=',sum);

//     let arithmeticMean = sum/n
//     console.log('arithmeticMean=',arithmeticMean);
   
// }

// massive (5)

// task7

// function fibona44i (n) {

//     let arr =[0,1]
//     for (let i=2; i<n; i++) {
//         arr[i] = arr[i-1]+arr[i-2] 
//         // arr = arr.concat(arr[i])
//     }

//     // arr.pop()
//     console.log(arr);
// }

// fibona44i (10)

