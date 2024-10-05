import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './components/ui/create-trip/index.jsx'
import Header from './components/ui/custom/Header.jsx'
import { Toaster } from '../src/ui/sonner.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripid]/index.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/create-trip',
    element: <CreateTrip />
  },
  {
    path: '/view-trip/:tripid',
    element: <Viewtrip/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_OUTH_ID}>
      <Header />
      <Toaster className='text-xl bg-red-500'/>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>;
  </StrictMode>,
)
