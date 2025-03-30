import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingCard from "@/components/pricing-card"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that fits your job search needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
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

        {/* Features Comparison */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Compare Features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Detailed comparison of what's included in each plan
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-5xl overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-medium">Feature</th>
                    <th className="p-4 text-center font-medium">Basic</th>
                    <th className="p-4 text-center font-medium">Pro</th>
                    <th className="p-4 text-center font-medium">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Resume Optimizations</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">5</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">ATS Score Analysis</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Keyword Suggestions</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Content Improvement</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Format Enhancement</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Cover Letter Assistance</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">LinkedIn Profile Review</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Priority Support</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  Common questions about our pricing and plans
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-3xl space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I upgrade my plan later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade your plan at any time. When you upgrade, you'll only pay the difference between
                  your current plan and the new one.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How long do I have access to the service?</h3>
                <p className="text-muted-foreground">
                  Basic and Pro plans provide access for 30 days from purchase. The Premium plan gives you access for 90
                  days, allowing for a more comprehensive job search.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service. Simply contact
                  our support team, and we'll process your refund.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What counts as one resume optimization?</h3>
                <p className="text-muted-foreground">
                  One optimization includes the initial upload, AI analysis, and enhancement of a single resume. You can
                  make minor edits to the optimized resume without using another optimization credit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Boost Your Job Search?</h2>
                <p className="max-w-[700px] md:text-xl">Choose a plan and start optimizing your resume today.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/upload">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
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

