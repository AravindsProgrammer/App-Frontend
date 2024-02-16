import React, { useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ArtistServiceCard from './components/MakeupArtist/MakeupArtist'
import ServiceCard from './components/Cards/ServiceCard'
import LoginPage from './components/LoginPage/LoginPage';
const App = ()=> {
  const items = [
    { name: 'Saraswathi', details: 'Makeup artist from Tirunelveli' },
    { name: 'Priya', details: 'Makeup artist from Kallidai' },
    // Add more items as needed
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform authentication logic, e.g., check credentials
    // If authenticated successfully, set isLoggedIn to true
    setIsLoggedIn(true);
  };
  
    return (
      <div className="App">
         {/* Conditional rendering based on isLoggedIn */}
      {isLoggedIn ? (
        <Header />
      ) : (
        <LoginPage path="/" element={<LoginPage />}onLogin={handleLogin} />
      )}  
        <Routes>
        <Route path="/dash-board" element={<ServiceCard/> } />
        <Route path="/about" element={<ArtistServiceCard items={items}/>} />
        </Routes>
      </div>
    );
  }

export default App;