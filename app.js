
const POSSIBLE_CHOICE = ["roche", "papier", "ciseaux"]
let score = 0

function getPlayerChoice(){
    return prompt("Qu'elle est votre choix: Roche, Papier ou ciseaux?").toLowerCase()
}

function getComputerChoice(){
    return Math.floor(Math.random() * POSSIBLE_CHOICE.length)
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection === "roche" && computerSelection === "roche"){
        alert("Égalité! Vous avez tout les deux choisies roche!")
    }else if(playerSelection === "roche" && computerSelection === "papier"){
        alert("Vous avez perdu! L'ordinateur a choisie papier!")
    }else if(playerSelection === "roche" && computerSelection === "ciseaux"){
        alert("Vous avez gagné! L'ordinateur a choisie ciseaux!")
        score++
    }else if(playerSelection === "papier" && computerSelection === "papier"){
        alert("Égalité! Vous avez tout les deux choisies papier!")
    }else if(playerSelection === "papier" && computerSelection === "roche"){
        alert("Vous avez gagné! L'ordinateur a choisie roche!")
        score++
    }else if(playerSelection === "papier" && computerSelection === "ciseaux"){
        alert("Vous avez perdu! L'ordinateur a choisie ciseaux!")
    }else if(playerSelection === "ciseaux" && computerSelection === "ciseaux"){
        alert("Égalité! Vous avez tout les deux choisies ciseaux!")
    }else if(playerSelection === "ciseaux" && computerSelection === "roche"){
        alert("Vous avez perdu! L'ordinateur a choisie roche!")
    }else if(playerSelection === "ciseaux" && computerSelection === "papier"){
        alert("Vous avez gagné! L'ordinateur a choisie papier!")
        score++
    }
    
}

function playGame(){
    let userChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()
    checkWinner(userChoice, POSSIBLE_CHOICE[computerChoice])
}

function giveScore(score){
    if(score === 5 || score == 4){
        alert(`Votre score est de ${score}, très bien jouer!`)
    }else if(score === 3){
        alert(`Votre score est de ${score}, vous avez gagné de justesse!`)
    }else{
        alert(`Votre score est de ${score}, Vous avez perdu!`)
    }
    
}

for(let i = 0; i < 5; i++){
    playGame()
}
giveScore(score)
