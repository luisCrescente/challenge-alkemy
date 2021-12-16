import { BrowserRouter,Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
//import * as BS from 'react-bootstrap'
import Formulario from './components/Formulario'
import Login from './components/Login'
import Register from './components/Register'
import Header from "./components/Header"
// import Tabla from "./components/Tabla"


function App() {
  return (
      <BrowserRouter>
      <Header />
      
      <Routes>
          <Route  path="/" element={<Formulario />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          {/* <Route  path="/tabla" element={<Tabla />} /> */}
      </Routes>
      
      
      
      </BrowserRouter>
  );
}

export default App;
