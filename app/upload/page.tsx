"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileUp, FileText, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setIsProcessing(true)

      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false)
        setIsComplete(true)
      }, 3000)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container max-w-5xl px-4 py-12 md:px-6 md:py-24">
          <Link
            href="/"
            className="mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12 space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Optimize Your Resume</h1>
            <p className="text-muted-foreground">
              Upload your resume and let our AI enhance it to increase your chances of landing interviews.
            </p>
          </div>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Resume</TabsTrigger>
              <TabsTrigger value="job">Job Description</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Your Resume</CardTitle>
                  <CardDescription>Upload your existing resume in PDF, DOCX, or TXT format.</CardDescription>
                </CardHeader>
                <CardContent>
                  {!isComplete ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="resume">Resume File</Label>
                          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-10">
                            <FileUp className="h-10 w-10 text-muted-foreground" />
                            <div className="space-y-2 text-center">
                              <p className="text-sm font-medium">Drag and drop your resume here</p>
                              <p className="text-xs text-muted-foreground">
                                Supports PDF, DOCX, and TXT files up to 5MB
                              </p>
                            </div>
                            <Input
                              id="resume"
                              type="file"
                              className="hidden"
                              accept=".pdf,.docx,.txt"
                              onChange={handleFileChange}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("resume")?.click()}
                            >
                              Select File
                            </Button>
                          </div>
                          {file && (
                            <div className="mt-2 flex items-center gap-2 text-sm">
                              <FileText className="h-4 w-4 text-primary" />
                              <span>{file.name}</span>
                            </div>
                          )}
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email" required />
                          <p className="text-xs text-muted-foreground">
                            We'll send your optimized resume to this email address.
                          </p>
                        </div>
                        <Button type="submit" disabled={!file || isUploading || isProcessing}>
                          {isUploading ? "Uploading..." : isProcessing ? "Processing..." : "Optimize Resume"}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Resume Optimized!</h3>
                      <p className="max-w-md text-muted-foreground">
                        Your resume has been successfully optimized. We've sent the enhanced version to your email
                        address.
                      </p>
                      <div className="mt-4 flex gap-4">
                        <Button>Download Optimized Resume</Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setFile(null)
                            setIsComplete(false)
                          }}
                        >
                          Optimize Another Resume
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <p className="text-xs text-muted-foreground">
                    By uploading your resume, you agree to our{" "}
                    <Link href="/terms" className="underline underline-offset-2">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline underline-offset-2">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="job" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add Job Description</CardTitle>
                  <CardDescription>For better results, paste the job description you're applying for.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" placeholder="e.g., Marketing Manager" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="job-description">Job Description</Label>
                      <Textarea
                        id="job-description"
                        placeholder="Paste the full job description here..."
                        className="min-h-[200px]"
                      />
                    </div>
                    <Button type="button">Save Job Description</Button>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <p className="text-xs text-muted-foreground">
                    Adding a job description helps our AI tailor your resume specifically for this position, increasing
                    your match rate.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

