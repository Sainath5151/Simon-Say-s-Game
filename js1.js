let gameSeq=[];
let userSeq=[];

let btns =["yellow","red","purple","green"]
let started=false;
let level=0;

let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
        if(started==false){
            console.log("Game Started");
            started=true;
            levelUp();
        }
    });


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },300);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
}
   else{
    h2.innerHTML=`Game Over! Your Score Was <b>${level}</b> <br>Press Any key to Start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
    
}
function btnPress(){
console.log(this);
let btn=this;
userFlash(btn); 
userColor = btn.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1);

}
let allBtn=document.querySelectorAll(".btn");

for(btn of allBtn){
    btn.addEventListener("click",btnPress);    
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}