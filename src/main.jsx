import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PolicyPage from './Policy.jsx'
import '../styles/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/theappversal/policy" element={<PolicyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)