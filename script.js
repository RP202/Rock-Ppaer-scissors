let Userscore=0;
let Compscore=0;
let userchoicep=document.querySelector("#userscore")
let compchoicep=document.querySelector("#compscore")

const choices=document.querySelectorAll(".choice");//seleetced
const msg=document.querySelector("#msg");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{//making user choice since we are clciking button
      //storing  id
      const userchoice = choice.getAttribute("id") 
        playgame(userchoice);
    });
})


//generating compchoices
const generatecompChoice=()=>{
    const options=["rock","paper","scissor"] //making comp random pick with predefie fcn
    const randcompic=Math.floor(Math.random()*3) //geenate any number between 0 tp 2 so *3
    return options[randcompic];
}

//prinitng choices
const playgame =(userchoice)=>{
    console.log("user choice:",userchoice)
    const compchoice=generatecompChoice()//calling fcn
    console.log("comp choice:",compchoice)

if(userchoice==compchoice){
    drawgame();
}
else{
    let userwin=true;
    if(userchoice=="rock"){
        userwin= compchoice=="paper"?false:true;
       
    }
    else if(userchoice=="paper"){
        userwin=compchoice=="scissor"?false:true;
    }
    else if(userchoice=="scissor"){
        userwin=compchoice=="rock"?false:true;
    }showwinner(userwin,compchoice,userchoice)
}

}

const showwinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        Userscore++;
        userchoicep.innerHTML=Userscore;
        console.log("You won!")
        msg.style.backgroundColor="green"
        msg.innerText='you won,'+ userchoice+"\tbeats\t"+ compchoice
        msg.style.color="yellow"
        msg.style.borderRadius="14px"
    }
    else{console.log("Computer won")
    Compscore++
    compchoicep.innerHTML=Compscore;
    msg.innerText='comp won,'+ compchoice+ "\tbeats\t"+ userchoice
    msg.style.backgroundColor="lightyellow"
    msg.style.color="pink"
    msg.style.borderRadius="14px"
    }
}

const drawgame=()=>{
    console.log("Game is a draw!")
    msg.innerHTML="DRAW GAMW"
    msg.style.backgroundColor="palevioletred";
    msg.style.color="pink"
    msg.style.borderRadius="14px"

}

 const rstgame=(userwin)=>{
    Userscore=0;
    Compscore=0;
        userchoicep.innerHTML=Userscore;
        compchoicep.innerHTML=Compscore;
        msg.innerHTML="play again"
        msg.style.backgroundColor="palevioletred"
        msg.style.color="pink"
        msg.style.borderRadius="14px"
 }
 