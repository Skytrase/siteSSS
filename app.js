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

let progress = document.getElementById('scrollline');
let totalHeight = document.body.scrollHeight - window.innerHeight;


    window.onscroll = () => {
let progressHeight = (window.pageYOffset / totalHeight)*100;
progress.style.width = progressHeight + '%';
}
/*-------------- */

const colorss = ['#7B68EE','#7FFFD4','#FFA07A','#FF1493','#FFFF00','#FF0000'];
const buttonty = document.getElementById('buttonty');
function createSquare(){
const section = document.querySelector('section');
const square = document.createElement('span');
let size = Math.random()*50;
let randnom = Math.random();
square.style.width =  20+size+'px';
square.style.height = 20+size+'px';

let toppadding = Math.floor((((innerHeight/3)*2)+randnom*(innerHeight/3)));
let topPadMinThrePer = toppadding - (toppadding*30/100)  /*для наглядности*/ 
square.style.top = topPadMinThrePer+'px';
square.style.left = Math.random()*innerWidth+'px';


const bg = colorss[Math.floor(Math.random()*colorss.length)];
square.style.background = bg;

section.appendChild(square);

setTimeout(()=>{
square.remove()
}, 9000);
}
buttonty.onclick = ()=>{createSquare()};
/*setInterval(createSquare, 400);*/
/*--------------------------*/
window.onload = function () {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
}

/*--------------------------------------------- */

const cahgesizebox = document.getElementById('cahgesizebox');
cahgesizebox.onclick = ()=>{
  cahgesizebox.style.width = (((Math.random()*innerWidth)/10)*8)+'px';
cahgesizebox.style.height = (((Math.random()*innerHeight)/2)+10)+'px';
}