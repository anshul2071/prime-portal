"use client"

import type React from "react"

import { useState } from "react"
import type { FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Loader2, CheckCircle2 } from "lucide-react"
import { postJob } from "@/services/careersClient"
import type { NewJobInput } from "@/types"

export interface AdminJobFormValues extends NewJobInput {
  isEditing?: boolean
}

const AdminJobForm: React.FC = () => {
  const [form, setForm] = useState<AdminJobFormValues>({
    title: "",
    location: "",
    description: "",
    applyLink: "",
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = <K extends keyof AdminJobFormValues>(key: K, value: AdminJobFormValues[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (success) setSuccess(false)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      await postJob(form)
      setForm({ title: "", location: "", description: "", applyLink: "" })
      setSuccess(true)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const formFields = [
    { key: "title", label: "Job Title", types: "text", placeholder: "e.g. Senior Frontend Developer" },
    { key: "location", label: "Location", types: "text", placeholder: "e.g. Remote, New York, NY" },
    {
      key: "description",
      label: "Description",
      types: "textarea",
      placeholder: "Describe the job role, responsibilities, and requirements...",
    },
    { key: "applyLink", label: "Apply Link", types: "url", placeholder: "https://careers.example.com/apply" },
  ] as const

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="border shadow-lg">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl font-bold text-center">Post a New Job</CardTitle>
          <p className="text-muted-foreground text-center text-sm">
            Fill out the form below to create a new job listing
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formFields.map(({ key, label, types, placeholder }) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={key} className="text-sm font-medium">
                  {label}
                </Label>
                {types === "textarea" ? (
                  <Textarea
                    id={key}
                    value={form[key]}
                    onChange={(e) => handleChange(key, e.target.value as string)}
                    required
                    placeholder={placeholder}
                    className="min-h-32 resize-y transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                ) : (
                  <Input
                    id={key}
                    type={types}
                    value={form[key]}
                    onChange={(e) => handleChange(key, e.target.value as string)}
                    required
                    placeholder={placeholder}
                    className="transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                )}
              </div>
            ))}
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="w-full p-3 rounded-md bg-destructive/10 text-destructive text-sm"
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="w-full p-3 rounded-md bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-sm flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Job posted successfully!</span>
            </motion.div>
          )}

          <Button type="submit" onClick={handleSubmit} disabled={loading} className="w-full h-11 text-base font-medium">
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Posting Job...
              </span>
            ) : (
              "Post Job"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default AdminJobForm
