import Header from "./Header";
import Footer from "./Footer";
import { Star, Shield, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-indigo-500" />,
      title: "Quality First",
      description:
        "We partner with only the best restaurants to ensure top-quality dining experiences for our customers."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Safe & Reliable",
      description:
        "Our platform ensures secure transactions and reliable delivery services for peace of mind."
    },
    {
      icon: <Heart className="w-8 h-8 text-indigo-500" />,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We're committed to providing exceptional service every time."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative min-h-[400px] md:min-h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }} // Keep existing hero-image props
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Hungry Mania
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Connecting food lovers with their favorite restaurants since 2020.
              We are passionate about revolutionizing the food delivery experience
              with convenience, reliability, and delight.
            </p>
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-white rounded-xl shadow-md">
                {/* Feature content */}
                <div className="inline-block p-4 bg-indigo-50 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* (Optional) Mission Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-8 rounded-xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              To revolutionize the food delivery experience by connecting people with the best restaurants in their city, while providing exceptional service and supporting local businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
