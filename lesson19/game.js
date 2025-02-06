let A = Math.floor(Math.random() * 10)
console.log(A);

let i = 0
let attempts = 10 // сколько дано попыток
let count = 1  // счетчик попыток (с какой угадает)


while (i < attempts ) {

    let B = prompt()

if (B>A) {
    console.log('много');
    
}   else if  (B<A) {
    console.log('мало');
    
}   else {
    console.log('вы угадали')
    console.log(count);
    break
}

i++
count++
}

if (attempts < count) {
console.log('закончились попытки')}
