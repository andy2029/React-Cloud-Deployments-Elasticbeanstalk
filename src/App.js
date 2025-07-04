import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Profile from './components/Profile';
import Specials from './components/Specials';
import MealPlanner from './components/MealPlanner';

import PurchaseConfirmation from './components/PurchaseConfirmation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="profile" element={<Profile />} />
            <Route path="specials" element={<Specials />} />
            <Route path="plan" element={<MealPlanner />} />
            <Route path="purchaseconfirmation" element={<PurchaseConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
