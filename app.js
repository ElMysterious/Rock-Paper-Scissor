
const POSSIBLE_CHOICE = ["roche", "papier", "ciseaux"]
let playerScore = 0
let computerScore = 0
let rockButton = document.getElementById('roche')
let paperButton = document.getElementById('papier')
let scissorButton = document.getElementById('ciseaux')
let resultDiv = document.querySelector('.result')
let gameResultP = document.createElement('p')
let scoreDiv = document.querySelector('.score')
let scoreP = document.createElement('p')
let playerPick = ""

rockButton.addEventListener('click', function(){
    playerPick = 'roche'
    let computerChoice = getComputerChoice()
    checkWinner(playerPick, POSSIBLE_CHOICE[computerChoice])
    giveScore()
    console.log(playerScore)
    if(playerScore === 5){
        printWinner()
        setTimeout(() =>{
            document.location.reload()
        }, 3000)
    }else if(computerScore === 5){
        printLoser()
        setTimeout(() =>{
            document.location.reload()
        }, 3000)
    }
})
paperButton.addEventListener('click', function(){
    playerPick = 'papier'
    let computerChoice = getComputerChoice()
    checkWinner(playerPick, POSSIBLE_CHOICE[computerChoice])
    giveScore()
    if(playerScore === 5){
        printWinner()
        setTimeout(() =>{
            document.location.reload()
        }, 3000)
    }else if(computerScore === 5){
        printLoser()
        setTimeout(() =>{
            document.location.reload()
        }, 3000)
    }
})
scissorButton.addEventListener('click', function(){
    playerPick = 'ciseaux'
    let computerChoice = getComputerChoice()
    checkWinner(playerPick, POSSIBLE_CHOICE[computerChoice])
    giveScore()
    if(playerScore === 5){
        printWinner()
        setTimeout(() =>{
            document.location.reload()
        }, 3000)
    }else if(computerScore === 5){
        printLoser()
        setTimeout(() =>{
            document.location.reload()
        }, 3000)
    }
})


function getComputerChoice(){
    return Math.floor(Math.random() * POSSIBLE_CHOICE.length)
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        gameResultP.textContent = "Égalité!"
        resultDiv.appendChild(gameResultP)
    }else if(playerSelection === "roche" && computerSelection === "papier"){
        displayLosingResult(computerSelection)
        computerScore++
    }else if(playerSelection === "roche" && computerSelection === "ciseaux"){
        displayWinningResult(computerSelection)
        playerScore++
    }else if(playerSelection === "papier" && computerSelection === "roche"){
        displayWinningResult(computerSelection)
        playerScore++
    }else if(playerSelection === "papier" && computerSelection === "ciseaux"){
        displayLosingResult(computerSelection)
        computerScore++
    }else if(playerSelection === "ciseaux" && computerSelection === "roche"){
        displayLosingResult(computerSelection)
        computerScore++
    }else if(playerSelection === "ciseaux" && computerSelection === "papier"){
        displayWinningResult(computerSelection)
        playerScore++
    }
    
}

function playGame(){
    let userChoice = playerChoice
    let computerChoice = getComputerChoice()
    checkWinner(userChoice, POSSIBLE_CHOICE[computerChoice])
}

function giveScore(){
    scoreP.innerText = `Score Joueur: ${playerScore}` + ` Score Ordinateur: ${computerScore}`
    scoreDiv.appendChild(scoreP)
    
}

function displayLosingResult(computerPick){
    gameResultP.textContent = `Vous avez perdu! L'ordinateur a choisi: ${computerPick}`
    resultDiv.appendChild(gameResultP)
}

function displayWinningResult(computerPick){
    gameResultP.textContent = `Vous avez gagné! L'ordinateur a choisi: ${computerPick}`
    resultDiv.appendChild(gameResultP)
}

function printWinner(){
    scoreP.innerText = 'Vous avez gagné la partie! Bravo!'
}

function printLoser(){
    scoreP.innerText = "Vous avez perdu la partie!"
}


gameResultP.style.color = 'gold'
gameResultP.style.fontSize = '30px'
scoreP.style.color = 'gold'
scoreP.style.fontSize = '30px'




