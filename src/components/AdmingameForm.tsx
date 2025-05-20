"use client"

import type React from "react"

import { useState } from "react"
import type { FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Loader2, CheckCircle2, GamepadIcon } from "lucide-react"
import { postGame } from "@/services/gamesClient" // Assuming this service exists
import type { NewGameInput } from "@/types" // Assuming this type exists

export interface GameFormValues extends NewGameInput {
  isEditing?: boolean
}

const GameForm: React.FC = () => {
  const [form, setForm] = useState<GameFormValues>({
    title: "",
    description: "",
    genre: "",
    platform: "",
    releaseDate: "",
    link: "",
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = <K extends keyof GameFormValues>(key: K, value: GameFormValues[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (success) setSuccess(false)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      await postGame(form)
      setForm({ title: "", description: "", genre: "", platform: "", releaseDate: "", link: "" })
      setSuccess(true)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const genres = [
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Simulation",
    "Sports",
    "Puzzle",
    "Racing",
    "Fighting",
    "Shooter",
  ]

  const platforms = [
    "PC",
    "PlayStation 5",
    "Xbox Series X/S",
    "Nintendo Switch",
    "Mobile",
    "VR",
    "Web",
    "Multiple Platforms",
  ]

  type FormField =
    | { key: "title"; label: string; types: "text"; placeholder: string }
    | { key: "description"; label: string; types: "textarea"; placeholder: string }
    | { key: "genre"; label: string; types: "select"; options: string[] }
    | { key: "platform"; label: string; types: "select"; options: string[] }
    | { key: "releaseDate"; label: string; types: "date" }
    | { key: "link"; label: string; types: "url"; placeholder: string }

  const formFields: FormField[] = [
    { key: "title", label: "Game Title", types: "text", placeholder: "e.g. Epic Adventure Quest" },
    {
      key: "description",
      label: "Description",
      types: "textarea",
      placeholder: "Describe the game, its features, gameplay, and story...",
    },
    { key: "genre", label: "Genre", types: "select", options: genres },
    { key: "platform", label: "Platform", types: "select", options: platforms },
    { key: "releaseDate", label: "Release Date", types: "date" },
    { key: "link", label: "Game Link", types: "url", placeholder: "https://game.example.com" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="border shadow-lg">
        <CardHeader className="space-y-1 pb-4">
          <div className="flex justify-center mb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <GamepadIcon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Post a New Game</CardTitle>
          <p className="text-muted-foreground text-center text-sm">
            Fill out the form below to create a new game listing
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formFields.map((field) => (
              <div key={field.key} className="space-y-2">
                <Label htmlFor={field.key} className="text-sm font-medium">
                  {field.label}
                </Label>
                {field.types === "textarea" ? (
                  <Textarea
                    id={field.key}
                    value={form[field.key as "description"]}
                    onChange={(e) => handleChange(field.key as "description", e.target.value)}
                    required
                    placeholder={field.placeholder}
                    className="min-h-32 resize-y transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                ) : field.types === "select" ? (
                  <Select
                    value={form[field.key as "genre" | "platform"]}
                    onValueChange={(value) => handleChange(field.key as "genre" | "platform", value)}
                  >
                    <SelectTrigger id={field.key} className="w-full">
                      <SelectValue placeholder={`Select ${field.label}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    id={field.key}
                    type={field.types}
                    value={form[field.key as "title" | "releaseDate" | "link"]}
                    onChange={(e) => handleChange(field.key as "title" | "releaseDate" | "link", e.target.value)}
                    required
                    placeholder={"placeholder" in field ? field.placeholder : undefined}
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
              <span>Game posted successfully!</span>
            </motion.div>
          )}

          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full h-11 text-base font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Posting Game...
              </span>
            ) : (
              "Post Game"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default GameForm
