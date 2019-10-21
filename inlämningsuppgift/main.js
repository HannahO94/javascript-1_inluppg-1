/*const button = document.querySelectorAll('button')
button.addEventListener(event, function(){
    for (let i = 0; i<button; i++){
        if (button.contains('X') === false && button.contains('O')=== false)
            button.textContent = 'X'
    }
})
*/
//const button = document.createElement('button')

const player1 = 'X'
const player2 = 'O'
const size = 25

let newButton
let allbuttons = []
let allrows = []
let whosTurn = 'X'
let turns = 0
let howManyTurns
let whosPlayin 


howManyTurns = document.querySelector('#how-many-turns')
whosPlayin= document.querySelector('#whos-playin')

/*const knapp = document.getElementById('knapp')
knapp.addEventListener('click', function(){
    knapp.textContent= 'klickad'
})*/

for(let i = 0; i<size; i++) {
    //let div = document.createElement('br')    
    //allrows.push(div)
    //document.body.appendChild(div)
    //document.body.appendChild(allrows[i])
    /*for (let index = 0; index < allrows.length; index++) {
        //document.querySelector('table').appendChild(allrows[i])        
        document.body.appendChild(allrows[i])

    }*/
    for(let j = 0; j<size; j++) {
        newButton = document.createElement('button')        
        allbuttons.push(newButton)
        //allrows[i].appendChild(newButton)
        document.body.append(newButton)
    }            
    let div = document.createElement('br')    
    //allrows.push(div)
    document.body.append(div)
        
 
}


for (let i = 0; i<allbuttons.length; i++){
    allbuttons[i].addEventListener('click', function(){
        allbuttons[i].textContent = whosTurn
        function place(box) {
            box.textContent = whosTurn;
            if(whosTurn == player1) {
                whosTurn = player2
                allbuttons[i].style.color = 'blue'
                //allbuttons[i]= document.querySelector('#player').classList.replace('player1', 'player2')
                whosPlayin.textContent = `Det är ${player2}:s tur`
                document.querySelector('#whos-playin').classList.replace('cool', 'hot')

            }
            else {
                whosTurn = player1
                allbuttons[i].style.color = 'red'
                //allbuttons[i]= document.querySelector('player').classList.replace('player2', 'player1')
                whosPlayin.textContent = `Det är ${player1}:s tur`
                document.querySelector('#whos-playin').classList.replace('hot', 'cool')
            }
        }
        turns++
        
        howManyTurns.textContent = `Det är nu drag: ${turns} ` 
        place(whosTurn)
        //document.querySelector('tr').style.trsize = trsize +'px'
        allbuttons[i].disabled = true;
    })
    // allbuttons[i].addEventListener('mouseup', function(){
    //     allbuttons[i].style.position = 'absolute'
    //     })
}




/*let player1 = document.createElement('span')
player1.textContent = 'X'
document.body.append(player1)
//allbuttons[5].textContent = 'X'*/
/*if (whosTurn=== 'X'){
    allbuttons.addEventListener('click', function(){
        //if (event.currentTarget.contains()){
            allbuttons[currentTarget].textContent = 'X'
        //}
    })
    }
*/
/* for (let i = 0; i<=25; i++){
    const clonebutton = button.cloneNode(true)
    allbuttons.push(clonebutton)
    document.querySelector('body').appendChild(clonebutton)
 
}*/
/*button.addEventListener('click', function(){
    button.textContent = 'X'
})*/
//document.querySelector('body').appendChild(button)
