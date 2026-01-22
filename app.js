let userscore = 0;
let comoscore = 0;

const choices = document.querySelectorAll(".choice");
// console.log(choices); 
const msg= document.querySelector(".msg");
const userscore_para =document.querySelector(".user-score");
const comscore_para = document.querySelector(".com-score");


const drowgame =()=>{
//  console.log("game was drow")
 msg.innerText=`your choice ${userchice}  Game draw play again!`;
   msg.style.backgroundColor="black";
}

const showwinner = (userwin, userchice, comchoice) =>{
if(userwin){
    // console.log("you win");
    userscore++;
    userscore_para.innerText=userscore;
    msg.innerText=`you win your ${userchice} beats ${comchoice}`;
    msg.style.backgroundColor="green"; 
}
else{
    // console.log("you lose");
     comoscore++;
     comscore_para.innerText=comoscore;
    msg.innerText=`you lost ${comchoice} beat your ${userchice}`;
    msg.style.backgroundColor="red"; 
}
}


const gencompchoice =()=>{
    const option =["ston","paper","scissor"]
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx]
}

const playgame =(userchice)=>{
    // console.log("user choice",userchice);

    const comchoice =gencompchoice();
//    console.log("computer choice", comchoice);
   
   if(userchice === comchoice){
    //drow game
    drowgame();
   }
   else{
    let userwin = true;
    if(userchice ==="paper"){
        userwin = comchoice ==="ston"? true :false;   
    }
    else if(userchice==="scissor"){
        userwin = comchoice ==="ston"? false :true; 
    }
    else if(userchice==="ston"){
        userwin = comchoice ==="scissor"? true :false; 
    }
     
    showwinner(userwin, userchice,comchoice)
    }
    
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchice= choice.getAttribute("id")
        // console.log("choice is clicked",userchice);
       playgame(userchice) 

    })
    
})

