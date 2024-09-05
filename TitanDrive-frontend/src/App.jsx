import { useState } from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import CarDetails from './pages/createcar/Createcar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './pages/cars/CarList';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/create' element={<CarDetails/>}/>
        <Route path='/cars' element={<CarList/>}/>
      </Routes>
    </Router>
  );
};
export default App
