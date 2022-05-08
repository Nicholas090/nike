import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Cart, Home } from './pages/index';
import { connect } from 'react-redux';
import { setShoesActions } from './redux/actions/actionCreater';
import { RootState, AppDispatch } from './redux/store';
import { itemsInterface } from './interfaces';
import { useAppDispatch, useAppSelector } from './redux/hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((data) => data.json())
      .then((res) => {
        dispatch(setShoesActions(res.shoes));
      });
  }, []);

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
