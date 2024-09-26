const element = document.getElementById('container')

const p = document.createElement('p')
let counter = 0
p.innerText = counter

element.appendChild(p)


function incrementCounter() {
    counter++
    p.innerText = counter
}

function onButtonPress() {
    incrementCounter()
    console.log('Button pressed')
}

const button = document.getElementById('button')
button.addEventListener('click', onButtonPress)
