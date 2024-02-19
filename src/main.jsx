import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
import { Home, Academic, Principle, AdmissionProcedure, RegistrationProcedure, OnlinePayment, FeeStructure, Gallery, Sports, ContactUs,Login, Curriculum, MainPannel, ComputerLab, MusicLab, SmartClassRoom, Library } from "./components";
   

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
