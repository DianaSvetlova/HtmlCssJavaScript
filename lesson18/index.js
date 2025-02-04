const userName = document.querySelector('#username')
const fullName = document.querySelector('#fullname')
const saveBtn = document.querySelector('#save')

const userNameInfo = document.querySelector('#last-username')
const userFullNameInfo = document.querySelector('#last-fullname')
const userDateInfo = document.querySelector('#input-date')

const clearBtn = document.querySelector('#clear')


saveBtn.onclick = () => {
    const date = new Date();
    const userInfo = {
        id: date.getTime(),
        userName: userName.value,
        fullName: fullName.value
    }
    

    // localStorage.setItem('lastUser', JSON.stringify(userInfo))
    sessionStorage.setItem('lastUser', JSON.stringify(userInfo))
    console.log(userInfo);
    getLastUser()
    

    
}

function getLastUser() {
    // const lastUser = localStorage.getItem('lastUser')
    const lastUser = sessionStorage.getItem('lastUser')
    if (lastUser) {
        const userInfo = JSON.parse(lastUser)
        userNameInfo.innerText = userInfo.userName
        userFullNameInfo.innerText = userInfo.fullName
        userDateInfo.innerText = new Date(userInfo.id).toLocaleString()
        
    } else {
        userNameInfo.innerText = 'No saved data'
        userFullNameInfo.innerText = 'No saved data'
        userDateInfo.innerText = 'No saved data'
    }
}

getLastUser()


// clearBtn.onclick = () => sessionStorage.clear
clearBtn.onclick = () => sessionStorage.clear








