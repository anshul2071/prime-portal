"use client"

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, GamepadIcon } from "lucide-react"
import type React from "react"
import type { Game } from "@/types"

export interface GameCardProps {
  game: Game
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  // Format description to show only first 120 characters with ellipsis
  const truncatedDescription =
    game.description.length > 120 ? `${game.description.substring(0, 120)}...` : game.description

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border shadow-md">
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-primary text-primary-foreground">Game</Badge>
        </div>

        <div className="relative h-48 bg-gradient-to-br from-violet-500 to-indigo-700 flex items-center justify-center">
          <GamepadIcon className="h-16 w-16 text-white/80" />
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-xl">{game.title}</h3>
          </div>
        </CardHeader>

        <CardContent className="flex-grow py-3">
          <p className="text-muted-foreground text-sm leading-relaxed">{truncatedDescription}</p>
        </CardContent>

        <CardFooter className="pt-2">
          <Button
            asChild
            variant="outline"
            className="w-full gap-1.5 group hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <a href={game.link} target="_blank" rel="noopener noreferrer">
              Learn More
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default GameCard
