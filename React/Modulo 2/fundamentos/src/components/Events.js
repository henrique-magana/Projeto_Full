

const Events = () =>{


    const renderSomething = (x) =>{
        if(x){
            return <h1>Renderizando {x}</h1>
        }else{
            return <h2>Erro</h2>
        }
    }
    const handleMyEvent = (e) =>{

        console.log(e)
        console.log('Ativou a funcao')
    }

 

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>

            <div>
                <button onClick={() =>{console.log('Clicou')}}>Clique Aqui Tambem</button>

            </div>

            <div>
                <button>Teste</button>
            </div>
            {renderSomething(9)}
        </div>
    )



}

export default Events