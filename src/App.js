import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Login from "./Login";
import Test from "./Test";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Login />} />
          <Route path={`/test/`} element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
