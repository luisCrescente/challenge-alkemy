import { BrowserRouter,Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
// import * as BS from 'react-bootstrap'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
      <Header />
      
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          
      </Routes>
      
      
      
      </BrowserRouter>
  );
}

export default App;
