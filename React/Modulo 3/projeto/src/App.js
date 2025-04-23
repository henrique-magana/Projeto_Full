import Imagem from './assets/dublin.png'
import './App.css';
import  ManageData  from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRenders from './components/ConditionalRenders';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunctions from './components/ExecuteFunctions';
import { useState } from 'react';
import Messagem from './components/Messagem';
import ChangeMessageState from './components/ChangeMessageState';
import UsersDetalis2 from './components/UsersDetalis2';



function App() {


  const cars = [
    {id:1, brand: "BMW", color: "white", km:0, newCar:true},
    {id:2, brand: "Mercedes", color: "yellow", km:21240 , newCar:false},
    {id:3, brand: "GM", color: "blue", km:0, newCar:true}
  ]


  const pessoas = [
    {id:1, nome:"Henrique", idade:17, profissao:"Dev"},
    {id:2, nome:"Sergio", idade:61, profissao:"Comerciante"},
    {id:3, nome:"Fernando", idade:21, profissao:"Jogador"}
  ]

function showMessage(){
  alert("ativou")
}


const [message, setMessage] = useState("")
const handleMessage = (msg) =>{
  setMessage(msg)
}

  // aqui colocando imagens 
  return (
    <div className="App">
      <h1>Projeto 3</h1>

      <div>
        <img src="../amsterdan.jpg" alt="" />
      </div>
      <div>
      <img src={Imagem} alt="" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRenders/>
      <ShowUserName name="Henrique"/>
      <CarDetails brand="BMW" cor="Branca" km={70000}/>
      {/** reaproveitando */}
      <CarDetails brand="BMW" cor="Vermelha" km={500}/>
      {/**loops em array de objetos */}
      {cars.map((car) =>(
        <CarDetails key={car.id} brand={car.brand} km={car.km}  color={car.color} newCar={car.newCar}/>
      ))}

      {/**Fragment */}

      <Fragments/>

      <Container>
        <p>este eh o conteudo</p>
        <h1>teste</h1>
      </Container>

      <ExecuteFunctions myFunction={showMessage}/>
      <Messagem msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>


      {pessoas.map((pessoas) =>(
        <UsersDetalis2 nome={pessoas.nome} idade={pessoas.idade} profissao={pessoas.profissao}/>
      ))}
    </div>
  );
}

export default App;
