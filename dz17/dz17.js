const divItems = document.querySelector('.items')
const btnDownload = document.getElementById('download')


btnDownload.onclick = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10?')
    const posts = await response.json()
    console.log(posts);  
    
    posts.forEach(post => {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item')
        const titleH4 = document.createElement('h4')
        titleH4.classList.add('title')
        titleH4.innerText = post.title
        const bodySpan = document.createElement('span')
        bodySpan.classList.add('body')
        bodySpan.innerText = post.body.slice(0,100)+'...'
        const moreBtn = document.createElement('button')
        moreBtn.innerText = 'more'

        moreBtn.onclick = () => {
            alert(post.body)            
        }

        itemDiv.append(titleH4, bodySpan, moreBtn)
        divItems.appendChild(itemDiv)
        
    });
    
}