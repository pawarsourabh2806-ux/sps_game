let userscore = 0;
let comoscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscore_para = document.querySelector(".user-score");
const comscore_para = document.querySelector(".com-score");

// DRAW GAME
const drowgame = (userchice) => {
  msg.innerText = `Your choice ${userchice}. Game Draw! Play again.`;
  msg.style.backgroundColor = "black";
};

// SHOW WINNER
const showwinner = (userwin, userchice, comchoice) => {
  if (userwin) {
    userscore++;
    userscore_para.innerText = userscore;
    msg.innerText = `You win! Your ${userchice} beats ${comchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comoscore++;
    comscore_para.innerText = comoscore;
    msg.innerText = `You lost! ${comchoice} beats your ${userchice}`;
    msg.style.backgroundColor = "red";
  }
};

// COMPUTER CHOICE
const gencompchoice = () => {
  const option = ["ston", "paper", "scissor"];
  const ranidx = Math.floor(Math.random() * 3);
  return option[ranidx];
};

// MAIN GAME LOGIC
const playgame = (userchice) => {
  const comchoice = gencompchoice();

  if (userchice === comchoice) {
    drowgame(userchice);
  } else {
    let userwin;

    if (userchice === "paper") {
      userwin = comchoice === "ston";
    } 
    else if (userchice === "scissor") {
      userwin = comchoice === "paper";
    } 
    else { // ston
      userwin = comchoice === "scissor";
    }

    showwinner(userwin, userchice, comchoice);
  }
};

// CLICK EVENTS
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchice = choice.getAttribute("id");
    playgame(userchice);
  });
});
