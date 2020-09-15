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


button.onclick = () => {
    let hesh = randomInteger(111111, 999999)
    let hesh1 = randomInteger(111111, 999999)
    let hesh2 = randomInteger(111111, 999999)
    let hesh4 = randomInteger(111111, 999999)

    let radiuss = randomInteger(120, 160)


    cirOne.style.background  = `#${hesh1}`
    cirTwo.style.backgroundColor = `#${hesh2}`
    cirThre.style.backgroundColor = `#${hesh4}`

    

    container.style.background = `#${hesh}`

    colloo.innerText = `#${hesh}`
}
/*-----------------
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
*/
/*-------------- 
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

------------- */

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
square.classList.add('sp');
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
    calCancel.style.color = '#c5fdff';
    }, 150);
}
calSlesh.onclick = () => {
  strcalc+= '/';
  let predSym = strcalc[strcalc.length -2];
  let lastSym = strcalc[strcalc.length -1];
  if(strcalc[0] == '/'){
    strcalc = '';  
  }
  else if(predSym == '.' || predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
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
  else if(predSym == '.'|| predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
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
  else if(predSym == '.'|| predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
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
  else if(predSym == '.'|| predSym == '/' || predSym == '*' || predSym == '-' || predSym == '+'){
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
  let predSym = strcalc[strcalc.length -2];
  let lastSym = strcalc[strcalc.length -1];  
  if(predSym == '/' || predSym == '*' || predSym == '-' || predSym == '.' || predSym == '+'){
    console.log(strcalc)
    strcalc = strcalc.slice(0, -1)
    console.log(strcalc)
  }
  else{
    strcalc = strcalc;
  }
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
    calRowno.style.backgroundColor = '#ff0062';
    calRowno.style.color = '#c5fdff';
    }, 150);
}
/*---------------------------------------- */

const pssOne =  document.getElementById('pssOne');
const passString =  document.getElementById('passString');
const butPOne =  document.getElementById('butPOne');
const butPTwo =  document.getElementById('butPTwo');
const butPTre =  document.getElementById('butPTre');
let counterPasss = 12;
let passMass = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
let passMassLen = passMass.length;
let generateStr = '';


pssOne.onclick = () => {
  for (let i=0;i<counterPasss;i++){
generateStr+= passMass[Math.floor(Math.random()*passMassLen)];
  }
  passString.innerText = `${generateStr}`;
  generateStr = '';
  pssOne.style.backgroundColor = '#00ff95';
  pssOne.style.color = '#ff0062';
  setTimeout(()=>{
    pssOne.style.backgroundColor = '#00ffff4d';
    pssOne.style.color = '#180044';
    }, 150);
}
butPOne.onclick = () => {
  counterPasss++;
  butPTwo.innerText = `${counterPasss}`
  butPOne.style.backgroundColor = '#00ff95';
  butPOne.style.color = '#ff0062';
  setTimeout(()=>{
    butPOne.style.backgroundColor = '#00ffff4d';
    butPOne.style.color = '#180044';
    }, 150);
}
butPTre.onclick = () => {
  counterPasss--;
  if (counterPasss == -1){
    counterPasss = 0;
  } 
  butPTwo.innerText = `${counterPasss}`
  butPTre.style.backgroundColor = '#00ff95';
  butPTre.style.color = '#ff0062';
  setTimeout(()=>{
    butPTre.style.backgroundColor = '#00ffff4d';
    butPTre.style.color = '#180044';
    }, 150);

}
/*----------------------------------------- */


const knbOne = document.getElementById('knbOne');
const knbNwo = document.getElementById('knbNwo');
const knbThr = document.getElementById('knbThr');
const kmbLImg = document.getElementById('kmbLImg');
const kmbRImg = document.getElementById('kmbRImg');
const kmbYou = document.getElementById('kmbYou');
const kmbBot = document.getElementById('kmbBot');
const knbPass = ['bumaga.png','kamen.png','nojnici.png'];
const knbTop = document.getElementById('knbTop');
const objavlenie = document.createElement('p');
const circleR = document.getElementById('circleR');
const circleL = document.getElementById('circleL');
let scoreYou = 0;
let scoreBot = 0;
function randomIntegerJ(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
knbOne.onclick = () => {
  let vbvb = randomIntegerJ(0,2);
  kmbLImg.style.backgroundImage = 'url(kamen.png)';
  kmbRImg.style.backgroundImage = `url(${knbPass[vbvb]})`;
  if(vbvb === 0){
    console.log('lose')
  scoreBot++;
  kmbBot.innerText = `БОТ:${scoreBot}`
  objavlenie.innerText = 'ПОРАЖЕНИЕ';/**/ 
  knbTop.appendChild(objavlenie);
  circleL.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleL.style.display = 'none'
    }, 550);
  }
  else if(vbvb === 1){
    console.log('porovnu')
    objavlenie.innerText = 'НИЧЬЯ';/**/ 
  knbTop.appendChild(objavlenie);
  circleR.style.display = 'block'
  circleL.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleR.style.display = 'none'
    circleL.style.display = 'none'
    }, 550);
  }
  else{
    console.log('pobeda')
    scoreYou++;
    objavlenie.innerText = 'ПОБЕДА';/**/ 
  knbTop.appendChild(objavlenie);
  circleR.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleR.style.display = 'none'
    }, 550);
    kmbYou.innerText = `ВЫ:${scoreYou}`;
  }
}
knbNwo.onclick = () => {
  let vbvb = randomIntegerJ(0,2);
  kmbLImg.style.backgroundImage = 'url(nojnici.png)';
  kmbRImg.style.backgroundImage = `url(${knbPass[vbvb]})`;
  if(vbvb === 1){
    console.log('lose')
    scoreBot++;
    objavlenie.innerText = 'ПОРАЖЕНИЕ';/**/ 
    circleL.style.display = 'block'
  knbTop.appendChild(objavlenie);
  setTimeout(()=>{
    objavlenie.remove()
    circleL.style.display = 'none'
    }, 550);
  kmbBot.innerText = `БОТ:${scoreBot}`
  }
  else if(vbvb === 2){
    console.log('porovnu')
    objavlenie.innerText = 'НИЧЬЯ';/**/ 
  knbTop.appendChild(objavlenie);
  circleR.style.display = 'block'
  circleL.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleR.style.display = 'none'
    circleL.style.display = 'none'
    }, 550);
  }
  else{
    console.log('pobeda')
    scoreYou++;
    objavlenie.innerText = 'ПОБЕДА';/**/ 
  knbTop.appendChild(objavlenie);
  circleR.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleR.style.display = 'none'
    }, 550);
    kmbYou.innerText = `ВЫ:${scoreYou}`;
  }
}
knbThr.onclick = () => {
  let vbvb = randomIntegerJ(0,2);
  kmbLImg.style.backgroundImage = 'url(bumaga.png)';
  kmbRImg.style.backgroundImage = `url(${knbPass[vbvb]})`;
  if(vbvb === 2){
    console.log('lose')
    scoreBot++;
    objavlenie.innerText = 'ПОРАЖЕНИЕ';/**/ 
  knbTop.appendChild(objavlenie);
  circleL.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleL.style.display = 'none'
    }, 550);
  kmbBot.innerText = `БОТ:${scoreBot}`
  }
  else if(vbvb === 0){
    console.log('porovnu')
    objavlenie.innerText = 'НИЧЬЯ';/**/ 
  knbTop.appendChild(objavlenie);
  circleR.style.display = 'block'
  circleL.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleR.style.display = 'none'
    circleL.style.display = 'none'
    }, 550);
  }
  else{
    console.log('pobeda')
    scoreYou++;
    objavlenie.innerText = 'ПОБЕДА';/**/ 
  knbTop.appendChild(objavlenie);
  circleR.style.display = 'block'
  setTimeout(()=>{
    objavlenie.remove()
    circleR.style.display = 'none'
    }, 550);
    kmbYou.innerText = `ВЫ:${scoreYou}`;
  }
}
/*--------------------------------------- */
const covBackGor = document.getElementById('covBackGor');
const objkolvo = document.getElementById('objkolvo');
const gorodSection = document.getElementById('gorodSection');
const butCovOne = document.getElementById('butCovOne');
const butCovTwo = document.getElementById('butCovTwo');
const butCovTre = document.getElementById('butCovTre');
const butCovFor = document.getElementById('butCovFor');


butCovOne.onclick = () => {
  document.getElementById('covBackGor').src="gorod/gor2.jpg";
  objkolvo.innerText = '1426 ЗАБОЛЕВШИХ';
  objkolvo.style.backgroundColor = '#00ffbf77';
  objkolvo.style.color = '#070063';
  setTimeout(()=>{
    objkolvo.style.backgroundColor = '#f0f1f3';
    objkolvo.style.color = '#f0f1f3';
    }, 1550);
  
}
butCovTwo.onclick = () => {
  document.getElementById('covBackGor').src="gorod/gor3.jpg";
  objkolvo.innerText = '3426 ЗАБОЛЕВШИХ';
  objkolvo.style.backgroundColor = '#00ffbf77';
  objkolvo.style.color = '#070063';
  setTimeout(()=>{
    objkolvo.style.backgroundColor = '#f0f1f3';
    objkolvo.style.color = '#f0f1f3';
    }, 1550);
 
}
butCovTre.onclick = () => {
  document.getElementById('covBackGor').src="gorod/gor4.jpg";
  objkolvo.innerText = '2426 ЗАБОЛЕВШИХ';
  objkolvo.style.backgroundColor = '#00ffbf77';
  objkolvo.style.color = '#070063';
  setTimeout(()=>{
    objkolvo.style.backgroundColor = '#f0f1f3';
    objkolvo.style.color = '#f0f1f3';
    }, 1550);
}
butCovFor.onclick = () => {
  document.getElementById('covBackGor').src="gorod/gor5.jpg";
  objkolvo.innerText = '6426 ЗАБОЛЕВШИХ';
  objkolvo.style.backgroundColor = '#00ffbf77';
  objkolvo.style.color = '#070063';
  setTimeout(()=>{
    objkolvo.style.backgroundColor = '#f0f1f3';
    objkolvo.style.color = '#f0f1f3';
    }, 1550);
}
/*------------------------------*/
const text = document.querySelector('#covH');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent = '';
for(let i=0; i<splitText.length; i++){
  text.innerHTML += "<span class='brr'>"+splitText[i]+"</span>";
}
let char = 0;
let timerStr = setInterval(onTick,50);
function onTick(){
  const spanL = text.querySelectorAll('.brr')[char];
  spanL.classList.add('fade');
  console.log(text.querySelectorAll('.brr')[char])
  char++;
  if(char === splitText.length){
    complete();
  }
}
function complete(){
  clearInterval(timerStr);
  timerStr='null'
}
/*----------------------------*/
document.querySelector('#topCord').onmousemove = (e)=>{
  console.log(e);
  document.querySelector('#oneCord').innerHTML = 'X: '+e.offsetX;
  document.querySelector('#twoCord').innerHTML = 'Y: '+e.offsetY;
}
/*-----------------------*/

const ticTacToe = document.getElementById('ticTacToe');
let kolHod = 0;
const massivProverki = [
  [0,1,2],   /* i */
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2],
]
ticTacToe.addEventListener('click', function(e){
  document.querySelector('#clearT').onclick = ()=>{
    console.log('sdsd')
    for(let inn=0; inn< document.getElementsByClassName('tic').length ;inn++){
      document.getElementsByClassName('tic')[inn].innerHTML = '';
    }
  }
  if((kolHod % 2) == 0){
    e.target.innerHTML = 'X';
    document.querySelector('#hod').innerHTML = 'O';
}
  else if((kolHod % 1) == 0){
    e.target.innerHTML = 'O';
    document.querySelector('#hod').innerHTML = 'X';}
  kolHod++;
  proverkaTic();
});
const arrObTic = document.getElementsByClassName('tic');
clearTic = function(){
  for(let i=0; i< massivProverki.length ;i++){
  arrObTic[massivProverki[i][0]].style.background = '#ffffffc4';
  arrObTic[massivProverki[i][1]].style.background = '#ffffffc4';
  arrObTic[massivProverki[i][2]].style.background = '#ffffffc4';
  arrObTic[massivProverki[i][0]].innerHTML = '';
  arrObTic[massivProverki[i][1]].innerHTML = '';
  arrObTic[massivProverki[i][2]].innerHTML = '';
  document.querySelector('#winT').innerHTML = 'W';
  document.querySelector('#winT').style.background = ' #00aeff57';
  }
}
function proverkaTic(){

for(let i=0; i< massivProverki.length ;i++){
  if(arrObTic[massivProverki[i][0]].innerHTML == 'X' && arrObTic[massivProverki[i][1]].innerHTML == 'X' && arrObTic[massivProverki[i][2]].innerHTML == 'X'){
    document.querySelector('#winT').innerHTML = 'X';
    document.querySelector('#winT').style.background = 'red';
    arrObTic[massivProverki[i][0]].style.background = '#ff3c00'; /*  */
    arrObTic[massivProverki[i][1]].style.background = '#ff3c00';
    arrObTic[massivProverki[i][2]].style.background = '#ff3c00';
    setTimeout(clearTic,1000)
  }
  else  if(arrObTic[massivProverki[i][0]].innerHTML == 'O' && arrObTic[massivProverki[i][1]].innerHTML == 'O' && arrObTic[massivProverki[i][2]].innerHTML == 'O'){
    document.querySelector('#winT').innerHTML = 'O';
    arrObTic[massivProverki[i][0]].style.background = '#ff3c00'; /*  */
    arrObTic[massivProverki[i][1]].style.background = '#ff3c00';
    arrObTic[massivProverki[i][2]].style.background = '#ff3c00';
    setTimeout(clearTic,1000)
  }
}
}
/*------------------------*/
let images = document.querySelectorAll('.sli');
let current = 0;
setInterval(() => {
  for(let i=0; i<images.length;i++){
    images[i].classList.add('opacity0');
  }
  images[current].classList.remove('opacity0');
  if(current+1 == images.length){
    current = 0;
  }
  else{
    current++;
  }
}, 6000);
function slider() {
for(let i=0; i<images.length;i++){
  images[i].classList.add('opacity0');
}
images[current].classList.remove('opacity0');
if(current+1 == images.length){
  current = 0;
}
else{
  current++;
}
}
document.querySelector('#infinity-wrap').onclick = slider;
/*----------------------------------*/
function weatherAPI(){
fetch('http://api.openweathermap.org/data/2.5/weather?q=Konotop,ua&APPID=9c850d339ac904b9201a96b8fc4d51d8')
  .then(function (resp) { 
    return resp.json()
   })
  .then(function (date) {
    document.querySelector('.wth1').textContent = date.name.toUpperCase();
    console.log(date)
    console.log(date.main)
    document.querySelector('.wth2').innerHTML = `${Math.round(date.main.temp-273,15)}&deg`
    document.querySelector('.wth3').innerHTML = `<img src='https://openweathermap.org/img/wn/${date.weather[0].icon}@2x.png'>`
  })
  .catch(function () {
  })
}

  document.querySelector('#butwth4').onclick = weatherAPI;