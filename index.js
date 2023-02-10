let celi = document.querySelectorAll('.celi');
let winPlayer = document.querySelector(".win-player");
let player = "0";
const winvoice = new Audio();
winvoice.src = "imigas/mixkit-medieval-show-fanfare-announcement-226.wav";
const btn = document.querySelectorAll(".btn");
const StartGameDiv = document.querySelector(".start-game");
const gamecontaier = document.querySelector(".gamecontainer");
const voice = new Audio();
voice.src = "imigas/mixkit-retro-game-notification-212.wav";
const AboutUs = document.querySelector(".About-us");

document.querySelector(".start").addEventListener("click",()=>{
    StartGameDiv.style.display = "none";
    gamecontaier.style.display = "flex";
    voice.play()

});
AboutUs.addEventListener("click",()=>{
    StartGameDiv.style.display = "none";
    document.querySelector(".About-us-container").style.display = "flex";
})

btn.forEach((item)=>{
   item.addEventListener('click',()=>{
        location.reload()
    })
})
function audioPlay(){
    voice.currentTime = 0;
    voice.play()
}

celi.forEach((div)=>{
    div.addEventListener("click",()=>{
        audioPlay();
        if(winPlayer.innerHTML !== ""){
            return
        }

        if(player === "0"){
            player = "X"
            
        }else{
            player = "0"
            
        }
        if(div.innerHTML === ""){
            div.innerHTML = player;
        }else if(div.innerHTML!==""){
            
            alert("this field already has a specified value")
        }
        
        game()
        
    })
})
function winGame(){
    voice.currentTime = 0;
    winvoice.play();
  
}

function game(){
    if(celi[0].innerHTML === "X" && celi[1].innerHTML === "X" && celi[2].innerHTML === "X"){
        
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
        
    }
    if(celi[3].innerHTML === "X" && celi[4].innerHTML === "X" && celi[5].innerHTML === "X"){
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
    }
    if(celi[6].innerHTML === "X" && celi[7].innerHTML === "X" && celi[8].innerHTML === "X"){
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
    }
    if(celi[0].innerHTML === "X" && celi[3].innerHTML === "X" && celi[6].innerHTML === "X"){
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
    }
    if(celi[1].innerHTML === "X" && celi[4].innerHTML === "X" && celi[7].innerHTML === "X"){
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
    }
    if(celi[2].innerHTML === "X" && celi[5].innerHTML === "X" && celi[8].innerHTML === "X"){
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
    }
    if(celi[0].innerHTML === "X" && celi[4].innerHTML === "X" && celi[8].innerHTML === "X"){
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
    }
    if(celi[2].innerHTML === "X" && celi[4].innerHTML === "X" && celi[6].innerHTML === "X"){
        winPlayer.innerHTML = "Yayy Win Player  'X' we congratulate";
        winGame();
    }

    // if for "0"

    if(celi[0].innerHTML === "0" && celi[1].innerHTML === "0" && celi[2].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
        
    }
    if(celi[3].innerHTML === "0" && celi[4].innerHTML === "0" && celi[5].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
    }
    if(celi[6].innerHTML === "0" && celi[7].innerHTML === "0" && celi[8].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
    }
    if(celi[0].innerHTML === "0" && celi[3].innerHTML === "0" && celi[6].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
    }


    if(celi[1].innerHTML === "0" && celi[4].innerHTML === "0" && celi[7].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
    }
    if(celi[2].innerHTML === "0" && celi[5].innerHTML === "0" && celi[8].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
    }
    if(celi[0].innerHTML === "0" && celi[4].innerHTML === "0" && celi[8].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
    }
    if(celi[2].innerHTML === "0" && celi[4].innerHTML === "0" && celi[6].innerHTML === "0"){
        winPlayer.innerHTML = "Yayy Win Player  '0' we congratulate";
        winGame();
    }
    if(celi[0].innerHTML !== "" && celi[1].innerHTML!=="" && celi[2].innerHTML !== "" && celi[3].innerHTML !== ""  && celi[4].innerHTML !== "" && celi[5].innerHTML !== "" && celi[6].innerHTML !== "" && celi[7].innerHTML !== "" && celi[8].innerHTML !== "" ){
        winPlayer.innerHTML = "Sorry, a draw was registered. Please try again";
        winGame();
    }
    
    
}

