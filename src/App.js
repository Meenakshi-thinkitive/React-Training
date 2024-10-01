import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form'; 
import Reset from './Components/Reset';
import Register from './Components/Register';
import TestTable from './Components/TestTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/testtable" element={<TestTable />} />
      </Routes>
    </Router>
  );
}

export default App;