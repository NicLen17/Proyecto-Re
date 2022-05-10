import './App.css';
import Inicio from './Componentes/Inicio'
import NavR from './Componentes/NavR'
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './Componentes/Carrito';
import Contacto from './Componentes/Contacto';
import Register from './Componentes/Pages/Register';
import Login from './Componentes/Pages/Login';
import Perfil from './Componentes/Perfil';
import { useEffect, useState } from 'react';
import Admin from './Componentes/Pages/Admin';
import axios from 'axios';
import ProductosFiguras from './Componentes/ProductosFiguras';
import ProductosDecoracion from './Componentes/ProductosDecoracion';
import ProductosDiseño from './Componentes/ProductosDiseño';
import ProductosLlaveros from './Componentes/ProductosLlaveros';
import ProductosOtros from './Componentes/ProductosOtros';
import ProductosPokemon from './Componentes/ProductosPokemon';
import ProductosPrecioBajo from './Componentes/ProductosPrecioBajo';
import ProductosPrecioAlto from './Componentes/ProductosPrecioAlto';
import Productos from './Componentes/Productos';
import ProdIndividual from './Componentes/ProdIndividual';
import EnvioConsulta from './Componentes/EnvioConsulta';
import Seccion404 from './Componentes/Seccion404';

const localToken = JSON.parse(localStorage.getItem("token"))?.token || "";
export default function App() {
  
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localToken); //cuando no tenemos un token generado la const Token es un string vacio.
  //llama a axios con el token del usuario, con useEffect reemplaza a un condicional, sólo se va a ejecutar cuando el token cambie de valor
  useEffect(() => {
    
    if (token) {
      const request = async () => {
        axios.defaults.headers = { "x-auth-token": token }; //> en el midleware/auth está definido el header que va a ser cabecera
        const { data } = await axios.get("/auth"); //trae los datos del usuario loguedo mediante axios, y los guarda en data
        setUser(data); //coloca los datos del usuario en la variable user
      };
      request(); //realiza el pedido
    }
    }, [token]); //se pone "token" como parámetro para que llame a useEffect cada vez que cambie
  
    const logout = () => {
    localStorage.removeItem("token"); //elimina el token
    axios.defaults.headers = { "x-auth-token": "" };
    setUser({}); //limpia el usuario
    setToken(""); //limpia el token
  };
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavR userName={user.nombre}
            userCategory={user.category}
            logout={logout}
          />}>

            <Route index element={<Inicio />} />

            <Route path='/productos' element={<Productos />} /> 
            
            <Route path='/productos/precios/bajos' element={<ProductosPrecioBajo />} /> 

            <Route path='/productos/precios/altos' element={<ProductosPrecioAlto />} /> 

            <Route path='/productos/pokemon' element={<ProductosPokemon />} />

            <Route path='/productos/decoracion' element={<ProductosDecoracion />} />

            <Route path='/productos/disenos' element={<ProductosDiseño />} />

            <Route path='/productos/otros' element={<ProductosOtros />} />

            <Route path='/productos/llaveros' element={<ProductosLlaveros />} />

            <Route path='/productos/figuras' element={<ProductosFiguras />} />

            <Route path='/individual/:id' element={<ProdIndividual />} />

            <Route path='/register' element={<Register setToken={setToken} />} />

            <Route path='/login' element={<Login setUser={setUser} setToken={setToken} />} />

            <Route path='/admin' element={<Admin user={user.nombre} />} />

            <Route path='/contacto' element={<Contacto />} />

            <Route path='/consultas' element={<EnvioConsulta />} />

            <Route path='/carrito' element={<Carrito />} />

            <Route path='/perfil' element={<Perfil user={user} />} />

            <Route path="*" element={<Seccion404 />}/>

          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

// export default App;
