import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar title="Menu du site"/>
     <Home/>
     <Footer logo="Lorem"/>
    </div>
  );
}

export default App;
