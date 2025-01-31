const divItems = document.querySelector('.items')
const btnDownload = document.querySelector('#download')

btnDownload.onclick = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
}