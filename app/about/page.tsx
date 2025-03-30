import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About OptimoCV</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to help job seekers land more interviews through AI-powered resume optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Founder portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Founder's Story</h2>
                  <p className="text-muted-foreground">
                    After spending years in HR and recruitment, I noticed a concerning pattern: highly qualified
                    candidates were being filtered out by ATS systems before human recruiters ever saw their resumes.
                  </p>
                  <p className="text-muted-foreground">
                    I founded OptimoCV to solve this problem. By leveraging AI technology, we've created a platform that
                    helps job seekers optimize their resumes to pass through ATS filters while highlighting their most
                    relevant skills and experiences.
                  </p>
                  <p className="text-muted-foreground">
                    Our mission is to level the playing field in the job market, ensuring that qualified candidates get
                    the opportunity to showcase their talents in interviews rather than being eliminated by automated
                    systems.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-bold">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  The principles that guide everything we do at OptimoCV
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Excellence</h3>
                <p className="mt-2 text-muted-foreground">
                  We're committed to providing the highest quality resume optimization services, constantly improving
                  our AI algorithms to deliver the best results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Empowerment</h3>
                <p className="mt-2 text-muted-foreground">
                  We believe in empowering job seekers with the tools and knowledge they need to succeed in their career
                  journey.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Innovation</h3>
                <p className="mt-2 text-muted-foreground">
                  We continuously innovate and leverage the latest AI technologies to stay ahead of evolving ATS systems
                  and recruitment practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Impact</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  The difference we're making in the job market
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-primary">10,000+</div>
                <p className="mt-2 text-muted-foreground">Job seekers helped</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-primary">75%</div>
                <p className="mt-2 text-muted-foreground">Average increase in interview rate</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-primary">85%</div>
                <p className="mt-2 text-muted-foreground">Average ATS score improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Join Thousands of Successful Job Seekers
                </h2>
                <p className="max-w-[700px] md:text-xl">
                  Let us help you optimize your resume and land your dream job.
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

