import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Lucide icons


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo or brand name */}
                    <div className="text-2xl font-semibold mb-4 md:mb-0">
                        <a href="/" className="text-white hover:text-gray-300">Your Brand</a>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap space-x-6 mb-4 md:mb-0">
                        <a href="#about" className="hover:text-gray-300">About</a>
                        <a href="#services" className="hover:text-gray-300">Services</a>
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                        <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook className="text-2xl hover:text-gray-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="text-2xl hover:text-gray-300" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="text-2xl hover:text-gray-300" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="text-2xl hover:text-gray-300" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
