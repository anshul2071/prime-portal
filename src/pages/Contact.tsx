"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Mail, MessageSquare, User, Send, Loader2, MapPin, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

interface ContactForm {
  name: string
  email: string
  message: string
}

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>("contact")

  const handleChange = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setLoading(false)
    // Reset form after submission
    setForm({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      title: "Email",
      value: "rawalcompany@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      title: "Phone",
      value: "+977 9840-176844",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      title: "Address",
      value: "Lalitpur, Nepal",
      icon: <MapPin className="h-5 w-5" />,
    },
  ]

  const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your Name", icon: <User className="h-4 w-4" /> },
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com", icon: <Mail className="h-4 w-4" /> },
  ]

  const socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      url: "https://twitter.com/rawalcompany",
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
          className="lucide lucide-twitter"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://facebook.com/rawalcompany",
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
          className="lucide lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rawalcompany/?hl=en",
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
          className="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/rawal-company-limited/?viewAsMember=true",
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
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pt-16 pb-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-br from-primary/5 to-primary/10 -z-10"></div>
      <div className="absolute top-[30vh] right-[10vw] w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute top-[60vh] left-[5vw] w-[250px] h-[250px] rounded-full bg-primary/5 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to our team using the form below.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/20 to-primary/10"></div>
                <CardHeader className="relative z-10 pt-8">
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}

                  <Separator className="my-6" />

                  <div>
                    <h3 className="font-medium mb-4">Follow Us</h3>
                    <div className="flex space-x-3">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={link.name}
                          title={`Visit our ${link.name} page`}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="relative z-10">
                  <div className="w-full p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Our support team is available Monday through Friday, 9am to 5pm EST.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                  <CardHeader className="pb-2">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger
                        value="contact"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Us
                      </TabsTrigger>
                      <TabsTrigger
                        value="support"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
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
                          className="lucide lucide-help-circle mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        Support
                      </TabsTrigger>
                    </TabsList>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <TabsContent value="contact" className="mt-0 space-y-4">
                      {submitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-8"
                        >
                          <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Thank you for reaching out. We'll get back to you as soon as possible.
                          </p>
                          <Button variant="outline" onClick={() => setSubmitted(false)} size="lg">
                            Send Another Message
                          </Button>
                        </motion.div>
                      ) : (
                        <form onSubmit={onSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {formFields.map((field, index) => (
                              <motion.div
                                key={field.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="space-y-2"
                              >
                                <Label htmlFor={field.id} className="text-sm font-medium">
                                  {field.label}
                                </Label>
                                <div className="relative">
                                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                                    {field.icon}
                                  </div>
                                  <Input
                                    id={field.id}
                                    type={field.type}
                                    value={form[field.id as keyof ContactForm]}
                                    onChange={(e) => handleChange(field.id as keyof ContactForm, e.target.value)}
                                    placeholder={field.placeholder}
                                    required
                                    className="pl-10 h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-2"
                          >
                            <Label htmlFor="message" className="text-sm font-medium">
                              Message
                            </Label>
                            <div className="relative">
                              <div className="absolute left-3 top-3 text-muted-foreground">
                                <MessageSquare className="h-4 w-4" />
                              </div>
                              <Textarea
                                id="message"
                                value={form.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                placeholder="How can we help you?"
                                required
                                className="min-h-40 pl-10 resize-y bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <Button
                              type="submit"
                              className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-200"
                              disabled={loading}
                            >
                              {loading ? (
                                <span className="flex items-center gap-2">
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  Sending...
                                </span>
                              ) : (
                                <span className="flex items-center gap-2">
                                  <Send className="h-4 w-4" />
                                  Send Message
                                </span>
                              )}
                            </Button>
                          </motion.div>
                        </form>
                      )}
                    </TabsContent>

                    <TabsContent value="support" className="mt-0">
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800"
                        >
                          <h3 className="font-medium text-lg mb-4">Frequently Asked Questions</h3>
                          <div className="space-y-4">
                            {[
                              {
                                question: "How do I reset my password?",
                                answer:
                                  "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email.",
                              },
                              {
                                question: "Where can I download your games?",
                                answer:
                                  "Our games are available on major platforms including Steam, Epic Games Store, and our official website.",
                              },
                              {
                                question: "Do you offer refunds?",
                                answer:
                                  "Yes, we offer refunds within 14 days of purchase if you've played less than 2 hours, in accordance with platform policies.",
                              },
                              {
                                question: "How do I report a bug?",
                                answer:
                                  "You can report bugs through our support portal or by emailing support@rcl-games.com with details about the issue.",
                              },
                            ].map((faq, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                              >
                                <h4 className="font-medium text-primary mb-2">{faq.question}</h4>
                                <p className="text-sm text-muted-foreground">{faq.answer}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <h3 className="font-medium text-lg mb-3">Technical Support</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            For technical issues or game-specific support, please email our dedicated support team:
                          </p>
                          <div className="flex items-center gap-3 bg-primary/10 p-4 rounded-lg border border-primary/20">
                            <div className="bg-white dark:bg-slate-800 p-2 rounded-full">
                              <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <a
                                href="mailto:rawalcompany@gmail.com"
                                className="font-medium block hover:text-primary transition-colors"
                              >
                                rawalcompany@gmail.com
                              </a>
                              <span className="text-xs text-muted-foreground">24/7 Support Available</span>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="pt-4"
                        >
                          <Button
                            onClick={() => setActiveTab("contact")}
                            className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-200"
                          >
                            Contact Support Team
                          </Button>
                        </motion.div>
                      </div>
                    </TabsContent>
                  </CardContent>
                </Tabs>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800"
        >
          <div className="aspect-[16/5] bg-slate-200 dark:bg-slate-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-medium">Our Location</h3>
                <p className="text-sm text-muted-foreground">Lalitpur, Nepal</p>
              </div>
            </div>
            {/* This would be replaced with an actual map component in production */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 opacity-75"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
