// const arr = [351, 154, 284, 36, 874, 43, 685]

// for (const i in arr) {
//     console.log(i, arr[i]);
// }

// for (const el of arr) {
//     console.log(el);
// }

// const cat = {
//     kittens: ['Беляш', 'Михаил', 'Чарли'],
//     favoriteToy: {
//       name: 'мячик',
//       size: 'маленький',
//     },
//   }
 
// console.log(cat);

// const cat2 = Object.create(cat)

// console.log(cat2.kittens);

// cat2.kittens = 'sonia'

// console.log(cat)
// console.log(cat)
// console.log(cat2)
// console.log(cat2.kittens);

// const keysCat = Object.keys(cat)
// console.log(keysCat);


// const valuesCat = Object.values(cat)
// console.log(valuesCat);

// const cat = {
//     name: 'cat',
//     age:8,
//     kittens: ['barsik'],
// }

// const entriesCat = Object.entries(cat)
// console.log(entriesCat);

// const arr = [['kittens', ['Беляш', 'Михаил', 'Чарли']],
// ['favoriteToy', {name: 'мячик',size: 'маленький',}]]
// console.log(arr);

const person = {
    name: 'dina',
    age: 36,
    gender: 'female',
}

// const person2 = person

// console.log('person',person);
// console.log('person2',person2);

// person.name = 'tania'
// person2.age = 45

// console.log('person',person);
// console.log('person2',person2);

// const person3 = Object.assign({},person)

// person3.name = 'oka'
// console.log('person',person);
// console.log('person3',person3);

// person.name = 'ira'
// console.log('person',person);
// console.log('person3',person3);

// const ab = {nick:'smth'}
// const personab = Object.assign(person, ab)
// console.log(personab);

// const person4 = Object.freeze(person)
// person.name = 'ira'
// person4.name = 'ira'
// console.log('person',person);
// console.log('person4',person4);

const person5 = Object.seal(person)
person.name = 'ira'
person5.name = 'kira'
person.lol = 'gfh'
console.log('person',person);
console.log('person5',person5);





  