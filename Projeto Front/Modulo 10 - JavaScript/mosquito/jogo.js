let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}


ajustaTamanhoPalcoJogo()


let cronometro = setInterval(()=>{

    tempo -=1

    if(tempo <0){

        clearInterval(cronometro)
        clearInterval(criaMosca)
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

 function posicaoRandomica(){

    // remover o mosquito anterior
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()


        if(vidas > 3){
            window.location.href ="fim_de_jogo.html"
        }else{
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

        vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

//criando elemento no HTML

    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"
    mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    mosquito.onclick = () =>{
        this.remove()
    }


 }


 function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1 '
        case 1:
            return 'mosquito2 '
        case 2:
            return 'mosquito3 '
    }

 }

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}