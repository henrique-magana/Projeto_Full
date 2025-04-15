







function enviarDados(){

    let titulo = document.getElementById('conteudo_titulo')
    let sobre = document.getElementById('conteudo_sobre')

    class Adiciona{
        constructor(titulo,sobre){
            this.titulo = titulo
            this.sobre = sobre
        }


        
    }

    let adiciona = new Adiciona(titulo,sobre)

    console.log(adiciona)

}


function adicionaDados(titulo,sobre){

    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    let td2 = document.createElement('td')
    td1.innerHTML = titulo
    td2.innerHTML = sobre
    document.getElementById('tabela').appendChild(tr).appendChild(td1)
    document.getElementById('tabela').appendChild(tr).appendChild(td2)
    

    
}