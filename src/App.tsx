import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Cart, Home } from './pages/index';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
