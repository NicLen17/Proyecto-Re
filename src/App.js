import './App.css';
import Inicio from './Componentes/Inicio'
import NavR from './Componentes/NavR'
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './Componentes/Productos';
import Carrito from './Componentes/Carrito';
import Contacto from './Componentes/Contacto';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavR />}>

            <Route index element={<Inicio />} />

            <Route path='/productos' element={<Productos />} />

            <Route path='/carrito' element={<Carrito />} />

            <Route path='/contacto' element={<Contacto />} />

          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
