import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, FileText, BarChart3, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import FAQAccordion from "@/components/faq-accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Get More Interviews with AI-Optimized Resumes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    OptimoCV uses advanced AI to enhance your resume, boost your ATS score, and help you land more
                    interviews.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/upload">
                    <Button size="lg" className="gap-1">
                      Optimize My Resume <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Trusted by 10,000+ job seekers</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[350px] rounded-lg shadow-xl">
                  <Image
                    src="/placeholder.svg?height=900&width=700"
                    alt="Resume optimization preview"
                    fill
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How OptimoCV Transforms Your Resume</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our AI-powered platform analyzes and enhances every aspect of your resume to maximize your chances of
                  success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">ATS Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI analyzes job descriptions and optimizes your resume to pass through Applicant Tracking
                    Systems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">Score Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get detailed feedback and a numerical score showing how well your resume matches specific job
                    requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">Keyword Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatically identify and add missing keywords and skills that recruiters and ATS systems look for.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Three simple steps to transform your resume and boost your job search success.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mt-4 text-xl font-bold">Upload Your Resume</h3>
                <p className="mt-2 text-muted-foreground">Upload your existing resume in PDF, DOCX, or TXT format.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mt-4 text-xl font-bold">AI Analysis</h3>
                <p className="mt-2 text-muted-foreground">
                  Our AI analyzes your resume against job descriptions and industry standards.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mt-4 text-xl font-bold">Get Your Enhanced Resume</h3>
                <p className="mt-2 text-muted-foreground">
                  Download your optimized resume with improved content, formatting, and ATS compatibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">See the Difference</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Compare before and after examples of resumes transformed by OptimoCV.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <Tabs defaultValue="marketing" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="software">Software Dev</TabsTrigger>
                  <TabsTrigger value="finance">Finance</TabsTrigger>
                </TabsList>
                <TabsContent value="marketing" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Before Optimization</CardTitle>
                        <CardDescription>ATS Score: 45%</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[300px] overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=600&width=400"
                          alt="Before resume example"
                          width={400}
                          height={600}
                          className="rounded-md object-cover"
                        />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>After Optimization</CardTitle>
                        <CardDescription>ATS Score: 92%</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[300px] overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=600&width=400"
                          alt="After resume example"
                          width={400}
                          height={600}
                          className="rounded-md object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="software" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Before Optimization</CardTitle>
                        <CardDescription>ATS Score: 52%</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[300px] overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=600&width=400"
                          alt="Before resume example"
                          width={400}
                          height={600}
                          className="rounded-md object-cover"
                        />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>After Optimization</CardTitle>
                        <CardDescription>ATS Score: 95%</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[300px] overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=600&width=400"
                          alt="After resume example"
                          width={400}
                          height={600}
                          className="rounded-md object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="finance" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Before Optimization</CardTitle>
                        <CardDescription>ATS Score: 48%</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[300px] overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=600&width=400"
                          alt="Before resume example"
                          width={400}
                          height={600}
                          className="rounded-md object-cover"
                        />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>After Optimization</CardTitle>
                        <CardDescription>ATS Score: 89%</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[300px] overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=600&width=400"
                          alt="After resume example"
                          width={400}
                          height={600}
                          className="rounded-md object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from job seekers who have successfully landed interviews using OptimoCV.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="After optimizing my resume with OptimoCV, I received 3 interview calls in just one week. The AI suggestions were spot on!"
                author="Sarah J."
                role="Marketing Manager"
                rating={5}
              />
              <TestimonialCard
                quote="The keyword optimization feature helped me understand what recruiters were looking for. My application response rate increased by 70%."
                author="Michael T."
                role="Software Engineer"
                rating={5}
              />
              <TestimonialCard
                quote="As a career changer, I was struggling to get noticed. OptimoCV helped me highlight my transferable skills and I landed my dream job!"
                author="Jessica L."
                role="Data Analyst"
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that fits your job search needs.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <PricingCard
                title="Basic"
                price="$19"
                description="Perfect for a single job application"
                features={["1 Resume Optimization", "ATS Score Analysis", "Keyword Suggestions", "24-hour support"]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Pro"
                price="$49"
                description="Ideal for active job seekers"
                features={[
                  "5 Resume Optimizations",
                  "ATS Score Analysis",
                  "Keyword Suggestions",
                  "Content Improvement",
                  "Format Enhancement",
                  "Priority support",
                ]}
                buttonText="Get Started"
                buttonVariant="default"
                popular={true}
              />
              <PricingCard
                title="Premium"
                price="$99"
                description="Complete job search solution"
                features={[
                  "Unlimited Resume Optimizations",
                  "ATS Score Analysis",
                  "Keyword Suggestions",
                  "Content Improvement",
                  "Format Enhancement",
                  "Cover Letter Assistance",
                  "LinkedIn Profile Review",
                  "24/7 priority support",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about OptimoCV.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Land More Interviews?</h2>
                <p className="max-w-[700px] md:text-xl">
                  Join thousands of job seekers who have boosted their career opportunities with OptimoCV.
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

