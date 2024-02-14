import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ArtistServiceCard from './components/MakeupArtist/MakeupArtist'
import ServiceCard from './components/Cards/ServiceCard'
const App = ()=> {
  const items = [
    { name: 'Saraswathi', details: 'Makeup artist from Tirunelveli' },
    { name: 'Priya', details: 'Makeup artist from Kallidai' },
    // Add more items as needed
  ];
  
    return (
      <div className="App">
        <Header />   
        <ServiceCard /> 
        <Routes>
        <Route path="/about" element={<ArtistServiceCard items={items}/>} />
        </Routes>
      </div>
    );
  }

export default App;