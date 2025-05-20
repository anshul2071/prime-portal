// src/routes/AppRoutes.tsx
import React from 'react'
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

import Home         from '../pages/Home'
import About        from '../pages/About'
import Services     from '../pages/Services'
import Contact      from '../pages/Contact'
import GamesPage    from '../pages/Gamepage'
import CareersPage  from '../pages/CareerPage'
import LoginPage    from '../pages/Auth'
import AdminPanel   from '../pages/AdminPanel'

const RequireAuth: React.FC = () => {
  const token = useAuthStore((s) => s.token)
  const location = useLocation()
  return token
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />
}

const RedirectIfAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAuthStore((s) => s.token)
  return token
    ? <Navigate to="/admin" replace />
    : <>{children}</>
}

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="contact" element={<Contact />} />
    <Route path="games" element={<GamesPage />} />
    <Route path="careers" element={<CareersPage />} />

    <Route
      path="login"
      element={
        <RedirectIfAuth>
          <LoginPage />
        </RedirectIfAuth>
      }
    />

    <Route element={<RequireAuth />}>
      <Route path="admin" element={<AdminPanel />} />
    </Route>

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default AppRoutes
