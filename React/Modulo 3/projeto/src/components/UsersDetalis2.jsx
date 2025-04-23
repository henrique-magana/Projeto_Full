
const UsersDetalis2 = ({nome,idade,profissao}) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
        {idade >= 18 ? <p>Pode dirigir</p>:<p>Nao pode dirigir</p>}
        <p>--------------</p>
    </div>
  )
}

export default UsersDetalis2