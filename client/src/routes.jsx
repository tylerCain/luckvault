import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './index.jsx'
import NotFoundPage from './components/404.jsx'
import Raffles from './raffle/raffleHomepage.jsx'

export default () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/raffles" element={<Raffles />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)