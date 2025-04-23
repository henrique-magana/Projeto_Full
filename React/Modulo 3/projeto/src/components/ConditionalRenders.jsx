import { useState } from "react"


const ConditionalRenders = () => {

    const [x] = useState(true)

    const [name, setName] = useState('Jao')

    //codigo abaixo eh de condicao

  return (
    <div>
        <h1>isso sera exibido?</h1>
        {x && <p>Se x for verdadeiro sim</p>}
        {name === 'Joao' ? (
            <div>
                <h1>o nome eh joao</h1>
            </div>
        ) : (
            <div>
                <h1>outro nome</h1>
            </div>
        )}

        <button onClick={() => setName('Joao')}>clique aqui</button>
    </div>
  )
}

export default ConditionalRenders