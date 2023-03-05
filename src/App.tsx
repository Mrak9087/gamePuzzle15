import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BoardView from './components/BoardView';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { setSize } from './store/gameStore';
import { AppDispatch, RootState } from './store/store';

function App() {
  // const store = useSelector((state:RootState)=>state)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="App">
      <Header />
      <BoardView />
    </div>
  );
}

export default App;
