const num = document.getElementById('number')
const checkBtn = document.getElementById('check')
const errorMessage = document.getElementById('error')

const random = Math.floor(Math.random() * 10)+1
let count = 1

checkBtn.onclick = () => {
    if(random === +num.value) {
        errorMessage.style.display = 'none'
        addScore()
        return
    } else if(random < +num.value){
        errorMessage.textContent = 'Загаданное число меньше'
        errorMessage.style.display = 'block'        
       
    } else if(random > +num.value){
        errorMessage.textContent = 'Загаданное число больше'
        errorMessage.style.display = 'block'        
    }
    count++
}

function addScore(){
    const score = localStorage.getItem('score')
    const user = {
        name: sessionStorage.getItem('username'),
        score: count,
    }
    const table = []
    table.push(user)
    if (score){       
        table.push(...JSON.parse(score))
    } 
        localStorage.setItem('score',JSON.stringify(table))  
     window.location.href = '../score/score.html'
}





// let A = Math.floor(Math.random() * 10)
// console.log(A);

// let i = 0
// let attempts = 10 // сколько дано попыток
// let count = 1  // счетчик попыток (с какой угадает)


// while (i < attempts ) {

//     let B = prompt()

// if (B>A) {
//     console.log('много');
    
// }   else if  (B<A) {
//     console.log('мало');
    
// }   else {
//     console.log('вы угадали')
//     console.log(count);
//     break
// }

// i++
// count++
// }

// if (attempts < count) {
// console.log('закончились попытки')}


