import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Bienvenid@ a la segunda entrega de Fabián Hirigoyen" />}/>
      <Route path="/category/:id" element={<ItemListContainer greeting="Bienvenid@ a la segunda entrega de Fabián Hirigoyen" />}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
