import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage'
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage'
import BookingPage from './Pages/BookingPage/BookingPage'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <App/>
    <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/gioi-thieu' element={<AboutUsPage/>}></Route>
      <Route path='/lien-he' element={<ContactPage/>}></Route>
      <Route path='/dat-chuyen' element={<BookingPage/>}></Route>
    </Routes>
  </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

