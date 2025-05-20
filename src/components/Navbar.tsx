"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useUIStore } from "@/store/uiStore"
import type { NavLinkItem } from "@/types"
import { Menu, X, Sun, Moon, LogIn, UserPlus, ChevronRight } from "lucide-react"
import logo from "../assets/logo.png"

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const darkMode = useUIStore((s) => s.darkMode)
  const toggleDark = useUIStore((s) => s.toggleDarkMode)

  // Track scroll position to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links: NavLinkItem[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/games", label: "Games" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400 }}>
            <img src={logo || "/placeholder.svg"} alt="RCL Logo" className="h-9 w-auto" />
          </motion.div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/80">
            RCL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${
                    isActive ? "text-primary" : "text-gray-700 dark:text-gray-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <button
                onClick={() => !darkMode && toggleDark()}
                className={`p-1.5 rounded-full ${!darkMode ? "bg-white text-amber-500 shadow-sm" : "text-gray-400"}`}
              >
                <Sun className="h-4 w-4" />
              </button>
              <button
                onClick={() => darkMode && toggleDark()}
                className={`p-1.5 rounded-full ${darkMode ? "bg-gray-700 text-blue-400 shadow-sm" : "text-gray-400"}`}
              >
                <Moon className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <NavLink to="/login">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button size="sm" className="gap-1.5">
                  <UserPlus className="h-4 w-4" />
                  <span>Get Started</span>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={logo || "/placeholder.svg"} alt="RCL Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold">RCL</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>
              </div>

              <div className="flex-1 overflow-auto py-4">
                <div className="flex flex-col space-y-1 px-2">
                  {links.map(({ to, label }) => (
                    <SheetClose asChild key={to}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-4 py-3 rounded-md text-base ${
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`
                        }
                      >
                        <span>{label}</span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </NavLink>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dark Mode</span>
                  <Switch id="dark-mode-toggle-mobile" checked={darkMode} onCheckedChange={toggleDark} />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <SheetClose asChild>
                    <NavLink to="/login" className="w-full">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink to="/register" className="w-full">
                      <Button className="w-full">Sign Up</Button>
                    </NavLink>
                  </SheetClose>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

export default NavBar
