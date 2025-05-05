import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './index.jsx'
import Navbar from './components/navbar/navbar.jsx'
import ContactForm from './contact/contactForm.jsx'
import Footer from './components/footer/footer.jsx'
import Routes from './routes.jsx'

const queryClient = new QueryClient({})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <>
      <Navbar />
      <div className="body">
        <Routes />
      </div>
      <Footer />
    </>
    </BrowserRouter>
  </QueryClientProvider>
)

export default App