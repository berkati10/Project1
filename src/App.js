import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Navbar title="Menu du site"/>
      <Sidebar data="C'est une Nouvelle donnée"/>
     <Home/>
     <Footer logo="Lorem"/>
    ggggggggggggggggg
    </div>
  );
}

export default App;
