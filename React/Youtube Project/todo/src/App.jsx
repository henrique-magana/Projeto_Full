import { useState } from 'react'
import './App.css'
import Todo from '../components/todo'
import TodoForm from '../components/TodoForm'

function App() {

  const [todos, setodos] = useState([
    { id:1,
      text:"Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    { id:2,
      text:"Ir para academia",
      category: "Pessoal",
      isCompleted: false
    },
    { id:3,
      text:"Estudar React",
      category: "Estudos",
      isCompleted: true
    }
  ])

  return (
  <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>

    <TodoForm/>
  </div>
  )
}

export default App
