
// // 'use strict'
// console.log(this);

// function f() {
// 	console.log(this);
	
// }
// f()

// const obj = {
//     name: 'dina',
//     age: 30,
//     greet: function () {
//         // console.log(`Hi, ${this.name}`); 
// 		console.log(this);
		
//     },
// }

// obj.greet()



// const objArrow = {
//     name: 'dina',
//     age: 30,
//     greet: () => {
//         return this.name;
//     }
// }
// console.log(objArrow.greet());


// const obj = {
//     name: 'dina',
//     age: 30,
//     greet: function (a=5) {
//         console.log(`Hi, ${this.name}`);
//         console.log(a);
        
        
//     },
// }

// obj.greet()


// const obj2 = {
//     name: 'patrick',
//     age: 54,
// }
// obj.greet.bind(obj2)(42)

// obj.greet.bind({name:'bind', age:30})()
// obj.greet.call({name:'call', age:30})
// obj.greet.apply({name:'apply', age:30},[10])



// class

// const obj = {}
// console.log(obj);


// class Person {
//     constructor(name,age) {
//     this.name = name;
//     this.age = age;
//     }
//     greet() {
//     console.log(`Hello, my name is ${this.name}`);
//     console.log(this.age);
//     }
//     static getClassName() {
//         return 'smth'
//     }


//     }
//     const alice = new Person('Alice', 36);
//     alice.greet(); // Hello, my name is Alice
//     console.log(Person.getClassName());
    

// class Animal {
//     constructor(name) {
//         this.name=name;
//     }
//         greet() {
//             console.log(`Hi, my name is ${this.name}`);
//     }
// }

// class Dog extends Animal {
//     constructor (name, type) {
//         super(name)
//         this.type = type
//     }
//     bark() {
//         console.log(`${this.type} ${this.name} barks!`);
//     }
// }

// const rex = new Dog('Rex', 'taxa')
// rex.greet()
// rex.bark()
// console.log(rex);


// console.log(1);
// setTimeout(() => console.log(2), 1000)
// console.log(3);



// function fetchData() {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const data = { name: 'Alice', age: 25 };
//     const error = {
//         message: 'failed',
//         code: 500,
//     }
//     // resolve(data)
//     reject(error);
//     }, 1000);
//     });
//     }
    
//     fetchData()
//     .then((data) => {
//     console.log(data); // { name: 'Alice', age: 25 }
//     })
//     .catch((error) => {
//     console.error(error);
//     });




// async function fetchData() {
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() => {
// 			const data = { name: 'Alice', age: 25 };
//             // resolve(data);
// 			reject(data);
// 		}, 1000);
// 	});
// }

// async function main() {
// 	try {
// 		const data = await fetchData();
// 		console.log(data); // { name: 'Alice', age: 25 }
// 	} catch (error) {
// 		console.error(error);
// 	} finally {
//     console.log('finally');
//     }
    
// }

// main();



// async function fetchUserData() {
// 	try {
// 		const response = await fetch(
// 			'https://jsonplaceholder.typicode.com/users/2'
// 		);
//         // console.log(response);
        
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}
// 		const user = await response.json();
// 		console.log(user);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// fetchUserData();



// async function postData() {
// 	const data = {
// 		title: 'foo',
// 		body: 'bar',
// 		userId: 1,
// 	};

// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
// 			method: 'POST', // Метод запроса
// 			headers: {
// 				'Content-Type': 'application/json', // Указываем тип содержимого
// 			},
// 			body: JSON.stringify(data), // Преобразуем объект в JSON
// 		});

// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}

// 		const result = await response.json();
// 		console.log('Success:', result);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// postData();


// async function fetchUserData() {
// 	try {
// 		const response = await fetch(
// 			'https://jsonplaceholder.typicode.com/posts/2'
// 		);
//         console.log(response);
        
// 		if (!response.ok) {
// 			throw new Error('Network WOW');
// 		}
// 		const user = await response.json();
// 		console.log(user);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// fetchUserData();


function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('Err', error));
    
}
fetchData()