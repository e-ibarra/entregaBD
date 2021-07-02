function noParesDeContarImparesHasta(numero){
     let oddQty;
      for (let i = 0; i<= numero; i++){
        if (i %2 != 0){
        oddQty++
        
        }
     }
    return oddQty
}
console.log(noParesDeContarImparesHasta(25))