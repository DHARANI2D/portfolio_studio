import { ContactForm } from "../contact-form";
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on exciting cybersecurity projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a href="mailto:dharanidharan2d@gmail.com" className="text-cyan-400 hover:underline">dharanidharan2d@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a href="tel:+916385854466" className="text-cyan-400 hover:underline">+91 6385854466</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-cyan-400">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://github.com/DHARANI2D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:scale-110 transform"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="mailto:dharanidharan2d@gmail.com" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 p-4 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 hover:scale-110 transform"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}