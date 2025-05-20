"use client"
import { Link } from "react-router-dom"
import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Users, Trophy, Calendar, Target, Lightbulb } from "lucide-react"

const About: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Gaming industry veteran with over 15 years of experience in AAA game development.",
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning designer who has worked on multiple critically acclaimed titles.",
    },
    {
      name: "Marcus Williams",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer with expertise in game engines and multiplayer systems.",
    },
    {
      name: "Priya Sharma",
      role: "Art Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Digital artist with a passion for creating immersive visual experiences.",
    },
  ]

  // Company milestones
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Rawal Company Limited was established with a vision to create innovative gaming experiences.",
    },
    {
      year: "2019",
      title: "First Game Release",
      description: "Launched our debut title 'Quantum Shift' which received critical acclaim.",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 25 talented developers, artists, and designers.",
    },
    {
      year: "2021",
      title: "Industry Award",
      description: "Won 'Best Indie Developer' at the Global Gaming Awards.",
    },
    {
      year: "2022",
      title: "10 Million Players",
      description: "Reached the milestone of 10 million active players across all our games.",
    },
    {
      year: "2023",
      title: "New Studio",
      description: "Opened our new headquarters with state-of-the-art development facilities.",
    },
  ]

  // Company values
  const values = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new ideas to create unique gaming experiences.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community",
      description: "We value our player community and actively incorporate their feedback into our games.",
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our game development process.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Integrity",
      description: "We maintain the highest standards of integrity in all our business practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pt-16 pb-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate gamers and developers dedicated to creating immersive gaming experiences that
            captivate players around the world.
          </p>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="company" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 h-auto p-1">
              <TabsTrigger
                value="company"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Our Company
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Our Team
              </TabsTrigger>
              <TabsTrigger
                value="journey"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Our Journey
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Company Tab */}
          <TabsContent value="company">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-12">
              {/* Company Overview */}
              <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2018, Rawal Company Limited began with a simple mission: to create games that we
                    ourselves would love to play. What started as a small team of four passionate developers has grown
                    into a thriving studio with a diverse portfolio of games across multiple platforms.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We believe that great games come from creative freedom, technical excellence, and a deep
                    understanding of what makes gameplay truly engaging. Our team combines industry veterans with fresh
                    talent to create experiences that push boundaries while remaining accessible and fun.
                  </p>
                  <Button className="gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our studio"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* Company Values */}
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-12">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
                <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                  Our diverse team of talented individuals brings together expertise from across the gaming industry to
                  create exceptional experiences for players worldwide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-white text-sm">{member.bio}</p>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Journey Tab */}
          <TabsContent value="journey">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-12">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
                <div className="relative border-l-2 border-primary/30 ml-4 md:mx-auto md:max-w-3xl pl-8 space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-primary/30 bg-primary flex items-center justify-center">
                        <Calendar className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-card rounded-lg p-6 shadow-sm border">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
       <motion.div
  variants={fadeIn}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className="mt-20 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center max-w-3xl mx-auto"
>
  <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
  <p className="text-muted-foreground mb-6">
    We're always looking for talented individuals who are passionate about creating amazing games.
  </p>
  <Link to="/careers">
    <Button size="lg" className="gap-2">
      View Careers <ArrowRight className="h-4 w-4" />
    </Button>
  </Link>
</motion.div>
      </div>
    </div>
  )
}

export default About
