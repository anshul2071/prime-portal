import React from 'react'
import NavBar from './components/Navbar'
import AppRoutes from './routes/index'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <NavBar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
