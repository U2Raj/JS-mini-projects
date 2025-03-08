
let timer = 60;
let score = 0;
let hitnum=0;

function makeBubble(){
var clutter = "";

for(let i=0; i<15;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubbles">${rn}</div>`
}

document.querySelector("#bub").innerHTML = clutter;
}


function runTimer(){
    setInterval(()=>{
     if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
     }else{
        clearInterval(timer);
        document.querySelector("#bub").innerHTML =`
        <h1 style="color:white">Game Over</h1>`;
     }
    },1000);
}

function getNewHit(){
     hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitnum;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#bub").addEventListener("click", function(dets){
      let clicknum = Number(dets.target.textContent);
      if(clicknum === hitnum){
        increaseScore();
        makeBubble();
        getNewHit();
      }
});


makeBubble();
runTimer();
getNewHit();
