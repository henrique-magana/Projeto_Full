import {useState} from 'react'

const TodoForm = () => {


    const [value, setValue] = useState("")
    const [category, SetCategory] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(value, category)
    }


  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite o titulo' onChange={(e) =>setValue(e.target.value)}/>
            <select onChange={(e) =>SetCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm