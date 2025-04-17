import {useState} from 'react'

const ManageData = () => {

    let valor = 10

    console.log(valor)

    const [number, setNumber] = useState(15)


  return (
    <div>
        <p>Valor: {valor}</p>
        <button onClick={() =>{valor = 15}}>Clique aqui</button>
        <p>Valor: {number}</p>
        <button onClick={() =>setNumber(number + 1)}>Mudar o State</button>
    </div>

  )
}

export default ManageData