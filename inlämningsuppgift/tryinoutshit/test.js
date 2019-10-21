/*let whosWinner1 = false
let whosWinner2 = false
let whosWinner3 = false
let whosWinner4 = false
let whosWinner5 = false
let whosWinner6 = false
let whosWinner7 = false


const winner = []


if (allbuttons[i]-1 === player1){
    whosWinner1 = true
    winner.push(whosWinner1)
    if (whosWinner1=== true && allbuttons[i]-2 === player1 && winner.length<5){
        whosWinner3 = true
        winner.push(whosWinner3)
        if (whosWinner3=== true && allbuttons[i]-3 === player1 && winner.length<5){
            whosWinner5 = true
            winner.push(whosWinner5)
            if (whosWinner5=== true && allbuttons[i]-4 === player1 && winner.length<5){
                whosWinner7 = true
                winner.push(whosWinner7)
    }

}
}
}
if (winner.length === 5){
    alert('X är vinnare!')
}


if (allbuttons[i]+1 === player1){
    whosWinner2 = true
    winner.push(whosWinner2)
    if (whosWinner1=== true && allbuttons[i]+2 === player1 && winner.length<5){
        whosWinner4 = true
        winner.push(whosWinner4)
    }
}

*/
let size = 25

function Create2DArray(size){
    var arr = []
    for (let i = 0; i < size; i++){
      arr[i] = []
      for(let j = 0; j<size; j++) {
        newButton = document.createElement('button')        
        arr[i] = push(newButton)
    //allrows[i].appendChild(newButton)
    //document.body.append(newButton)
        }  
 //document.body.append(arr)       
 return arr
} 
}
document.body.appendChild(Create2DArray(25)) 


/*function Create2DArray(rows) {
    var arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
  } */
/*let hej

hej.textContent = 'hej '
hej = document.body.appendChild('p')


  let size = 25
for(let i = 0; i<size; i++){
  for(let j = 0; j<size; j++) {
    newButton = document.createElement('button')        
    allbuttons.push(newButton)
    //allrows[i].appendChild(newButton)
    document.body.append(newButton)
}   
}*/