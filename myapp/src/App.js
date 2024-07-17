import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Votes from './pages/Votes/Votes';
import Register from './pages/Register/Register';
import Login from './pages/login/Login';
import Layout from './pages/Layout/Layout';

import AddCandidates from './pages/AddCandidates/AddCandidates';
import Candidates from './pages/Candidates/Candidates';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />} > 
        </Route> 
        <Route path="/vote" element={<Votes />} /> 

        <Route path='/admin' element={<Outlet />}>   
          <Route index element={<Candidates />} />
        
          <Route path='votes' element={<Candidates />} /> 
       
          <Route path='addCandidate' element={<AddCandidates />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
