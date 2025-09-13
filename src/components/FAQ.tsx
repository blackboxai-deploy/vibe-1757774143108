"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer: "We provide comprehensive AI solutions including machine learning models, natural language processing systems, computer vision applications, predictive analytics, deep learning implementations, and AI consulting services. Our solutions are customized to meet your specific business needs and industry requirements."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary based on project complexity and scope. Simple solutions like chatbots can be deployed in 2-4 weeks, while complex machine learning models may take 3-6 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process."
  },
  {
    question: "Do I need existing data to start with AI?",
    answer: "While existing data certainly helps, it's not always mandatory. We can work with various data scenarios - from leveraging your existing datasets to helping you establish data collection strategies. For some solutions, we can utilize pre-trained models and transfer learning techniques to get you started with minimal data requirements."
  },
  {
    question: "How do you ensure the security and privacy of our data?",
    answer: "Data security and privacy are our top priorities. We implement enterprise-grade security measures including end-to-end encryption, secure data storage, access controls, and compliance with regulations like GDPR and CCPA. We can also deploy solutions on-premises or in private cloud environments to meet your security requirements."
  },
  {
    question: "What ongoing support do you provide after implementation?",
    answer: "We provide comprehensive post-implementation support including system monitoring, performance optimization, model retraining, bug fixes, and feature updates. Our support packages range from basic maintenance to full managed services, ensuring your AI systems continue to deliver optimal performance as your business grows."
  },
  {
    question: "How do you measure the ROI of AI implementations?",
    answer: "We establish clear KPIs and success metrics before implementation, such as cost reduction, efficiency improvements, accuracy gains, or revenue increases. We provide regular performance reports and analytics dashboards to track ROI. Most clients see measurable results within 3-6 months of deployment."
  },
  {
    question: "Can AI solutions integrate with our existing systems?",
    answer: "Absolutely! Our AI solutions are designed to integrate seamlessly with existing business systems, databases, and workflows. We support various integration methods including APIs, webhooks, database connections, and custom middleware. Our team ensures minimal disruption to your current operations during integration."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve diverse industries including healthcare, finance, retail, manufacturing, logistics, technology, and professional services. Our team has deep expertise across various sectors and can adapt our AI solutions to meet specific industry regulations, requirements, and best practices."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our AI solutions and implementation process.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI experts are here to help you understand how artificial intelligence can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}