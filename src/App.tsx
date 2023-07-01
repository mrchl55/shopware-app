import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from "./components/Layout/MainContainer/MainContainer";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <div className="App">
        <Header />
<MainContainer />
    </div>
  );
}

export default App;
