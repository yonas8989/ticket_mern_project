import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Dashboard } from './component/Dashboard'
import Login from './component/Login'
import LandingPageStudio from './component/LandingPageStudio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPageStudio/>
  </StrictMode>,
)
