import Imagem from './assets/dublin.png'
import './App.css';
import  ManageData  from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
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
    </div>
  );
}

export default App;
