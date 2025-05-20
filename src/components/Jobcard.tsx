"use client"

import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import type React from "react"
import type { Job } from "@/types"

export interface JobCardProps {
  job: Job
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  // Format description to show only first 150 characters with ellipsis
  const truncatedDescription =
    job.description.length > 150 ? `${job.description.substring(0, 150)}...` : job.description

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border shadow-sm hover:shadow-md transition-all duration-200">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <div className="space-y-1.5">
              <h3 className="font-bold text-xl leading-tight">{job.title}</h3>
              <div className="flex items-center text-muted-foreground gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-sm">{job.location}</span>
              </div>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              New
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-grow py-4">
          <p className="text-muted-foreground text-sm leading-relaxed">{truncatedDescription}</p>
        </CardContent>

        <CardFooter className="pt-2 flex flex-col items-stretch gap-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>Posted 2 days ago</span>
            </div>
          </div>

          <Button asChild variant="default" className="w-full gap-1.5 group">
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default JobCard
