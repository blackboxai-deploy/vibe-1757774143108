"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Machine Learning: Trends to Watch in 2024",
    excerpt: "Explore the latest developments in machine learning, from automated ML pipelines to federated learning and their impact on business applications.",
    author: "Dr. Sarah Mitchell",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Machine Learning",
    image: "https://files.aicdn.pro/4bbca1ba4e8f5e3bccf4aa8b1ff13b6e.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Implementing Ethical AI: A Comprehensive Guide for Businesses",
    excerpt: "Learn how to develop and deploy AI systems that are fair, transparent, and responsible while maintaining competitive advantages.",
    author: "Dr. Elena Rodriguez", 
    date: "December 10, 2024",
    readTime: "12 min read",
    category: "Ethics & Governance",
    image: "https://files.aicdn.pro/4bbca1ba4e8f5e3bccf4aa8b1ff13b6e.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Computer Vision in Manufacturing: Revolutionizing Quality Control",
    excerpt: "Discover how computer vision technologies are transforming manufacturing processes and improving product quality across industries.",
    author: "Michael Chen",
    date: "December 5, 2024", 
    readTime: "10 min read",
    category: "Computer Vision",
    image: "https://files.aicdn.pro/4bbca1ba4e8f5e3bccf4aa8b1ff13b6e.jpg",
    featured: false
  },
  {
    id: 4,
    title: "NLP Applications: From Chatbots to Document Intelligence",
    excerpt: "Explore the evolving landscape of natural language processing and its applications in modern business scenarios.",
    author: "Dr. Elena Rodriguez",
    date: "November 28, 2024",
    readTime: "9 min read", 
    category: "Natural Language Processing",
    image: "https://files.aicdn.pro/4bbca1ba4e8f5e3bccf4aa8b1ff13b6e.jpg",
    featured: false
  },
  {
    id: 5,
    title: "AI ROI: Measuring the Success of Your AI Implementations",
    excerpt: "Learn effective strategies for measuring and maximizing the return on investment of your artificial intelligence projects.",
    author: "James Wilson",
    date: "November 20, 2024",
    readTime: "7 min read",
    category: "Business Strategy",
    image: "https://files.aicdn.pro/4bbca1ba4e8f5e3bccf4aa8b1ff13b6e.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Deep Learning Demystified: A Business Leader's Guide",
    excerpt: "Understand the fundamentals of deep learning and how it can transform your business operations and decision-making processes.",
    author: "Dr. Sarah Mitchell",
    date: "November 15, 2024",
    readTime: "11 min read",
    category: "Deep Learning",
    image: "https://files.aicdn.pro/4bbca1ba4e8f5e3bccf4aa8b1ff13b6e.jpg",
    featured: false
  }
];

const categories = [
  "All",
  "Machine Learning", 
  "Natural Language Processing",
  "Computer Vision",
  "Deep Learning",
  "Ethics & Governance",
  "Business Strategy"
];

const resources = [
  {
    title: "AI Readiness Assessment Tool",
    description: "Evaluate your organization's readiness for AI implementation with our comprehensive assessment framework.",
    type: "Tool",
    downloadUrl: "#"
  },
  {
    title: "Machine Learning Implementation Guide",
    description: "Step-by-step guide for implementing machine learning solutions in enterprise environments.",
    type: "White Paper",
    downloadUrl: "#"
  },
  {
    title: "AI Ethics Checklist",
    description: "Essential checklist for ensuring ethical AI development and deployment in your organization.",
    type: "Checklist", 
    downloadUrl: "#"
  },
  {
    title: "ROI Calculator for AI Projects",
    description: "Calculate the potential return on investment for your artificial intelligence initiatives.",
    type: "Calculator",
    downloadUrl: "#"
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest trends, insights, and best practices in artificial intelligence. 
              Our experts share knowledge to help you navigate the AI landscape successfully.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-blue-600 text-sm font-medium">{featuredPost.category}</span>
                    </div>
                    <CardTitle className="text-2xl mb-4 hover:text-blue-600 transition-colors duration-200">
                      <Link href={`/blog/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </CardTitle>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <span>By {featuredPost.author}</span>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.id}`}>Read Full Article</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </section>
          )}

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                    <option>Latest</option>
                    <option>Most Popular</option>
                    <option>Most Relevant</option>
                  </select>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-sm rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-lg mb-3 hover:text-blue-600 transition-colors duration-200">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md transition-colors duration-200"
                    >
                      {category}
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Free Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {resource.type}
                        </span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={resource.downloadUrl}>Download</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to our newsletter for the latest AI insights and resources.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}