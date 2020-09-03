const box = document.getElementById('box')

const button = document.getElementById('button')

const colloo = document.getElementById('colloo')

const cirOne = document.getElementById('cirOne')
const cirTwo = document.getElementById('cirTwo')
const cirThre = document.getElementById('cirThre')

const container = document.getElementById('container')


function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

console.dir(cirOne)

button.onclick = () => {
    let hesh = randomInteger(111111, 999999)
    let hesh1 = randomInteger(111111, 999999)
    let hesh2 = randomInteger(111111, 999999)
    let hesh3 = randomInteger(111111, 999999)
    let hesh4 = randomInteger(111111, 999999)

    let radiuss = randomInteger(120, 160)

    console.log(typeof cirOne.clientHeight)

    cirOne.style.backgroundColor = `#${hesh1}`
    cirTwo.style.backgroundColor = `#${hesh2}`
    cirThre.style.backgroundColor = `#${hesh3}`

    
    cirOne.clientWidth = radiuss

    container.style.backgroundColor = `#${hesh4}`

    box.style.backgroundColor = `#${hesh}`
    colloo.innerText = `#${hesh}`


    console.log(radiuss)
    console.log(typeof radiuss)
    console.log(typeof cirOne.clientHeight)
}


