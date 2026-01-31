function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    if (minutos < 10){
        minutos = '0' + minutos
    } 

    msg.innerHTML = `<strong>Agora são ${hora}:${minutos}</strong>`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotos/manha.png'
        document.body.style.background = 'linear-gradient(180deg, #4FACFE, #8FD3F4, #E0F7FF)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fotos/tarde.png'
        document.body.style.background ='linear-gradient(180deg, #FF6A00, #FF8C00, #FFC371)'
    } else {
        img.src = 'fotos/noite.png'
        document.body.style.background = 'linear-gradient(180deg, #052935f8, #135371db, #2C5364)'
    }
}
