const userName = document.querySelector('#username')
const fullName = document.querySelector('#fullname')
const saveBtn = document.querySelector('#save')

const userNameInfo = document.querySelector('#last-username')
const userFullNameInfo = document.querySelector('#last-fullname')
const userDateInfo = document.querySelector('#input-date')

const clearBtn = document.querySelector('#clear')


// saveBtn.onclick = () => {
//     const date = new Date();
//     const userInfo = {
//         id: date.getTime(),
//         userName: userName.value,
//         fullName: fullName.value
//     }
    

//     localStorage.setItem('lastUser', JSON.stringify(userInfo))
//     console.log(userInfo);
//     getLastUser()
// }

// function getLastUser() {
//     const lastUser = localStorage.getItem('lastUser')
//     if (lastUser) {
//         const userInfo = JSON.parse(lastUser)
//         userNameInfo.innerText = userInfo.userName
//         userFullNameInfo.innerText = userInfo.fullName
//         userDateInfo.innerText = new Date(userInfo.id).toLocaleString()
        
//     } else {
//         userNameInfo.innerText = 'No saved data'
//         userFullNameInfo.innerText = 'No saved data'
//         userDateInfo.innerText = 'No saved data'
//     }
// }

// getLastUser()

// clearBtn.onclick = () => localStorage.clear()

// clearBtn.onclick =()=> {
//     localStorage.removeItem('111') 
    
// }




// saveBtn.onclick = () => {
//     const date = new Date();
//     const userInfo = {
//         id: date.getTime(),
//         userName: userName.value,
//         fullName: fullName.value
//     }

//     sessionStorage.setItem('lastUser', JSON.stringify(userInfo))
//     console.log(userInfo);
//     getLastUser()
// }

// function getLastUser() {
//     const lastUser = sessionStorage.getItem('lastUser')
//     if (lastUser) {
//         const userInfo = JSON.parse(lastUser)
//         userNameInfo.innerText = userInfo.userName
//         userFullNameInfo.innerText = userInfo.fullName
//         userDateInfo.innerText = new Date(userInfo.id).toLocaleString()
        
//     } else {
//         userNameInfo.innerText = 'No saved data'
//         userFullNameInfo.innerText = 'No saved data'
//         userDateInfo.innerText = 'No saved data'
//     }
// }

// getLastUser()

// // clearBtn.onclick = () => sessionStorage.clear()

// clearBtn.onclick =()=> {
//     sessionStorage.removeItem('111') 
    
// }



//добавляются юзеры, а не перезаписываются

saveBtn.onclick = () => {
    const date = new Date();
    const userInfo = {
        id: date.getTime(),
        userName: userName.value,
        fullName: fullName.value
    }

    const arr =[]
    const users = sessionStorage.getItem('users')
    if (users) {
        document.querySelector('.last-user').innerHTML = ''
        arr.push(...JSON.parse(users))
        console.log(arr);
        
    }
    arr.push(userInfo)

    sessionStorage.setItem('users', JSON.stringify(arr))
    console.log(userInfo);
    getLastUser()
}

function getLastUser() {
    
    const users = sessionStorage.getItem('users')
    if (users) {
        const arr = JSON.parse(users)
        console.log(arr);

        arr.forEach(user => {
            console.log(user);

            const div = document.createElement('div')
            const span1 = document.createElement('span')
            const span2 = document.createElement('span')
            const p = document.createElement('p')
            
            span1.innerText = user.userName + ' '
            span2.innerText = user.fullName
            p.innerText = new Date(user.id).toLocaleString()
            div.append(span1,span2,p)
            document.querySelector('.last-user').appendChild(div)
        });
    }
}

getLastUser()

clearBtn.onclick =()=> {
    sessionStorage.clear()
    document.querySelector('.last-user').innerHTML = ''
}




