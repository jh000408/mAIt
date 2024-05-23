import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AboutUs from './Pages/About/AboutUs.js';
import MainContent from './MainContents.js';
import ChatBot from './Pages/ChatBot/ChatBot.js';
import Generator from './Pages/Generator/Generator.js';
import Output from './Pages/Generator/Output.js';

import PaymentChoice from "./Pages/Kiosk/paymentChoice/PaymentChoice.js"; 
import FirstPage from "./Pages/Kiosk/FirstPage.js";
import SalesStatistics from "./Pages/Kiosk/SalesStatistics.js";
import SecondPage from "./Pages/Kiosk/SecondPage.js";
import ShoppingBag from "./Pages/Kiosk/ShoppingBag.js"; 
import CompletePay from "./Pages/Kiosk/CompletePay.js";

import CafeMain from "./Pages/Kiosk/Cafe/CafeMain.js";
import CafeOrder from "./Pages/Kiosk/Cafe/CafeOrder.js";

import './App.css';
import MainContentt from './MainContents2.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="hdivider" />
          <Routes>
            <Route path='/web/src/MainContents2.js' element = {<MainContent/>}/>
          </Routes>
      
        <Routes>
          <Route path="/" element={<MainContentt />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Pages/ChatBot" element={<ChatBot/>} />
          <Route path="/Pages/Generator" element={<Generator/>} />
          <Route path="/Pages/Generator/Output" element={<Output/>} />

          <Route path="/Pages/Kiosk" element={<FirstPage/>}/>
          <Route path="/Pages/Kiosk/salesStatistics" element={<SalesStatistics/>}/>
          <Route path="/Pages/Kiosk/SecondPage" element={<SecondPage/>}/>
          <Route path="/Pages/Kiosk/ShoppingBag" element={<ShoppingBag/>}/>
          <Route path="/Pages/Kiosk/PaymentChoice" element={<PaymentChoice/>}/>
          <Route path="//Pages/Kiosk/CompletePay" element={<CompletePay/>}/>
          
          <Route path="/Pages/Kiosk/Cafe" element={<CafeMain/>}/>
          <Route path="/Pages/Kiosk/Cafe/Order" element={<CafeOrder/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
