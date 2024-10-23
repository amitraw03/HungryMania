import Header from "./Header";
import Footer from "./Footer";
import { Star, Shield, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-indigo-500" />,
      title: "Quality First",
      description: "We partner with only the best restaurants to ensure top-quality dining experiences for our customers."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Safe & Reliable",
      description: "Our platform ensures secure transactions and reliable delivery services for peace of mind."
    },
    {
      icon: <Heart className="w-8 h-8 text-indigo-500" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We're committed to providing exceptional service every time."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow bg-gradient-to-b from-white to-indigo-50">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Hungry Mania</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connecting food lovers with their favorite restaurants since 2020. We're passionate about making food delivery convenient, reliable, and delightful.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-8">
                To revolutionize the food delivery experience by connecting people with the best restaurants in their city, 
                while providing exceptional service and supporting local businesses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-indigo-100">Restaurant Partners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">30k+</div>
                  <div className="text-indigo-100">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-indigo-100">Cities Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;