// task1

// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/users/8')
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.log('Err', error));
    
// }
// fetchData()


// task2

// async function postData() {
// 	const data = {
// 		title: 'my first post',
// 		body: 'WOW',
// 		userId: 31012025,
// 	};

// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
// 			method: 'POST', 
// 			headers: {
// 				'Content-Type': 'application/json', 
// 			},
// 			body: JSON.stringify(data), 
// 		});
// 		const result = await response.json();
// 		console.log('wonderful', result);
// 	} catch (error) {
// 		console.error('ups', error);
// 	}
// }

// postData();


// task3

// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
//       if (!response.ok) {
//         throw new Error('404 Not Found');
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('My error:', error);
//     }
//   }
  
//   fetchData();
  
