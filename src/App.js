import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import whather from "./services/requesWeatherService";

function App() {

  useEffect(()=>{
    whather("Paris")
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         HOlA MUNDO
        </p>
      </header>
    </div>
  );
}

export default App;
