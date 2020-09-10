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
/*-----------------------------------------------*/
const strokaSum = document.getElementById('rowcalcOne');
const calCancel = document.getElementById('calCancel');
const calSlesh = document.getElementById('calSlesh');
const calMnoj= document.getElementById('calMnoj');
const calSeven = document.getElementById('calSeven');
const calEight = document.getElementById('calEight');
const calNine = document.getElementById('calNine');
const calMinus = document.getElementById('calMinus');
const calFour = document.getElementById('calFour');
const calFive = document.getElementById('calFive');
const calSix = document.getElementById('calSix');
const calOne = document.getElementById('calOne');
const calTwo = document.getElementById('calTwo');
const calThre = document.getElementById('calThre');
const calPlus = document.getElementById('calPlus');
const calNull = document.getElementById('calNull');
const calArow = document.getElementById('calArow');
const calDot = document.getElementById('calDot');
const calRowno = document.getElementById('calRowno');
const butcol = document.querySelector('.calBut');

let strcalc = '';




/*     strokaSum.innerText = `${strcalc}`    */
calCancel.onclick = () => {
  strcalc = '0';
  strokaSum.innerText = `${strcalc}`;
  strcalc = '';
  calCancel.style.backgroundColor = '#00ff37';
  calCancel.style.color = '#001249';
  setTimeout(()=>{
    calCancel.style.backgroundColor = '#ff0062'
    calCancel.style.color = '#c5fdf';
    }, 150);
}
calSlesh.onclick = () => {
  
  strcalc+= '/';
  let predSym = strcalc[strcalc.length -2];
  let lastSym = strcalc[strcalc.length -1];
  if(strcalc[0] == '/'){
    strcalc = '';  
  }
  else if(predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
    console.log(predSym)
    strcalc = strcalc.slice(0, -2)
    strcalc+= lastSym;
  }
  else{
    strcalc = strcalc;
  }
  strokaSum.innerText = `${strcalc}`;
  
  
  
  calSlesh.style.backgroundColor = '#00ff37';
  calSlesh.style.color = '#001249';
  setTimeout(()=>{
    butcol.style.backgroundColor = '#001249'
    butcol.style.color = '#c5fdff';
    }, 150);
}
calMnoj.onclick = () => {
  strcalc+= '*';
  let predSym = strcalc[strcalc.length -2];
  let lastSym = strcalc[strcalc.length -1];
  if(strcalc[0] == '*'){
    strcalc = '';
  }
  else if(predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
    console.log(predSym)
    strcalc = strcalc.slice(0, -2)
    strcalc+= lastSym;
  }
  else{
    strcalc = strcalc;
  }
  strokaSum.innerText = `${strcalc}`;

  calMnoj.style.backgroundColor = '#00ff37';
  calMnoj.style.color = '#001249';
  setTimeout(()=>{
    calMnoj.style.backgroundColor = '#001249'
    calMnoj.style.color = '#c5fdff';
    }, 150);
}
calSeven.onclick = () => {
  strcalc+= '7';
  strokaSum.innerText = `${strcalc}`;
  calSeven.style.backgroundColor = '#00ff37';
  calSeven.style.color = '#001249';
  setTimeout(()=>{
    calSeven.style.backgroundColor = '#001249'
    calSeven.style.color = '#c5fdff';
    }, 150);
}
calEight.onclick = () => {
  strcalc+= '8';
  strokaSum.innerText = `${strcalc}`;
  calEight.style.backgroundColor = '#00ff37';
  calEight.style.color = '#001249';
  setTimeout(()=>{
    calEight.style.backgroundColor = '#001249'
    calEight.style.color = '#c5fdff';
    }, 150);
}
calNine.onclick = () => {
  strcalc+= '9';
  strokaSum.innerText = `${strcalc}`;
  calNine.style.backgroundColor = '#00ff37';
  calNine.style.color = '#001249';
  setTimeout(()=>{
    calNine.style.backgroundColor = '#001249'
    calNine.style.color = '#c5fdff';
    }, 150);
}
calMinus.onclick = () => {
  strcalc+= '-';
  let predSym = strcalc[strcalc.length -2];
  let lastSym = strcalc[strcalc.length -1];
  if(strcalc[0] == '-'){
    strcalc = '';
  }
  else if(predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
    console.log(predSym)
    strcalc = strcalc.slice(0, -2)
    strcalc+= lastSym;
  }
  else{
    strcalc = strcalc;
  }
  strokaSum.innerText = `${strcalc}`;
  calMinus.style.backgroundColor = '#00ff37';
  calMinus.style.color = '#001249';
  setTimeout(()=>{
    calMinus.style.backgroundColor = '#001249'
    calMinus.style.color = '#c5fdff';
    }, 150);
}
calFour.onclick = () => {
  strcalc+= '4';
  strokaSum.innerText = `${strcalc}`;
  calFour.style.backgroundColor = '#00ff37';
  calFour.style.color = '#001249';
  setTimeout(()=>{
    calFour.style.backgroundColor = '#001249'
    calFour.style.color = '#c5fdff';
    }, 150);
}
calFive.onclick = () => {
  strcalc+= '5';
  strokaSum.innerText = `${strcalc}`;
  calFive.style.backgroundColor = '#00ff37';
  calFive.style.color = '#001249';
  setTimeout(()=>{
    calFive.style.backgroundColor = '#001249'
    calFive.style.color = '#c5fdff';
    }, 150);
}
calSix.onclick = () => {
  strcalc+= '6';
  strokaSum.innerText = `${strcalc}`;
  calSix.style.backgroundColor = '#00ff37';
  calSix.style.color = '#001249';
  setTimeout(()=>{
    calSix.style.backgroundColor = '#001249'
    calSix.style.color = '#c5fdff';
    }, 150);
}
calOne.onclick = () => {
  strcalc+= '1';
  strokaSum.innerText = `${strcalc}`;
  calOne.style.backgroundColor = '#00ff37';
  calOne.style.color = '#001249';
  setTimeout(()=>{
    calOne.style.backgroundColor = '#001249'
    calOne.style.color = '#c5fdff';
    }, 150);
}
calTwo.onclick = () => {
  strcalc+= '2';
  strokaSum.innerText = `${strcalc}`;
  calTwo.style.backgroundColor = '#00ff37';
  calTwo.style.color = '#001249';
  setTimeout(()=>{
    calTwo.style.backgroundColor = '#001249'
    calTwo.style.color = '#c5fdff';
    }, 150);
}
calThre.onclick = () => {
  strcalc+= '3';
  strokaSum.innerText = `${strcalc}`;
  calThre.style.backgroundColor = '#00ff37';
  calThre.style.color = '#001249';
  setTimeout(()=>{
    calThre.style.backgroundColor = '#001249'
    calThre.style.color = '#c5fdff';
    }, 150);
}
calPlus.onclick = () => {
  strcalc+= '+';
  let predSym = strcalc[strcalc.length -2];
  let lastSym = strcalc[strcalc.length -1];
  if(strcalc[0] == '+'){
    strcalc = '';
  }
  else if(predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
    console.log(predSym)
    strcalc = strcalc.slice(0, -2)
    strcalc+= lastSym;
  }
  else{
    strcalc = strcalc;
  }
  strokaSum.innerText = `${strcalc}`;
  calPlus.style.backgroundColor = '#00ff37';
  calPlus.style.color = '#001249';
  setTimeout(()=>{
    calPlus.style.backgroundColor = '#001249'
    calPlus.style.color = '#c5fdff';
    }, 150);
}
calNull.onclick = () => {
  strcalc+= '0';
  strokaSum.innerText = `${strcalc}`;
  calNull.style.backgroundColor = '#00ff37';
  calNull.style.color = '#001249';
  setTimeout(()=>{
    calNull.style.backgroundColor = '#001249'
    calNull.style.color = '#c5fdff';
    }, 150);
}
calArow.onclick = () => {
  strcalc= strcalc.slice(0, -1);
  strokaSum.innerText = `${strcalc}`;
  calArow.style.backgroundColor = '#00ff37';
  calArow.style.color = '#001249';
  setTimeout(()=>{
    calArow.style.backgroundColor = '#001249'
    calArow.style.color = '#c5fdff';
    }, 150);
}
calDot.onclick = () => {
  strcalc+= '.';
  strokaSum.innerText = `${strcalc}`;
  calDot.style.backgroundColor = '#00ff37';
  calDot.style.color = '#001249';
  setTimeout(()=>{
    calDot.style.backgroundColor = '#001249'
    calDot.style.color = '#c5fdff';
    }, 150);
}
calRowno.onclick = () => {
  if(strcalc){
    strcalc=eval(strcalc);
  strokaSum.innerText = `${strcalc}`;
  strcalc = '';
  }
  else{
    strcalc = '';
    strokaSum.innerText = `${strcalc}`;
  }
  
  



  calRowno.style.backgroundColor = '#00ff37';
  calRowno.style.color = '#001249';
  setTimeout(()=>{
    calRowno.style.backgroundColor = '#ff0062'
    calRowno.style.color = '#c5fdff';
    }, 150);
}

