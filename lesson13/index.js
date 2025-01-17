// const userName = 'Dina'

// switch (userName) {
//     case 'John': 
//         console.log('welcome, John');        
//         break;
//     case 'Nick': 
//         console.log('welcome, Nick');        
//         break;
//     case 'Jack': 
//         console.log('welcome, Jack');        
//         break;
//     case 'Ann': 
//         console.log('welcome, Ann');        
//         break;

//     default:
//         console.log('fuck off');        
//         break;
// }

// let i = 1

// while (true) {
//    alert(i) 
//    i++
//    if (i=== 5) {
//     break
//    }
// }

// do {
//     alert(i) 
//    i++    
// } while (i<5);

// for (let i = 0; i<10; i++) {
//     console.log(i);
    
// }

// for (let i = 0; i<10; i++) {
//     console.log(i);
    
// }

// for (let i = 0; i<10; i+=3) {
//     if (i%2!==0) {
//     console.log(i);}
    
// }

// const arr = [545,54545374,5435,434,87768,357,48754]

// for (let i = 0; i < arr.length; i++) {
//     // if (arr[i]%2===0 && i%2!==0) {
//     // console.log('i=',i,arr[i])
//     // }
//     console.log('*2',arr[i]*2);
//     console.log('*3',arr[i]*3);
//     if (arr[i]%6===0) {
//         console.log('continue');
//         continue
//     }
//     console.log('*4',arr[i]*4);
//     console.log('-----');
// }

// for (const i in arr) {
//     console.log(i, arr[i]);
// }

// for (const el of arr) {
//     console.log(el);
// }

// const obj = {
//     name: 'dina'
// }

// obj.age = 36
// obj.name = 'not'

// console.log(obj);


// const cat = {
//     kittens: ['Беляш', 'Михаил', 'Чарли'],
//     favoriteToy: {
//     name: 'мячик',
//     size: 'маленький',
//     },
//     }


// const cat = {
//     name: 'cat'
//     age: 8
//     kittens = ['barsik']
//     }

//     const cat2 = Object.create(cat)

//     // console.log(cat);
//     // cat2.kittens = ['barsik']
//     // console.log(cat2);
//     // console.log(cat2.kittens);

//     // const keys = Object.keys(cat)
//     // console.log(keys);
    
//     // const values = Object.values(cat)
//     // console.log(values);

//     const entries = Object.entries(cat)
//     console.log(entries);

// let a = 10
// let n = a
// a= 15
// console.log(a,n);


// const person = {
//     name: 'dina',
//     age: 30,
//     gender:'f',
// }



// const person2 = person

// console.log('person',person);
// console.log('person2',person2);

// person.age = 33
// person2.name = 'jane'

// console.log('person',person);
// console.log('person2',person2);

// const person3 = Object.assign({},person)
// person3.name = 'alex'
// person.name = 'sara'
// console.log('person3',person3);
// console.log('person',person);
// console.log('person2',person2);


// const person4 = Object.freeze(person)
// person4.name ='kek'
// person.lol = true

// console.log('person',person);
// console.log('person4',person4);

// const person4 = Object.seal(person)
// person4.name ='kek'
// person.lol = true

// console.log('person',person);
// console.log('person4',person4);



// const arr = [351, 154, 284, 36, 874, 43, 685]

// for (let i = 0; i < arr.length; i++){
//     for (let j=0; j<arr.length; j++){
//         if (arr[j] > arr[j+1]) {
//             const temp = arr[j]
//             arr[j] = arr [j+1]
//             arr[j+1] = temp
//         }
//     }
//     console.log(i,arr);
    
// }

// console.log(arr);

const person5 = {
    name: 'dina',
    age: 30,
    gender:'female',
}

console.log(person5.name);
console.log(person5['name']);



for (const key in person5) {
    console.log(key, person5[key]);
     
    }
