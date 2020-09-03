const box = document.getElementById('box')

const button = document.getElementById('button')

const colloo = document.getElementById('colloo')


function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

/*
function colcol() {
    let hesh = randomInteger(111111, 999999)
    button.addEventListener('click', () => {
        box.style.backgroundColor = `#${hesh}`
    })
}

colcol()

*/

button.onclick = () => {
    let hesh = randomInteger(111111, 999999)
    box.style.backgroundColor = `#${hesh}`
    colloo.innerText = `#${hesh}`
}

console.log(colloo)