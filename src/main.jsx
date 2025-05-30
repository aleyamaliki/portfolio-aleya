import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<App />} />
  </Routes>
  </BrowserRouter>
)
