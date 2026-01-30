
/* num.indexOf(7)  **SEMPRE A LETRA O MAIUSCULA!!** aqui eu busco o valor no vetor nao a posiçao entao como 
meu vetor tem 7 vai aparecer 7 se eu colocasse num.indexOf(3) ia dar erro pois nao tem 3 
*/


let num = [5, 7, 9, 10 , 11]
num.push(1) // adiciona var no vertor
 // num.length // quantas posiçoes tem no meu vetor
num.sort() // organiza o vetor em ordem crescente
console.log(num)
console.log (`Nosso vetor tem ${num.length} posiçoes`)
let pos = num.indexOf(11)


if (pos == -1) { //se o valor for -1 vai dizer o valor nao foi encontrado *OU* mostra qual posiçao está o numero pesquisado
    console.log ('o valor nao foi encontrado!')
    
} else{
   console.log(`o Valor 11 está na ${pos}`) 
}
