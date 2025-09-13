"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "ml",
    title: "Machine Learning",
    shortDesc: "Advanced algorithms that learn and adapt from your data",
    description: "Our machine learning solutions enable your systems to automatically improve performance through experience. We develop custom algorithms for classification, regression, clustering, and recommendation systems that scale with your business needs.",
    features: [
      "Supervised & Unsupervised Learning",
      "Feature Engineering & Selection",
      "Model Training & Validation", 
      "Performance Optimization",
      "Real-time Prediction APIs",
      "Automated Model Retraining"
    ],
    useCases: [
      "Customer behavior prediction",
      "Fraud detection systems",
      "Price optimization",
      "Quality control automation",
      "Risk assessment models"
    ],
    image: "https://files.aicdn.pro/da48b7e5962c2f3d3c23e7a6dc4b1db7.jpg",
    pricing: "Starting at $15,000",
    timeline: "8-16 weeks"
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    shortDesc: "Intelligent text analysis and conversational AI systems",
    description: "Transform how your business handles text data with our NLP solutions. From sentiment analysis to intelligent chatbots, we help you extract valuable insights from unstructured text and enable natural human-computer interactions.",
    features: [
      "Text Classification & Sentiment Analysis",
      "Named Entity Recognition",
      "Conversational AI & Chatbots",
      "Language Translation",
      "Document Processing",
      "Voice-to-Text Integration"
    ],
    useCases: [
      "Customer support automation",
      "Document analysis & summarization",
      "Content moderation",
      "Market sentiment tracking",
      "Multilingual customer service"
    ],
    image: "https://files.aicdn.pro/da48b7e5962c2f3d3c23e7a6dc4b1db7.jpg",
    pricing: "Starting at $12,000",
    timeline: "6-12 weeks"
  },
  {
    id: "cv",
    title: "Computer Vision",
    shortDesc: "Intelligent image and video analysis solutions",
    description: "Leverage the power of visual intelligence with our computer vision solutions. We develop systems that can see, understand, and analyze visual content to automate processes and provide actionable insights.",
    features: [
      "Object Detection & Recognition",
      "Facial Recognition Systems",
      "Quality Control Automation",
      "Video Analytics",
      "Optical Character Recognition",
      "Real-time Image Processing"
    ],
    useCases: [
      "Manufacturing quality control",
      "Security & surveillance systems",
      "Medical image analysis",
      "Retail inventory management",
      "Autonomous vehicle systems"
    ],
    image: "https://files.aicdn.pro/da48b7e5962c2f3d3c23e7a6dc4b1db7.jpg",
    pricing: "Starting at $18,000",
    timeline: "10-20 weeks"
  },
  {
    id: "consulting",
    title: "AI Strategy & Consulting",
    shortDesc: "Strategic guidance for AI transformation",
    description: "Navigate your AI journey with confidence. Our consulting services help you identify opportunities, develop AI strategies, and implement solutions that align with your business objectives and drive measurable results.",
    features: [
      "AI Readiness Assessment",
      "Strategic Roadmap Development",
      "Technology Architecture Design",
      "Implementation Planning",
      "Change Management Support",
      "ROI Analysis & KPI Definition"
    ],
    useCases: [
      "Digital transformation strategy",
      "AI opportunity identification",
      "Technology stack evaluation",
      "Process automation planning",
      "Organizational AI adoption"
    ],
    image: "https://files.aicdn.pro/da48b7e5962c2f3d3c23e7a6dc4b1db7.jpg",
    pricing: "Starting at $8,000",
    timeline: "4-8 weeks"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our AI Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive artificial intelligence solutions designed to transform your business 
              operations and unlock new opportunities for growth and innovation.
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">Starting Price</div>
                      <div className="text-lg font-semibold text-gray-900">{service.pricing}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="text-lg font-semibold text-gray-900">{service.timeline}</div>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href={`/contact?service=${service.id}`}>
                      Get Quote for {service.title}
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.shortDesc}`}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your business. 
            Schedule a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}