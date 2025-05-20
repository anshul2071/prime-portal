"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gamepad2, Trophy, Users, Star } from "lucide-react"
import heroImage from "../assets/Hero.jpg"

const Home: React.FC = () => {
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

  const features = [
    {
      icon: <Gamepad2 className="h-5 w-5" />,
      title: "Immersive Gameplay",
      description: "Dive into rich, engaging worlds with intuitive controls and stunning visuals",
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Competitive Challenges",
      description: "Test your skills against players worldwide with our balanced ranking systems",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Vibrant Community",
      description: "Join thousands of players in our active, supportive gaming community",
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Regular Updates",
      description: "Enjoy fresh content, features and improvements with our consistent update schedule",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Animated gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Welcome to{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-500 to-indigo-500">
                    Rawal Company Limited
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl text-slate-300 mb-8 leading-relaxed"
              >
                Dive into next-gen gaming experiences—crafted for thrill, adventure, and endless fun. Join us on the
                cutting edge of interactive storytelling.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/games">
                  <Button
                    size="lg"
                    className="h-12 px-6 text-base gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20"
                  >
                    Explore Games
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-6 text-base border-slate-700 text-slate-700 hover:bg-slate-800 hover:text-white"
                  >
                    Join Our Team
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl transform rotate-3 scale-105 blur-sm" />
              <img
                src={heroImage || "/placeholder.svg"}
                alt="Gaming illustration"
                className="relative z-10 w-full h-auto rounded-3xl object-cover shadow-2xl border border-slate-700/50"
              />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Award Winning</div>
                    <div className="font-medium">Game Studio</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-5 right-10 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-indigo-500/20 p-2 rounded-full">
                    <Users className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Active Players</div>
                    <div className="font-medium">10M+</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-slate-400 mb-2">Scroll to explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-400"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Players Choose Our Games</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create games that captivate, challenge, and connect players around the world
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Gaming Adventure?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join millions of players worldwide and experience our award-winning games today.
            </p>
            <Link to="/games">
              <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
