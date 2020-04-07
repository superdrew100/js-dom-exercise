const btnColor = document.querySelector('#setcolor')

let pulledColor = ''
let historyCoutner = 0

btnColor.addEventListener('click', (clickevent => {
    pulledColor = document.querySelector('#color-field')
    document.querySelector(".brush").getElementsByClassName.background = pulledColor
    clickevent.preventDefault()
    console.log(pulledColor)