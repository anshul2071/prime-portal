"use client"

import React from "react"
import useJobs, { type UseJobsResult } from "@/hooks/useJobs"
import JobCard from "@/components/Jobcard"
import { motion } from "framer-motion"
import { Briefcase, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

const CareerPage: React.FC = () => {
  const { jobs, loading, error }: UseJobsResult = useJobs()
  const [searchTerm, setSearchTerm] = React.useState("")

  // Filter jobs based on search term
  const filteredJobs = React.useMemo(() => {
    if (!searchTerm.trim()) return jobs
    const term = searchTerm.toLowerCase()
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term) ||
        job.description.toLowerCase().includes(term),
    )
  }, [jobs, searchTerm])

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
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Join Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting career opportunities and be part of our innovative team creating the next generation of
            gaming experiences.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title, location, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-full border-muted bg-white dark:bg-slate-800 shadow-sm"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 rounded-full"
                onClick={() => setSearchTerm("")}
              >
                ×
              </Button>
            )}
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm border">
                <div className="space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-24 w-full" />
                  <div className="flex justify-end">
                    <Skeleton className="h-10 w-28" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-6 max-w-md mx-auto text-center"
          >
            <h3 className="font-semibold text-lg mb-2">Unable to load jobs</h3>
            <p>{error}</p>
            <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </motion.div>
        )}

        {/* Results Count */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex justify-between items-center"
          >
            <Badge variant="outline" className="text-sm font-normal py-1.5">
              {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} available
            </Badge>
            {searchTerm && (
              <p className="text-sm text-muted-foreground">
                Showing results for <span className="font-medium">"{searchTerm}"</span>
              </p>
            )}
          </motion.div>
        )}

        {/* Job Cards Grid */}
        {!loading && !error && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div key={job._id} variants={item}>
                  <JobCard job={job} />
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-2 text-center py-12">
                <div className="bg-muted/50 rounded-lg p-8 max-w-md mx-auto">
                  <h3 className="text-xl font-medium mb-2">No matching positions found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or check back later for new opportunities.
                  </p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CareerPage
