function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML =  `<strong>Agora são ${hora}:${minutos} horas!</strong>`
 if (hora >= 0 && hora < 12){
    // bom dia
    img.src = 'fotos/manha.png'
    document.body.style.background = 'linear-gradient(to bottom, #87CEEB, #A7DFFF, #FFD700)';


} else if (hora >= 12 && hora < 20){
    // boa tarde
    img.src = 'fotos/tarde.png'
    document.body.style.background = 'linear-gradient(to bottom, #FF4500, #FF8C00)';
} else {
    //boa noite
    img.src = 'fotos/noite.png'
    document.body.style.background = 'radial-gradient(circle, #2C2F4A, #000000)';


}

}