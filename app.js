let userScore=0;
let compScore=0;
let game=["rock","paper","scissor"];
let compGame=["rock2","paper2","scissor2"];

let urmove=document.querySelector(".urmove");
let compmove=document.querySelector(".compmove");

let p=document.querySelector('.move');

let p1=document.querySelector(".usrScr");
let p2=document.querySelector(".cmpScr");

const choices2=document.querySelectorAll(".choices2");

const choices=document.querySelectorAll(".choices");

function flash(choice){
    choice.classList.add("flash");
    setTimeout(function(){
        choice.classList.remove("flash");
    },500);
}

function compFlash(choice){
    let randIdx=Math.floor(Math.random()*3);
    let randMove=compGame[randIdx];
    let randBtn=document.querySelector(`.${randMove}`);
    flash(randBtn);
    console.log(randBtn);
    let compBtn=randBtn.getAttribute("class");
    console.log(compBtn);

    if(choice=="rock" && compBtn=="choices2 rock2 flash"){
        console.log("it's a draw");
        urmove.innerHTML="<b>ROCK</b>";
        compmove.innerHTML="<b>ROCK</b>";
    }else if(choice=="paper" && compBtn=="choices2 paper2 flash"){
        console.log("it's a draw");
        urmove.innerHTML="<b>PAPER</b>";
        compmove.innerHTML="<b>PAPER</b>";
    }else if(choice=="scissor" && compBtn=="choices2 scissor2 flash"){
        console.log("it's a draw");
        urmove.innerHTML="<b>SCISSOR</b>";
        compmove.innerHTML="<b>SCISSOR</b>";
    }else if(choice=="rock" && compBtn=="choices2 paper2 flash"){
        console.log("comp wins");
        compScore++;
        p2.innerText=`${compScore}`;
        urmove.innerHTML="<b>ROCK</b>";
        compmove.innerHTML="<b>PAPER</b>";
    }else if(choice=="paper" && compBtn=="choices2 scissor2 flash"){
        console.log("comp wins");
        compScore++;
        p2.innerText=`${compScore}`;
        urmove.innerHTML="<b>PAPER</b>";
        compmove.innerHTML="<b>SCISSOR</b>";
    }else if(choice=="scissor" && compBtn=="choices2 rock2 flash"){
        console.log("comp wins");
        compScore++;
        p2.innerText=`${compScore}`;
        urmove.innerHTML="<b>SCISSOR</b>";
        compmove.innerHTML="<b>ROCK</b>";
    }else if(choice=="rock" && compBtn=="choices2 scissor2 flash"){
        console.log("u wins");
        userScore++;
        p1.innerText=`${userScore}`;
        urmove.innerHTML="<b>ROCK</b>";
        compmove.innerHTML="<b>SCISSOR</b>";
    }else if(choice=="paper" && compBtn=="choices2 rock2 flash"){
        console.log("u wins");
        userScore++;
        p1.innerText=`${userScore}`;
        urmove.innerHTML="<b>PAPER</b>";
        compmove.innerHTML="<b>ROCK</b>";
    }else if(choice=="scissor" && compBtn=="choices2 paper2 flash"){
        console.log("u wins");
        userScore++;
        p1.innerText=`${userScore}`;
        urmove.innerHTML="<b>SCISSOR</b>";
        compmove.innerHTML="<b>PAPER</b>";
    }else{
        console.log("error occured");
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        console.log("user:",userChoice);
        // compMove(userChoice);
        compFlash(userChoice);
    });
});
