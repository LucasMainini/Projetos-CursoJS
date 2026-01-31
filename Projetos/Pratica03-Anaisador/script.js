let txtn = document.getElementById("txtn")
let lista = document.getElementById("list")
let res = document.getElementById("res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let n = txtn.value

    if (isNumero(n) && !inLista(n, valores)) {
        valores.push(Number(n))

        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor inválido ou já encontrado na lista')
    }

    txtn.value = ''
    txtn.focus()
}

function fim() {
    if (valores.length == 0 ){
        window.alert("Adicione valores antes de começar a operação")
    } else {
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores ){
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if ( valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma /tot 
        res.innerHTML = ''
        res.innerHTML+= `<p> Ao todo temos ${tot} elementos </p>`
         res.innerHTML+= `<p> O maior valor informado é: ${maior} </p>`
          res.innerHTML+= `<p> E o menor valor informado é: ${menor}  </p>` 
          res.innerHTML+= `<p> Somando todos os valores temos: ${soma}  </p>` 
          res.innerHTML+= `<p> A media entre eles sao: ${media}  </p>`

    }

}