// const pTextId = document.getElementById('txt')
// console.log(pTextId);

// const pTextClass = document.getElementsByClassName('txt c2')
// console.log(pTextClass);

// const pTag = document.getElementsByTagName('p')
// console.log(pTag);

// const pQuery = document.querySelector('p')
// console.log(pQuery);

// const pQuery = document.querySelector('.c3')
// console.log(pQuery);

// const pQuery = document.querySelector('#txt')
// console.log(pQuery);

// const pQueryAll = document.querySelectorAll('.txt')
// console.log(pQueryAll);



// const pTextId = document.getElementById('txt')

// // pTextId.innerText = 'new text'

// setTimeout(()=>pTextId.innerText = 'new innerText',2000)

// setTimeout(()=>pTextId.textContent = 'new inner Content',4000)

// setTimeout(()=>pTextId.innerHTML = 'new inner HTML',6000)

// setTimeout(()=>{
//     pTextId.innerText = 'new innerText';
//     pTextId.style.color = 'red';
//     pTextId.style.fontSize = '20px';

// },2000)

// setTimeout(()=>{
//     pTextId.textContent = 'new textContent';
//     pTextId.classList.add('p-style');
// },4000)

// setTimeout(()=>{
//     pTextId.innerHTML = 'new innerHTML';
//     pTextId.classList.remove('p-style');
// },6000)

// const helloBtn = document.querySelector('#hello0')

// helloBtn.onclick = () => {alert('hi!')}

// helloBtn.onclick = () => {
//     const pTextId = document.getElementById('txt')
//     pTextId.innerText = 'new innerText';
//     pTextId.style.color = 'red';
//     pTextId.style.fontSize = '20px';
    
// }

// helloBtn.addEventListener('click', () => {
//     alert('hi!')
// })

// helloBtn.addEventListener('click', (event) => {
//     console.log(event.target.id);
    
// })


const inputText = document.querySelector('#inp-text')

// inputText.addEventListener('input', () => {
//     console.log(inputText.value);
    
// })

// inputText.addEventListener('change', () => {
//     console.log(inputText.value);
    
// })

// window.addEventListener('mousemove', event =>{
//     console.log(event.clientX, event.clientY);
    
// })

// const addMouse = document.querySelector('#add-mouse-move')
// const removeMouse = document.querySelector('#remove-mouse-move')

// addMouse.onclick = () => {
//     window.addEventListener('mousemove', logMousePosition)
// }

// removeMouse.onclick = () => {
//     window.removeEventListener('mousemove', logMousePosition)
// }

// function logMousePosition(event) {
//     console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    
// }


const list = document.querySelector('ul')
// const addItem = document.querySelector('#add-item')
// const removeItem = document.querySelector('#remove-item')

// addItem.onclick = () => {
//     const newItem = document.createElement('li')
//     newItem.innerText = 'New Item'
//     list.appendChild(newItem)
// }

// addItem.onclick = () => {
//     const newItem = document.createElement('li')
//     const currentItems = document.querySelectorAll('li')
//     console.log(currentItems);
    
//     newItem.innerText = `Item ${currentItems.length+1}`
//     list.appendChild(newItem)
// }


// removeItem.onclick = () => {
    
//     const currentItems = document.querySelectorAll('li') 
//     if(currentItems.length){
//         list.removeChild(currentItems[currentItems.length-1])
//     } else {
//         alert('nope')
//     }
    
// }

// window.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         // alert('enter')
//         const newItem = document.createElement('li')
//         const currentItems = document.querySelectorAll('li')
//         console.log(currentItems);
        
//         newItem.innerText = `Item ${currentItems.length+1}`
//         list.appendChild(newItem)
//     }
// })




// const items = ['item 1','item 2','item 3', 'xdfvx']

// items.forEach(item => {
//     const newItem = document.createElement('li')
//     newItem.innerText = item
//     list.appendChild(newItem)
// })



