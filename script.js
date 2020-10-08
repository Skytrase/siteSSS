window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');

}
/*--------------------------*/
let progress = document.getElementById('scrollline');
let totalHeight = document.body.scrollHeight - window.innerHeight;

/*--------------------------*/
    window.onscroll = () => {
let progressHeight = (window.pageYOffset / totalHeight)*100;
progress.style.width = progressHeight + '%';
}
/*--------------------------*/
window.onload = function () {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
}
  /*--------------------------*/
 let images = document.querySelectorAll('.windslider-slider .imgg');
 let current = 0;
 let butRigth = document.querySelector('.rbut');
 let butLeft = document.querySelector('.lbut');
 let butClose = document.querySelector('.cbut');

function slider(){
    for (let i=0; i<images.length; i++){
        images[i].classList.add('opacity0');
    }
    if(current+1 == images.length){
        current = 0;
    }
    else{
        current++;
    } 
    images[current].classList.remove('opacity0');
}

function bslider(){
    for (let i=0; i<images.length; i++){
        images[i].classList.add('opacity0');
    }
    console.log(current);
    if(current == 0){
        current = images.length-1;
    }
    else{
        current--;
    }
    images[current].classList.remove('opacity0');
    console.log(current);
}

butLeft.onclick = bslider;
butRigth.onclick = slider;
butClose.onclick = () =>{
    document.querySelector('.slider').style.display = 'none';
}
 document.querySelector('.onc').onclick = () =>{
    document.querySelector('.slider').style.display = 'flex';
 }

let objServ = document.querySelector('#services');
objServ.onclick = ()=>console.dir(objServ.offsetHeight);
console.dir(objServ);
let canv = document.querySelector('#c');
objServ.onclick = ()=>{
    canv.height = objServ.offsetHeight;
    canv.width = objServ.offsetWidth;  
};
canv.height = objServ.offsetHeight;
canv.width = objServ.offsetWidth;


 ((c)=>{
    let $ = c.getContext('2d'),
            w = c.width = objServ.offsetWidth,
            h = c.height = objServ.offsetHeight,
            pi2 = Math.PI*2,
            random = t=>Math.random()*t,
            binRandom = (f)=>Math.random()<f,
            arr = new Array(500).fill().map((p)=>{
                return {
                    p: {x: random(w), y: random(h)},
                    v: {x: random(.5) * (binRandom(.5)?1:-1), y: random(.5) * (binRandom(.5)?1:-1)},
                    s: random(1)+2, 
                    o: random(1)+.3
                }
            });
    function draw(){
        (h !== objServ.offsetHeight || w!==objServ.offsetWidth) && (w=c.width=objServ.offsetWidth,h=c.height=objServ.offsetHeight);
        $.fillStyle="#222";
        $.fillRect(0,0,w,h);
        arr.forEach(p=>{
            p.p.x+=p.v.x;
            p.p.y+=p.v.y;
            if(p.p.x > w || p.p.x < 0) p.v.x *=-1;
            if(p.p.y > h || p.p.y < 0) p.v.y *=-1;
            $.beginPath();
            $.arc(p.p.x,p.p.y,p.s,0,pi2);
            $.closePath();
            $.fillStyle = "rgba(255,255,255,"+p.o+")";
            $.fill();
        })
        requestAnimationFrame(draw)
    }
    draw();
})(c)

/*   ---------------------  */
let asd = '';
 let gg = '';
 let ggplus = '';
 function evasd() {
     console.log(asd.slice(0,asd.length-3));
     ggplus = eval(asd.slice(0,asd.length-3));
     /*eval(asd.slice(0,asd.length-3));*/
     gg+=ggplus;
 }
 document.querySelector('.formBx form textarea').oninput = () =>{
    console.dir(document.querySelector('.formBx form textarea'));
    asd = document.querySelector('.formBx form textarea').value;
    console.log(asd.length);
    console.log(asd.slice(asd.length-3,asd.length-1));
    if(asd.slice(asd.length-3,asd.length-1) == '^^'){
        eval(asd.slice(0,asd.length-3));
    }
 }
 /*--------------------------------------------*/
 let butttf = document.querySelector('.butttf');
 let fuLLLILLLc = document.querySelector('.fuLLLILLLc');
 let containerCanv = document.querySelector('.fuLLLILLLc .container')
 var canvas1 = document.getElementById('can');

 canvas1.height = containerCanv.offsetHeight;
 canvas1.width = containerCanv.offsetWidth;

 butttf.onclick = ()=>{
    fuLLLILLLc.classList.toggle('plusTrista');
    document.querySelector('.fuLLLILLLc .container').classList.toggle('dspnon');
    butttf.classList.toggle('rot');
    canvas1.height = containerCanv.offsetHeight;
    canvas1.width = containerCanv.offsetWidth;
    console.log(butttf.className);
    if(butttf.className == 'butttf rot'){
        draw();
    }
    if(butttf.className != 'butttf rot'){
        clearTimeout(tmr);
    }
 }

 var canvas1 = document.getElementById('can');
 let x = 0;
 let y =0;
 let startAngle = 0;
 let endAngle = (Math.PI/180)*360; 
 let anticlockwise = true;
 let ctx = canvas1.getContext('2d');
 
let tmr;

 function draw() {
     let radius = (Math.random()*30);
     x = (Math.floor(Math.random()*canvas1.width));
     y = (Math.floor(Math.random()*canvas1.height));
     col1 = (0+(Math.random()*150));
    col2 = (149+(Math.random()*50));
    col3 = (190+(Math.random()*64));
    col4 = (Math.floor(3+Math.random()*4));
    let lingrad = ctx.createLinearGradient(0, 0, canvas1.width, canvas1.height);
    
     ctx.beginPath();
     
     lingrad.addColorStop(0, `rgba(${col1}, ${col3}, ${col2}, 0.${col4})`);
     lingrad.addColorStop(1, `rgba(${(0+(Math.random()*150))}, ${(190+(Math.random()*64))} , ${(149+(Math.random()*50))}, 0.${(Math.floor(3+Math.random()*4))})`);
     ctx.fillStyle = lingrad;
     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
     ctx.fill();
     console.log('-------------');
     tmr = setTimeout(draw,100);
     ctx.strokeStyle =  "#00426e75"
     ctx.stroke()
 }
 fuLLLILLLc.addEventListener('mousemove', gyda)
 function gyda(e){
    ctx.beginPath();
    let radius = 5+(Math.random()*20);
    col1 = `${(0+(Math.random()*150))}`;
    ctx.fillStyle = `#3cff0088`;
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.arc(x , y, radius, startAngle, endAngle, anticlockwise);
    ctx.strokeStyle =  " #15005fcc"
    ctx.stroke();
    ctx.fill();
    console.log(e)
    
 }


    