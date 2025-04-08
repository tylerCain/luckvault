import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './index.jsx'
import Services from './services/services.jsx'
import PavingServices from './services/paving.jsx'
import FencingServices from './services/fencing.jsx'
import TurfingServices from './services/turfing.jsx'
import DrivewayServices from './services/driveways.jsx'
import DeckingServices from './services/decking.jsx'
import TreeServices from './services/trees.jsx'
import AstroTurfServices from './services/astro.jsx'
import ContactPage from './contact/contactPage.jsx'
import PortfolioPage from './portfolio/portfolio.jsx'
import GroundworksServices from './services/groundworks.jsx'
import NotFoundPage from './components/404.jsx'

export default () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/paving" element={<PavingServices />} />
    <Route path="/services/fencing" element={<FencingServices />} />
    <Route path="/services/turfing" element={<TurfingServices />} />
    <Route path="/services/driveways" element={<DrivewayServices />} />
    <Route path="/services/decking" element={<DeckingServices />} />
    <Route path="/services/trees" element={<TreeServices />} />
    <Route path="/services/astro" element={<AstroTurfServices />} />
    <Route path="/services/groundworks" element={<GroundworksServices />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)