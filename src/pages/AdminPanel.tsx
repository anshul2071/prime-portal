"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  LayoutDashboard,
  Users,
  Gamepad2,
  Briefcase,
  Settings,
  LogOut,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Bell,
  User,
} from "lucide-react"

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Sample data for dashboard
  const stats = [
    { title: "Total Games", value: "24", change: "+2", icon: <Gamepad2 className="h-5 w-5" /> },
    { title: "Active Users", value: "12.5K", change: "+18%", icon: <Users className="h-5 w-5" /> },
    { title: "Open Positions", value: "8", change: "+3", icon: <Briefcase className="h-5 w-5" /> },
    {
      title: "Revenue",
      value: "$125K",
      change: "+12%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-dollar-sign"
        >
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
  ]

  // Sample data for games
  const games = [
    { id: 1, title: "Quantum Shift", genre: "Action RPG", platform: "PC, Console", status: "Live" },
    { id: 2, title: "Stellar Odyssey", genre: "Space Sim", platform: "PC", status: "Beta" },
    { id: 3, title: "Neon Warriors", genre: "Fighting", platform: "Mobile, Console", status: "Development" },
    { id: 4, title: "Mystic Realms", genre: "MMORPG", platform: "PC", status: "Live" },
    { id: 5, title: "Speed Demons", genre: "Racing", platform: "All Platforms", status: "Live" },
  ]

  // Sample data for jobs
  const jobs = [
    { id: 1, title: "Senior Game Developer", location: "Remote", applicants: 24 },
    { id: 2, title: "3D Artist", location: "New York, NY", applicants: 18 },
    { id: 3, title: "UI/UX Designer", location: "Remote", applicants: 32 },
    { id: 4, title: "Community Manager", location: "London, UK", applicants: 15 },
  ]

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800">
          <div className="p-6">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Admin Portal
            </h2>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
              { id: "games", label: "Games", icon: <Gamepad2 className="h-5 w-5" /> },
              { id: "jobs", label: "Jobs", icon: <Briefcase className="h-5 w-5" /> },
              { id: "users", label: "Users", icon: <Users className="h-5 w-5" /> },
              { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-3 py-2 rounded-md transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <Button variant="outline" className="w-full justify-start text-muted-foreground" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "games" && "Games Management"}
                {activeTab === "jobs" && "Jobs Management"}
                {activeTab === "users" && "User Management"}
                {activeTab === "settings" && "Settings"}
              </h1>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="mt-0">
                <motion.div variants={fadeIn} initial="initial" animate="animate" className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                            </div>
                            <div className="bg-primary/10 p-2 rounded-full text-primary">{stat.icon}</div>
                          </div>
                          <div className="mt-4">
                            <span
                              className={`text-xs font-medium ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                            >
                              {stat.change} since last month
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest actions and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { action: "New game added", details: "Quantum Shift", time: "2 hours ago" },
                          { action: "Job posting updated", details: "Senior Game Developer", time: "5 hours ago" },
                          { action: "New user registered", details: "john.doe@example.com", time: "1 day ago" },
                          { action: "Game update deployed", details: "Stellar Odyssey v1.2", time: "2 days ago" },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-activity"
                              >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{activity.action}</p>
                              <p className="text-sm text-muted-foreground">{activity.details}</p>
                            </div>
                            <div className="text-xs text-muted-foreground">{activity.time}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Games Tab */}
              <TabsContent value="games" className="mt-0">
                <motion.div variants={fadeIn} initial="initial" animate="animate" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search games..." className="pl-10" />
                    </div>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Add Game
                    </Button>
                  </div>

                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Genre</TableHead>
                            <TableHead>Platform</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {games.map((game) => (
                            <TableRow key={game.id}>
                              <TableCell className="font-medium">{game.title}</TableCell>
                              <TableCell>{game.genre}</TableCell>
                              <TableCell>{game.platform}</TableCell>
                              <TableCell>
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    game.status === "Live"
                                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                      : game.status === "Beta"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                                        : "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400"
                                  }`}
                                >
                                  {game.status}
                                </span>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem className="flex items-center gap-2">
                                      <Edit className="h-4 w-4" />
                                      Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                                      <Trash2 className="h-4 w-4" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Jobs Tab */}
              <TabsContent value="jobs" className="mt-0">
                <motion.div variants={fadeIn} initial="initial" animate="animate" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search jobs..." className="pl-10" />
                    </div>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Post Job
                    </Button>
                  </div>

                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Applicants</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {jobs.map((job) => (
                            <TableRow key={job.id}>
                              <TableCell className="font-medium">{job.title}</TableCell>
                              <TableCell>{job.location}</TableCell>
                              <TableCell>{job.applicants}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem className="flex items-center gap-2">
                                      <Edit className="h-4 w-4" />
                                      Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-2">
                                      <Users className="h-4 w-4" />
                                      View Applicants
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                                      <Trash2 className="h-4 w-4" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Other tabs would be implemented similarly */}
              <TabsContent value="users">
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium">User Management</h3>
                  <p className="text-muted-foreground">User management interface would be implemented here.</p>
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium">Settings</h3>
                  <p className="text-muted-foreground">Settings interface would be implemented here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminPanel
