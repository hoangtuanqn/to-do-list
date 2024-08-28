let btnElement = document.querySelector('.btn')
let ipElement = document.querySelector('.note')
let dataElement = document.querySelector('.list-data')
let notifi = document.querySelector('.notifi')
let iconClose = document.querySelector('.icon-close')
iconClose.addEventListener('click', (e) => {
    notifi.style.display = 'none'
})

let i = 0;
function remove(data) {
    let dataList = document.querySelector('.data-' + data)
    dataList.remove();
}
btnElement.addEventListener('click', (e) => {
    let word = ipElement.value;
    notifi.style.display = 'none';
    if(!word) {
        notifi.style.display = 'inline-flex';
        return;
    }
    dataElement.innerHTML += `<li class="data-${++i}">
        <b> ➤ </b><a>${ipElement.value}</a>
        <button class="btn btn-s" onclick="remove(${i})">Delete</button>
    </li>`
    ipElement.value = '';

})