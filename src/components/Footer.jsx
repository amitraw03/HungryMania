import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-gray-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Hungry Mania</h3>
                        <p className="text-gray-400 text-sm">Delivering happiness to your doorstep, one meal at a time. Explore the best restaurants in your area.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-indigo-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-indigo-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/rawatAmit30" className="hover:text-indigo-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>support@hungrymania.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span>123 Food Street, Cuisine City</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates.</p>
                        <div className="space-y-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder-gray-500"
                            />
                            <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>Copyright © {currentYear}</span>
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            <span>by</span>
                            <a href="https://x.com/rawatAmit30" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                                Amit Rawat
                            </a>
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;