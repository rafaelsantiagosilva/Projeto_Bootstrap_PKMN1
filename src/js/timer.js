 // Setando para aparecer os pokemon Eevee e Pikachu
 function aparecerExtras(){
    document.getElementById('pikachu').classList.remove('extra') 
    document.getElementById('eevee').classList.remove('extra')
}

// Setando o tempo para isto -> 5s
setTimeout(aparecerExtras, 1000*5);