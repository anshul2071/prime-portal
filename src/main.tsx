/* eslint-disable react-refresh/only-export-components */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { useUIStore } from './store/uiStore'

const ThemedApp = () => {
  const darkMode = useUIStore((state) => state.darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>
)
