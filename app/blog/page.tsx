import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { formatDate } from "@/lib/utils"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 ATS-Friendly Resume Tips to Get Past the Bots",
    excerpt: "Learn how to optimize your resume to pass through Applicant Tracking Systems and land more interviews.",
    date: "2023-05-15",
    author: "Sarah Johnson",
    readingTime: 8,
    image: "/placeholder.svg?height=400&width=600",
    slug: "ats-friendly-resume-tips",
  },
  {
    id: 2,
    title: "The Power of Keywords: How to Make Your Resume Stand Out",
    excerpt:
      "Discover the right keywords to include in your resume to catch the attention of recruiters and ATS systems.",
    date: "2023-06-02",
    author: "Michael Chen",
    readingTime: 6,
    image: "/placeholder.svg?height=400&width=600",
    slug: "power-of-keywords",
  },
  {
    id: 3,
    title: "Resume Formats: Which One Is Right for Your Career Stage?",
    excerpt: "Explore different resume formats and learn which one best highlights your experience and skills.",
    date: "2023-06-20",
    author: "Jessica Williams",
    readingTime: 7,
    image: "/placeholder.svg?height=400&width=600",
    slug: "resume-formats",
  },
  {
    id: 4,
    title: "How to Quantify Your Achievements on Your Resume",
    excerpt: "Learn how to use numbers and metrics to make your accomplishments more impactful on your resume.",
    date: "2023-07-08",
    author: "David Rodriguez",
    readingTime: 5,
    image: "/placeholder.svg?height=400&width=600",
    slug: "quantify-achievements",
  },
  {
    id: 5,
    title: "The Do's and Don'ts of Resume Writing in 2023",
    excerpt: "Stay up-to-date with the latest resume trends and avoid common mistakes that could cost you interviews.",
    date: "2023-07-25",
    author: "Emily Thompson",
    readingTime: 9,
    image: "/placeholder.svg?height=400&width=600",
    slug: "resume-dos-and-donts",
  },
  {
    id: 6,
    title: "How AI is Changing the Recruitment Landscape",
    excerpt:
      "Understand how artificial intelligence is transforming hiring processes and how to adapt your job search strategy.",
    date: "2023-08-10",
    author: "Robert Kim",
    readingTime: 10,
    image: "/placeholder.svg?height=400&width=600",
    slug: "ai-changing-recruitment",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Resume Optimization Blog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Expert advice, tips, and insights to help you land your dream job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Featured blog post"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">The Future of Resume Optimization: AI and Beyond</CardTitle>
                  <CardDescription>
                    Explore how artificial intelligence is revolutionizing the way job seekers create and optimize their
                    resumes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As technology continues to evolve, the job application process is undergoing a significant
                    transformation. Learn how AI-powered tools are helping candidates create more effective resumes and
                    how to leverage these technologies in your job search.
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>Alex Thompson</span>
                    <span>•</span>
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(Date.now() - 7 * 24 * 60 * 60 * 1000)}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                  <Link href="/blog/future-of-resume-optimization">
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Popular Articles</h2>
                {blogPosts.slice(0, 3).map((post) => (
                  <Card key={post.id} className="flex overflow-hidden">
                    <div className="relative h-24 w-24 shrink-0">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="font-bold">{post.title}</h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </Card>
                ))}
                <Link href="#all-posts">
                  <Button variant="outline" className="w-full">
                    View All Posts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section id="all-posts" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">All Articles</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our collection of articles on resume optimization, job search strategies, and career
                  development.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-video">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Get the latest resume tips, job search strategies, and career advice delivered to your inbox.
                </p>
              </div>
              <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Enter your email" className="sm:flex-1" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

