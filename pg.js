
function noParesDeContarImparesHasta(numero) {
    let cantImpares = 0
    for (let i = 0; i <= numero; i++){
        if (i % 2 === 1) {
           cantImpares += 1
            
        }
      
    }
    return cantImpares
}
console.log(noParesDeContarImparesHasta(10))