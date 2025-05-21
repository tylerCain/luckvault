import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './index.jsx'
import NotFoundPage from './components/404.jsx'
import Raffles from './raffle/raffleHomepage.jsx'
import RafflePage from './raffle/rafflePage.jsx'
import FaqPage from './pages/faq.jsx'
import UserDashboard from './components/dashboard/userDashboard.jsx'
import TermsPage from './pages/tos.jsx'

export default () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/raffles" element={<Raffles />} />
    <Route path="/raffles/:raffleId" element={<RafflePage />} />
    <Route path="/dashboard" element={<UserDashboard />} />
    <Route path="/faq" element={<FaqPage />} />
    <Route path="/tos" element={<TermsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)