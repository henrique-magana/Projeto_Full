import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {


    const [name, setName] = useState()
    const [email, setEmail] = useState()

    //toda vez que clicar no campo nome dispara aqui
    // aqui mudamos o valor da variavel name
    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }


    //envio do formulario
    const handleSubmit = (ev) =>{
        ev.preventDefault()
        console.log(name,email)
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName}/>
            </div>
            <label htmlFor="email">
                <span>Email:</span>
                <input type="email" name='email' placeholder='Digite seu email' onChange={handleEmail}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm