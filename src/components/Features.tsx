import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Machine Learning",
    description: "Advanced algorithms that learn and adapt from data to make accurate predictions and automate complex decision-making processes.",
    gradient: "from-blue-500 to-blue-600",
    stats: "99.2% Accuracy"
  },
  {
    title: "Natural Language Processing",
    description: "Sophisticated text analysis, language understanding, and conversational AI systems that communicate naturally with users.",
    gradient: "from-green-500 to-green-600",
    stats: "40+ Languages"
  },
  {
    title: "Computer Vision",
    description: "Intelligent image and video analysis for object recognition, facial detection, and automated visual quality control.",
    gradient: "from-purple-500 to-purple-600",
    stats: "Real-time Processing"
  },
  {
    title: "Deep Learning",
    description: "Neural network architectures that solve complex problems through pattern recognition and feature extraction.",
    gradient: "from-orange-500 to-orange-600",
    stats: "Billion+ Parameters"
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven forecasting and trend analysis to help businesses make informed strategic decisions.",
    gradient: "from-teal-500 to-teal-600",
    stats: "85% Forecast Accuracy"
  },
  {
    title: "AI Consulting",
    description: "Strategic guidance and implementation support to integrate AI solutions seamlessly into your business operations.",
    gradient: "from-indigo-500 to-indigo-600",
    stats: "500+ Implementations"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our suite of artificial intelligence services covers every aspect of intelligent 
            automation, from data processing to decision making.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardHeader className="pb-4">
                {/* Feature Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white rounded-md opacity-90"></div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${feature.gradient} text-white`}>
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of companies already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}