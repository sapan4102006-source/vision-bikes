import React from 'react';
import { Shield, DollarSign, Store, Clock, Users, Award } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: Shield,
      title: 'Assured Bikes',
      description: 'All our vehicles are thoroughly inspected and maintained to ensure your safety and reliability on every ride.',
    },
    {
      icon: DollarSign,
      title: 'Lowest Price',
      description: 'We offer competitive rates with transparent pricing and no hidden fees, making premium bikes accessible to everyone.',
    },
    {
      icon: Store,
      title: 'One Stop Shop',
      description: 'From cruisers to sportbikes, find everything you need in one place with our comprehensive rental services.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help during your rental experience.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced team provides personalized recommendations to help you choose the perfect ride.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We maintain the highest standards with regular servicing and quality checks on all our vehicles.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-primary">Vision Bikes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing the best two-wheeler rental experience 
            with unmatched service quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-black p-8 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 hover:transform hover:translateY-[-4px]"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-black p-8 rounded-lg border border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="h-12 w-px bg-gray-800"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-300">Premium Bikes</div>
            </div>
            <div className="h-12 w-px bg-gray-800"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}