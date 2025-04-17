import { useState } from "react"


const ListRender = () => {


    const [list] = useState(["Matheus","Pedro","Josias"])

    const [users, setUsers] = useState([
        {id: 1, nome:"Henrique"},
        {id: 2, nome:"Eduardo"},
        {id: 3, nome: "Joao"}]) // usando esse metodo nao vamos ter um problema pois 


    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4)


        setUsers((prevUsers) =>{

            return prevUsers.filter((user) => randomNumber !== user.id)


        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((users) =>(
                <li key={users.id}>{users.nome}</li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender