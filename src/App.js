import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenid@ a la primera entrega de Fabián Hirigoyen" />
    </>
  );
}

export default App;
