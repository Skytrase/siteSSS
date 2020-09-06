const box = document.getElementById('box')

const button = document.getElementById('button')

const colloo = document.getElementById('colloo')

const cirOne = document.getElementById('cirOne')
const cirTwo = document.getElementById('cirTwo')
const cirThre = document.getElementById('cirThre')

const container = document.getElementById('container')

const inp = document.getElementsByClassName('inpt')
const inpt = inp[0]
const valueslength = document.getElementById('valueslength')


function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

  console.log(inpt)

button.onclick = () => {
    let hesh = randomInteger(111111, 999999)
    let hesh1 = randomInteger(111111, 999999)
    let hesh2 = randomInteger(111111, 999999)
    let hesh4 = randomInteger(111111, 999999)

    let radiuss = randomInteger(120, 160)

    console.log(typeof cirOne.clientHeight)

    cirOne.style.backgroundColor = `#${hesh1}`
    cirTwo.style.backgroundColor = `#${hesh2}`
    cirThre.style.backgroundColor = `#${hesh4}`

    

    container.style.backgroundColor = `#${hesh4}`

    box.style.backgroundColor = `#${hesh}`
    colloo.innerText = `#${hesh}`
}
/*------------------- */
inpt.oninput = () => {
  let rand8 = randomInteger(1, 8)
st = inpt.value
stlen = st.length
valueslength.innerText = `${stlen}`


let arand = ['','#3700fd','#6500a8','#690052','#9b0000','#005031','#314404','#c42700','#309700'] 
inpt.style.backgroundColor = arand[rand8]
valueslength.style.backgroundColor = arand[rand8]

console.dir(inpt)
}
/*-------------- */
const butOneO = document.getElementById('butOneO')
const butTwoO = document.getElementById('butTwoO')
const butTreO = document.getElementById('butTreO')
const contChild = document.getElementById('contChild')
let x = 0

butOneO.onclick = () => {
x-=1
contChild.innerText = `${x}`
}
butTwoO.onclick = () => {
  x = 0
  contChild.innerText = `${x}`
}
butTreO.onclick = () => {
  x+=1
contChild.innerText = `${x}`
}

/*-------------- */

function docscroll() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
    let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (windowScroll - documentHeight)*100
    document.getElementById('scrollline').style.width = scrolled + '%'
}
    window.onscroll = function() {
    docscroll()
}
