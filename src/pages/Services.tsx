"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Gamepad2, Users, Megaphone, Wrench, CheckCircle2 } from "lucide-react"

// Define a type for the service object
interface ServiceItem {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  features: string[]
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: "game-development",
      title: "Game Development",
      icon: <Code className="h-5 w-5" />,
      description:
        "We create engaging, innovative games across multiple platforms using cutting-edge technology and creative storytelling.",
      features: [
        "Custom game development for PC, console, and mobile",
        "Unity and Unreal Engine expertise",
        "Full-cycle development from concept to launch",
        "Regular updates and maintenance",
      ],
    },
    {
      id: "game-design",
      title: "Game Design",
      icon: <Gamepad2 className="h-5 w-5" />,
      description:
        "Our expert designers craft immersive gameplay experiences with compelling mechanics, narratives, and visual aesthetics.",
      features: [
        "Character and world design",
        "Gameplay mechanics and systems",
        "Level design and progression",
        "UI/UX design for optimal player experience",
      ],
    },
    {
      id: "community",
      title: "Community Building",
      icon: <Users className="h-5 w-5" />,
      description:
        "We help you build and nurture an engaged player community around your games through various channels and events.",
      features: [
        "Community management across platforms",
        "Player feedback collection and implementation",
        "Regular events and competitions",
        "Discord and forum moderation",
      ],
    },
    {
      id: "support",
      title: "Continuing & Support",
      icon: <Wrench className="h-5 w-5" />,
      description:
        "Our dedicated support team ensures your games run smoothly with regular updates, bug fixes, and player assistance.",
      features: [
        "24/7 technical support",
        "Regular content updates",
        "Performance optimization",
        "Cross-platform compatibility maintenance",
      ],
    },
    {
      id: "marketing",
      title: "Game Marketing",
      icon: <Megaphone className="h-5 w-5" />,
      description:
        "We create tailored marketing strategies to maximize your game's visibility and player acquisition across all channels.",
      features: [
        "Launch strategy and execution",
        "Social media campaigns",
        "Influencer partnerships",
        "Analytics and performance tracking",
      ],
    },
  ]

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pt-16 pb-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive game development services to bring your vision to life, from concept to launch and
            beyond.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <div className="max-w-5xl mx-auto mb-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 h-auto p-1">
                <TabsTrigger
                  value="all"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="development"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Development
                </TabsTrigger>
                <TabsTrigger
                  value="design"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  value="community"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Community
                </TabsTrigger>
                <TabsTrigger
                  value="support"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Support
                </TabsTrigger>
                <TabsTrigger
                  value="marketing"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Marketing
                </TabsTrigger>
              </TabsList>
            </div>

            {/* All Services */}
            <TabsContent value="all">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {services.map((service) => (
                  <motion.div key={service.id} variants={item}>
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Individual Service Categories */}
            {["development", "design", "community", "support", "marketing"].map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {services
                    .filter((s) => {
                      if (category === "development") return s.id === "game-development"
                      if (category === "design") return s.id === "game-design"
                      if (category === "community") return s.id === "community"
                      if (category === "support") return s.id === "support"
                      if (category === "marketing") return s.id === "marketing"
                      return false
                    })
                    .map((service) => (
                      <motion.div key={service.id} variants={item} className="md:col-span-2">
                        <ServiceDetailCard service={service} />
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Gaming Project?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our team today to discuss how we can help bring your game idea to life.
          </p>
          <Link to = "/contact">
          <Button size="lg" className="gap-2">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

// Service Card Component
const ServiceCard = ({ service }: { service: ServiceItem }) => (
  <Card className="h-full overflow-hidden border transition-all hover:shadow-md hover:border-primary/20">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <div className="bg-primary/10 p-2 rounded-lg text-primary">{service.icon}</div>
        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
          Service
        </Badge>
      </div>
      <CardTitle className="mt-4">{service.title}</CardTitle>
      <CardDescription>{service.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {service.features.slice(0, 2).map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="link" className="p-0 h-auto mt-4 text-primary">
        Learn more <ArrowRight className="h-3.5 w-3.5 ml-1" />
      </Button>
    </CardContent>
  </Card>
)

// Service Detail Card Component
const ServiceDetailCard = ({ service }: { service: ServiceItem }) => (
  <Card className="overflow-hidden border">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-3 rounded-full text-primary">{service.icon}</div>
        <div>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription className="text-sm">Comprehensive solutions for your gaming needs</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="mb-4">{service.description}</p>
      <div className="bg-muted/30 rounded-lg p-4">
        <h4 className="font-medium mb-3">Key Features</h4>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
)

export default Services
