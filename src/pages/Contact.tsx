
import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ContactForm from '@/components/common/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Get in touch with our team for inquiries, consultations, or to discuss your steel construction project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="Have questions or want to discuss your project? Reach out to us using any of the following contact methods."
                alignment="left"
              />

              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange/10 p-3 rounded-full mr-4">
                    <MapPin className="text-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-steel">Our Location</h3>
                    <p className="text-gray-600">123 Industrial Zone, Abuja, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange/10 p-3 rounded-full mr-4">
                    <Phone className="text-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-steel">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+2348012345678" className="hover:text-orange">+234 801 234 5678</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+2349087654321" className="hover:text-orange">+234 908 765 4321</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange/10 p-3 rounded-full mr-4">
                    <Mail className="text-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-steel">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@laijibsteel.com" className="hover:text-orange">info@laijibsteel.com</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:projects@laijibsteel.com" className="hover:text-orange">projects@laijibsteel.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange/10 p-3 rounded-full mr-4">
                    <Clock className="text-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-steel">Working Hours</h3>
                    <p className="text-gray-600">Monday to Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-steel">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-steel text-white p-3 rounded-full hover:bg-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="bg-steel text-white p-3 rounded-full hover:bg-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="bg-steel text-white p-3 rounded-full hover:bg-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" className="bg-steel text-white p-3 rounded-full hover:bg-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://wa.me/2348012345678" className="bg-steel text-white p-3 rounded-full hover:bg-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-steel">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Find Us" 
            subtitle="Visit our office in Abuja or reach out through any of our contact channels."
          />
          
          <div className="rounded-lg overflow-hidden shadow-lg mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252166.91434977916!2d7.249894175997172!3d9.055665565637599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2s!4v1649764872674!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LAIJIB STEEL DESIGN CO Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            For urgent inquiries or consultations, call us directly or send us a WhatsApp message.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-orange hover:bg-gray-100">
              <a href="tel:+2348012345678">
                <Phone size={18} className="mr-2" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="https://wa.me/2348012345678">
                <MessageSquare size={18} className="mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
