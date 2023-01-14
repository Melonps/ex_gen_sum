import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Login from "./Login";
import Mypage from "./Mypage";


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Login />} />
          <Route path={`/Mypage/`} element={<Mypage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
