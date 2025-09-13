"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { number: "500+", label: "AI Projects Completed" },
  { number: "98%", label: "Client Satisfaction Rate" },
  { number: "50+", label: "AI Specialists" },
  { number: "8+", label: "Years of Experience" }
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Chief Technology Officer",
    bio: "Former Google AI researcher with 12+ years in machine learning and deep learning. Published author of 50+ research papers in top-tier AI conferences.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35954e7d-3c32-4096-b544-d04065b9f307.png",
    specialties: ["Deep Learning", "Neural Networks", "Research & Development"]
  },
  {
    name: "Michael Chen",
    title: "Head of Machine Learning",
    bio: "Ex-Microsoft AI architect specializing in large-scale ML systems. Led teams that deployed AI solutions serving millions of users worldwide.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca45e2be-9e81-4037-acb2-436340ed91cc.png",
    specialties: ["MLOps", "Scalable Systems", "Computer Vision"]
  },
  {
    name: "Dr. Elena Rodriguez",
    title: "NLP Research Director",
    bio: "PhD in Computational Linguistics from Stanford. Expert in natural language understanding, sentiment analysis, and conversational AI systems.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df63237f-ac0b-4e7e-b837-ebfa48e04bb4.png",
    specialties: ["NLP", "Conversational AI", "Language Models"]
  },
  {
    name: "James Wilson",
    title: "AI Solutions Architect",
    bio: "15+ years in enterprise software architecture. Specializes in integrating AI solutions with existing business systems and processes.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0d46eb62-acc6-44bd-8988-ec65cf89c393.png",
    specialties: ["System Integration", "Enterprise AI", "Solution Design"]
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We stay at the forefront of AI technology, continuously exploring new methodologies and breakthrough techniques to deliver cutting-edge solutions."
  },
  {
    title: "Ethical AI",
    description: "We are committed to developing responsible AI systems that are fair, transparent, and respect user privacy while delivering exceptional business value."
  },
  {
    title: "Client Success",
    description: "Your success is our priority. We work closely with clients to understand their unique challenges and deliver solutions that exceed expectations."
  },
  {
    title: "Excellence in Execution",
    description: "From initial consultation to final deployment, we maintain the highest standards of quality and professionalism in every project we undertake."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Pioneering the Future of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Founded by leading AI researchers and industry experts, AI Solutions is dedicated to 
                transforming businesses through innovative artificial intelligence technologies. 
                We bridge the gap between cutting-edge research and practical business applications.
              </p>
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35269bbe-49da-4997-a48b-d567b6c757f1.png"
                alt="AI Solutions team working on innovative projects"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                AI Solutions was founded in 2016 by a team of visionary researchers and engineers who 
                recognized the transformative potential of artificial intelligence for businesses across 
                all industries. Our founders, coming from prestigious institutions like MIT, Stanford, 
                and leading tech companies, shared a common vision: to make advanced AI accessible and 
                practical for real-world applications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                What started as a small research-focused consultancy has grown into a full-service AI 
                company serving Fortune 500 companies and innovative startups alike. Our journey has 
                been marked by breakthrough projects in healthcare, finance, manufacturing, and beyond, 
                each one pushing the boundaries of what's possible with artificial intelligence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to lead the industry with our unique combination of cutting-edge 
                research, practical engineering expertise, and deep understanding of business needs. 
                Every solution we develop is built on a foundation of scientific rigor and real-world 
                applicability, ensuring our clients get the most advanced and effective AI systems available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of research experience with proven industry expertise 
              to deliver world-class AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the hundreds of companies that trust AI Solutions to deliver innovative, 
            reliable, and scalable artificial intelligence systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/contact">Start Your AI Journey</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}