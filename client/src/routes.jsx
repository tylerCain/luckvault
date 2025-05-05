import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './index.jsx'
import NotFoundPage from './components/404.jsx'
import Raffles from './raffle/raffleHomepage.jsx'
import RafflePage from './raffle/rafflePage.jsx'
import FaqPage from './components/faq.jsx'
import UserDashboard from './components/dashboard/userDashboard.jsx'

export default () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/raffles" element={<Raffles />} />
    <Route path="/raffles/:raffleId" element={<RafflePage />} />
    <Route path="/faq" element={<FaqPage />} />
    <Route path="/dashboard" element={<UserDashboard />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)