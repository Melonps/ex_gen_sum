import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Login from "./Login";
import Test from "./Test";
import Go from "./Go";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Login />} />
          <Route path={`/test/`} element={<Test />} />
          <Route path={`/go/`} element={<Go />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
