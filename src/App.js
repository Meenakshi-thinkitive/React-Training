import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import Reset from './Components/Reset';
import Register from './Components/Register';
import TestTable from './Components/TestTable';
// import ProtectedRoute from "./utils/ProtectedRoute";
import Parent from './Components/Parent';
import Child from './Components/Child';
import { useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/testtable" element={<TestTable />} />
        <Route path="/protected" element={<Parent />} />
        <Route path="/testProt" element={
          <ProtectedRoute flag = {flag}>
            <Child />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>

  );
}

export default App;

