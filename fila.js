export function criarFila(tamanho=5){
    return [...new Array(tamanho)]
}
let minhaFila = criarFila(5)
console.log(minhaFila)

export function inserirNaFila(fila, item){
   let espaco = fila.indexOf(undefined)

   if(espaco!==-1){ //se nao encontrar o undefined retorna -1, se sim retorna 1 
    fila[espaco] = item
    return
   }
}


export function retirarDaFila(fila, item){
    if (fila[0] === undefined ){
        console.log("FILA VAZIA")
        return 
    }

    let prim = fila[0]

    // ANDAR COM TODOS PARA FRENTE
    for (let i = 0; i < fila.length; i++) {
        
    }

}
