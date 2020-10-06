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





 ((c)=>{
    let $ = c.getContext('2d'),
            w = c.width = window.innerWidth,
            h = c.height = window.innerHeight,
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
        (h !== innerHeight || w!==innerWidth) && (w=c.width=innerWidth,h=c.height=innerHeight);
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