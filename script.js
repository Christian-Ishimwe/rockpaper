const buttons=document.querySelectorAll('button')
const playerPick=document.getElementById('player')
const computerPick=document.getElementById('computer')
const playerScore=document.getElementById('playerScore')
const computerScore=document.getElementById('computerScore')
const computer=['paper', 'rock', 'scissor']
let i=0 //computer score
let j=0 //player score
buttons.forEach((element) =>{
    
    element.addEventListener('click', () =>{
        let computerChoice=randomCard()
        let playerChoice=element.id
        if(computerChoice=='paper' && playerChoice=='scissor' ||
                             computerChoice=='rock' && playerChoice=='paper'
                            || computerChoice=='scissor' && playerChoice=='rock'){
                                j++
                               playerScore.textContent=j
                                manageContent(playerPick, computerPick ,playerChoice, computerChoice)
        }
        else if(computerChoice=='scissor' && playerChoice=='paper' 
                || playerChoice=='rock' && computerChoice=='paper'
                || playerChoice=='scissor' && computerChoice=='rock'){
                    i++
                    computerScore.textContent=i
                   
                    manageContent(computerPick, playerPick,playerChoice, computerChoice )
                    
        }
        else if(computerChoice==playerChoice){
            playerPick.textContent=playerChoice
            computerPick.textContent=computerChoice
            playerPick.style.color='yellow'
            computerPick.style.color='yellow'
        }

        else{
            console.log(computerChoice)
            console.log(playerChoice)
        }
    })
})


function randomCard(){
    let cardIndex=Math.floor(Math.random() * 3)
    return computer[cardIndex]
}

function manageContent(win, loose, player, computer){
    
    win.style.color='green'
    loose.style.color='white'
    playerPick.textContent=player
    computerPick.textContent=computer
   
}