"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "AI Solutions transformed our customer service with their intelligent chatbot implementation. Response times improved by 80% and customer satisfaction reached an all-time high.",
    author: "Sarah Chen",
    title: "CTO, TechFlow Solutions",
    company: "TechFlow",
    rating: 5,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efa8237c-f822-4792-a2ad-f7a9b1486c12.png",
  },
  {
    content: "The predictive analytics model they built has revolutionized our supply chain management. We've reduced costs by 35% while improving delivery accuracy.",
    author: "Michael Rodriguez",
    title: "Operations Director, GlobalTrade Inc",
    company: "GlobalTrade",
    rating: 5,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10906929-4220-4e79-818d-206ebd28fbd2.png",
  },
  {
    content: "Their computer vision solution automated our quality control process with 99.7% accuracy. The ROI was evident within the first quarter of implementation.",
    author: "Emily Watson",
    title: "Head of Manufacturing, Precision Industries",
    company: "Precision Industries",
    rating: 5,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99e93103-9e1d-4b7a-94cd-cb0682a6fd9c.png",
  },
  {
    content: "Working with AI Solutions was seamless. Their expertise in natural language processing helped us build a document analysis system that processes 10x faster than our previous method.",
    author: "David Kim",
    title: "Innovation Manager, DataCorp",
    company: "DataCorp",
    rating: 5,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1f10c3c-cc2d-4fcd-a8d8-64898b7e95ef.png",
  },
  {
    content: "The machine learning recommendation engine increased our sales by 45%. Their team provided exceptional support throughout the entire implementation process.",
    author: "Lisa Thompson",
    title: "VP of Marketing, RetailPro",
    company: "RetailPro",
    rating: 5,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39fe6630-9b96-40ca-87c2-9984dce14436.png",
  },
  {
    content: "AI Solutions delivered a fraud detection system that reduced false positives by 70% while maintaining 99.9% accuracy. Outstanding technical expertise and project management.",
    author: "Robert Johnson",
    title: "Chief Security Officer, FinanceSecure",
    company: "FinanceSecure",
    rating: 5,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f0b6772-a0a7-4587-840f-ac2a557cffdb.png",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are transforming their operations with our AI solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <Avatar className="w-12 h-12">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.author} - ${testimonial.title}`}
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Join these successful companies in their AI transformation journey</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
}