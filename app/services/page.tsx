import Link from "next/link"
import { ArrowRight, CheckCircle, FileCheck, PenTool, LayoutTemplate } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive AI-powered resume optimization services to help you stand out in the job market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <FileCheck className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">ATS Optimization</CardTitle>
                  <CardDescription>Ensure your resume passes through Applicant Tracking Systems</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Keyword analysis and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Format compatibility with all major ATS systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Detailed ATS score analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Job-specific keyword recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <PenTool className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">Content Enhancement</CardTitle>
                  <CardDescription>Improve the quality and impact of your resume content</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Achievement-focused bullet points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Action verb optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Quantifiable results enhancement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Professional summary crafting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <LayoutTemplate className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">Format Optimization</CardTitle>
                  <CardDescription>Create a visually appealing and professional resume</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Clean, modern formatting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Proper section organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Consistent styling and typography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Optimal use of white space</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Process</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  How our AI technology transforms your resume in minutes
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mt-4 text-xl font-bold">Upload</h3>
                <p className="mt-2 text-muted-foreground">Upload your existing resume and job description</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mt-4 text-xl font-bold">Analyze</h3>
                <p className="mt-2 text-muted-foreground">Our AI analyzes your content against job requirements</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mt-4 text-xl font-bold">Optimize</h3>
                <p className="mt-2 text-muted-foreground">We enhance content, format, and ATS compatibility</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="mt-4 text-xl font-bold">Deliver</h3>
                <p className="mt-2 text-muted-foreground">Receive your optimized resume ready for submission</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Additional Services</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive career support beyond resume optimization
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cover Letter Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI creates personalized cover letters that complement your resume and address specific job
                    requirements. Each cover letter is tailored to highlight your most relevant qualifications.
                  </p>
                  <div className="mt-6">
                    <Link href="/pricing">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>LinkedIn Profile Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enhance your LinkedIn profile to attract recruiters and hiring managers. Our service includes
                    headline optimization, summary writing, and keyword enhancement for better searchability.
                  </p>
                  <div className="mt-6">
                    <Link href="/pricing">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Resume?</h2>
                <p className="max-w-[700px] md:text-xl">
                  Get started today and increase your chances of landing your dream job.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/upload">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Optimize My Resume <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

